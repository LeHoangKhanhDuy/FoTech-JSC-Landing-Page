import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

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
  plugins: [react(), tailwindcss(), localContactApi()],
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
