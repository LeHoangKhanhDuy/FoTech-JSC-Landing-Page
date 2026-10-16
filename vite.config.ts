import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

type RouteMetadata = {
  path: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  image: string;
  imageAlt: string;
};

const routeMetadata: RouteMetadata[] = [
  {
    path: 'app/fohrm.html',
    title: 'FoHRM | Phần mềm HRM, chấm công & tính lương',
    description:
      'FoHRM (FoTech HRM) là phần mềm quản lý nhân sự của FoTech Solutions: chấm công, hồ sơ, đơn từ và tính lương. Dùng thử miễn phí 14 ngày.',
    keywords:
      'FoHRM, FoTech HRM, FoTech FoHRM, FoHRM FoTech, phần mềm quản lý nhân sự, phần mềm HRM, chấm công FaceID, phần mềm chấm công, tính lương tự động, trợ lý AI FINA, chi lương Bank API',
    canonical: 'https://www.fotech.solutions/app/fohrm',
    image: 'https://www.fotech.solutions/fohrm-og-image.png',
    imageAlt: 'FoHRM - Phần mềm quản lý nhân sự, chấm công và tính lương',
  },
  {
    path: 'app/fomed.html',
    title: 'FoMed - Phần mềm quản lý phòng khám và hồ sơ y tế',
    description:
      'FoMed hỗ trợ phòng khám quản lý lịch hẹn, bệnh nhân, hồ sơ y tế và quy trình vận hành trên một nền tảng hiện đại.',
    keywords:
      'FoMed, phần mềm quản lý phòng khám, quản lý lịch hẹn khám, hồ sơ bệnh án điện tử, quản lý bệnh nhân',
    canonical: 'https://www.fotech.solutions/app/fomed',
    image: 'https://www.fotech.solutions/fomed-og-image.png',
    imageAlt: 'FoMed - Phần mềm quản lý phòng khám và hồ sơ y tế',
  },
];

function escapeHtmlAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function setHtmlTag(html: string, pattern: RegExp, replacement: string) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `    ${replacement}\n  </head>`);
}

function setMeta(html: string, kind: 'name' | 'property', key: string, content: string) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`<meta\\b(?=[^>]*\\b${kind}=["']${escapedKey}["'])[^>]*>`, 'i');
  return setHtmlTag(
    html,
    pattern,
    `<meta ${kind}="${key}" content="${escapeHtmlAttribute(content)}" />`,
  );
}

function setRouteMetadata(html: string, metadata: RouteMetadata) {
  const escapedTitle = escapeHtmlAttribute(metadata.title);
  const escapedCanonical = escapeHtmlAttribute(metadata.canonical);
  let result = setHtmlTag(html, /<title\b[^>]*>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);
  result = setMeta(result, 'name', 'description', metadata.description);
  result = setMeta(result, 'name', 'keywords', metadata.keywords);
  result = setHtmlTag(
    result,
    /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${escapedCanonical}" />`,
  );
  result = setMeta(result, 'property', 'og:type', 'website');
  result = setMeta(result, 'property', 'og:url', metadata.canonical);
  result = setMeta(result, 'property', 'og:title', metadata.title);
  result = setMeta(result, 'property', 'og:description', metadata.description);
  result = setMeta(result, 'property', 'og:image', metadata.image);
  result = setMeta(result, 'property', 'og:image:alt', metadata.imageAlt);
  result = setMeta(result, 'property', 'og:image:width', '1672');
  result = setMeta(result, 'property', 'og:image:height', '941');
  result = setMeta(result, 'property', 'og:image:type', 'image/png');
  result = setMeta(result, 'name', 'twitter:card', 'summary_large_image');
  result = setMeta(result, 'name', 'twitter:title', metadata.title);
  result = setMeta(result, 'name', 'twitter:description', metadata.description);
  result = setMeta(result, 'name', 'twitter:image', metadata.image);
  result = setMeta(result, 'name', 'twitter:image:alt', metadata.imageAlt);
  return result;
}

function routeMetadataHtml(): Plugin {
  let outputDirectory = resolve(process.cwd(), 'dist');

  return {
    name: 'route-specific-social-metadata',
    apply: 'build',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    async writeBundle() {
      const baseHtml = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');

      await Promise.all(
        routeMetadata.map(async (metadata) => {
          const outputPath = resolve(outputDirectory, metadata.path);
          await mkdir(dirname(outputPath), { recursive: true });
          await writeFile(outputPath, setRouteMetadata(baseHtml, metadata), 'utf8');
        }),
      );
    },
  };
}

function localContactApi(): Plugin {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (request, response, next) => {
        if (request.method !== 'POST') {
          response.setHeader('Allow', 'POST');
          response.statusCode = 405;
          response.setHeader('Content-Type', 'application/json');
          response.end(JSON.stringify({ error: 'Phương thức không được hỗ trợ.' }));
          return;
        }

        try {
          const chunks: Buffer[] = [];
          let size = 0;
          for await (const chunk of request) {
            const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
            size += buffer.length;
            if (size > 16_384) {
              response.statusCode = 413;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({ error: 'Dữ liệu gửi lên quá lớn.' }));
              return;
            }
            chunks.push(buffer);
          }

          let body: Record<string, unknown>;
          try {
            body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
          } catch {
            response.statusCode = 400;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({ error: 'Dữ liệu gửi lên không hợp lệ.' }));
            return;
          }

          const contactServicePath = './src/services/contact.js';
          const { default: handleContactRequest } = await import(contactServicePath);
          await handleContactRequest(
            { method: request.method, body },
            {
              setHeader: (name: string, value: string) => response.setHeader(name, value),
              status(code: number) {
                response.statusCode = code;
                return this;
              },
              json(payload: unknown) {
                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify(payload));
              },
            },
          );
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  for (const key of ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'CONTACT_TO_EMAIL']) {
    if (env[key]) process.env[key] = env[key];
  }

  return {
  plugins: [react(), tailwindcss(), localContactApi(), routeMetadataHtml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer-motion';
          }
          if (id.includes('node_modules/ogl')) {
            return 'vendor-ogl';
          }
          if (id.includes('node_modules/swiper')) {
            return 'vendor-swiper';
          }
          if (id.includes('node_modules/react-countup')) {
            return 'vendor-countup';
          }
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-radix';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-lucide';
          }
          if (id.includes('node_modules/lenis')) {
            return 'vendor-lenis';
          }
        },
      },
    },
  },
  };
});
