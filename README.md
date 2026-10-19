# FoTech Solutions — Website hệ sinh thái

Website giới thiệu hệ sinh thái sản phẩm FoTech Solutions, xây dựng bằng React, TypeScript và Vite. Ứng dụng gồm trang doanh nghiệp FoTech, landing page riêng cho FoHRM và FoMed, các section giới thiệu sản phẩm, bảng giá, biểu mẫu liên hệ và API gửi email.

## Mục lục

- [Công nghệ](#công-nghệ)
- [Yêu cầu môi trường](#yêu-cầu-môi-trường)
- [Cài đặt và chạy local](#cài-đặt-và-chạy-local)
- [Biến môi trường](#biến-môi-trường)
- [Các trang và đường dẫn](#các-trang-và-đường-dẫn)
- [Cấu trúc source](#cấu-trúc-source)
- [Biểu mẫu và email](#biểu-mẫu-và-email)
- [SEO và chia sẻ liên kết](#seo-và-chia-sẻ-liên-kết)
- [Build và triển khai](#build-và-triển-khai)

## Công nghệ

- React 19, TypeScript 5 và React Router
- Vite 7, Tailwind CSS 4
- Framer Motion, Lenis và Swiper cho chuyển động, cuộn và nội dung dạng slider
- Lucide React cho icon giao diện
- Resend cho email từ biểu mẫu liên hệ
- Vercel Functions và Vercel rewrites cho triển khai

## Yêu cầu môi trường

- Node.js phiên bản 20 trở lên
- npm

## Cài đặt và chạy local

```bash
npm install
npm run dev
```

Vite chạy ở `http://localhost:5173`. Lệnh dev bind tới `0.0.0.0`, vì vậy có thể truy cập từ thiết bị khác trong cùng mạng nếu firewall cho phép.

Các lệnh dự án:

| Lệnh | Công dụng |
| --- | --- |
| `npm run dev` | Chạy máy chủ phát triển Vite |
| `npm run build` | Kiểm tra TypeScript và tạo bản build trong `dist/` |
| `npm run preview` | Phục vụ thử bản build local |
| `npm run lint` | Kiểm tra quy tắc ESLint |

## Biến môi trường

Tạo file `.env.local` ở thư mục gốc cho môi trường local. Các giá trị này chỉ dùng ở server; không thêm tiền tố `VITE_` cho API key và không commit file môi trường.

```dotenv
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL="FoTech Website <website@your-verified-domain.example>"
CONTACT_TO_EMAIL=your-inbox@example.com
```

| Tên | Bắt buộc | Mô tả |
| --- | --- | --- |
| `RESEND_API_KEY` | Có | API key của Resend có quyền gửi email |
| `RESEND_FROM_EMAIL` | Có | Địa chỉ người gửi thuộc domain đã xác minh trên Resend |
| `CONTACT_TO_EMAIL` | Không | Hộp thư nhận đăng ký; nếu bỏ trống, API dùng địa chỉ dự phòng được khai báo trong `src/services/contact.js` |

Khi chạy local, Vite đọc các biến trên và cung cấp endpoint giả lập server tại `/api/contact`. Trên Vercel, thêm cùng các biến trong **Project Settings → Environment Variables**, chọn môi trường cần dùng rồi redeploy để áp dụng thay đổi.

## Các trang và đường dẫn

| Đường dẫn | Trang |
| --- | --- |
| `/` | Trang chủ FoTech Solutions, giới thiệu hệ sinh thái và dịch vụ |
| `/app/fohrm` | Landing page FoHRM |
| `/app/fomed` | Landing page FoMed |
| `/fohrm` | Chuyển hướng tương thích sang `/app/fohrm` |

FoCode và Troo.vn hiện được giới thiệu trong nội dung hệ sinh thái, menu và phần dịch vụ; router hiện chưa khai báo landing page riêng cho hai sản phẩm này.

Các trang dùng chung navbar, footer doanh nghiệp, modal liên hệ và một số tiện ích giao diện. Logo trên navbar dẫn về trang chủ FoTech. FoHRM dùng giao diện tối mặc định; FoMed chỉ dùng giao diện sáng; trang FoTech có thể đổi giao diện và lưu lựa chọn trong trình duyệt.

## Cấu trúc source

```text
api/                         Vercel Function cho POST /api/contact
public/                      Favicon, OG images, sitemap, robots và tệp xác minh
src/
  assets/                    Hình ảnh, logo và tài nguyên theo thương hiệu
  components/
    common/                  SEO, splash screen và điều hướng cuộn
    layout/                  Navbar, menu sản phẩm và footer
    ui/                      Thành phần giao diện dùng chung
  contexts/                  Theme context
  hooks/                     Hook dùng chung, gồm smooth scrolling
  modules/
    contact/                 Modal, dữ liệu sản phẩm và kiểm tra biểu mẫu
    cta/                     FAQ và CTA
    ecosystem/               Thẻ và nội dung hệ sinh thái
    feature/                 Nội dung tích hợp và tính năng
    fohrm/                   Hero, Bento, quy trình và bảng giá FoHRM
    fomed/                   Hero, tính năng, workflow, bảng giá và footer FoMed
    hero/                    Hero trang FoTech
    marketing/               Section giới thiệu FoTech
    pricing/                 Danh mục dịch vụ và bảng giá trang FoTech
  pages/                     Composition các trang theo route
  routes/                    Khai báo route và favicon động
  services/                  Gửi email liên hệ và tiện ích dịch vụ
  styles/                    CSS toàn cục
```

`@/` là alias trỏ tới `src/`. Khi thêm trang sản phẩm, cập nhật route trong `src/routes/AppRoutes.tsx`, nội dung trang trong `src/pages/`, cấu hình navbar trong `src/components/layout/navbar/navbarData.ts`, metadata trong `src/components/common/SEO.tsx` và metadata tĩnh tương ứng trong `vite.config.ts` nếu trang cần preview mạng xã hội khi chia sẻ.

## Biểu mẫu và email

Form liên hệ gửi JSON bằng `POST /api/contact`. API kiểm tra tên, email, số điện thoại, doanh nghiệp, sản phẩm và nhu cầu; email được gửi qua Resend, kèm HTML và nội dung văn bản. Địa chỉ người gửi phải thuộc domain đã xác minh và được cấu hình trong `RESEND_FROM_EMAIL`.

- Local: middleware `local-contact-api` trong `vite.config.ts` gọi chung handler `src/services/contact.js`.
- Vercel: `api/contact.js` xuất handler từ `src/services/contact.js`.
- Endpoint chỉ nhận `POST`; dữ liệu không hợp lệ trả về `400`, method khác trả về `405`. Lỗi cấu hình hoặc gửi mail được trả bằng mã lỗi phía server để giao diện hiển thị thông báo phù hợp.

Không đặt API key trong mã frontend, không commit `.env`/`.env.local`, và không gửi các giá trị bí mật lên client.

## SEO và chia sẻ liên kết

- Metadata chung của trang chủ nằm trong `index.html` và `CorporateHomePage.tsx`.
- Mỗi trang sản phẩm khai báo title, description, keywords, canonical URL, Open Graph image và structured data trong page component.
- Plugin `route-specific-social-metadata` của Vite tạo `dist/app/fohrm.html` và `dist/app/fomed.html` khi build để crawler đọc được metadata riêng ngay trong HTML.
- Ảnh preview mạng xã hội hiện nằm trong `public/fotech-og-image.png`, `public/fohrm-og-image.png` và `public/fomed-og-image.png`.
- `public/robots.txt` và `public/sitemap.xml` khai báo cho crawler.

Khi cập nhật metadata hoặc OG image, giữ URL canonical và ảnh preview đồng nhất giữa page component, `vite.config.ts`, `index.html` và sitemap khi các tệp đó có khai báo cùng trang.

## Build và triển khai

Tạo bản production:

```bash
npm run build
```

Vite tạo tài nguyên trong `dist/`, đồng thời sinh HTML riêng cho FoHRM và FoMed. `vercel.json` chuyển các domain `fotech.vn` và `www.fotech.vn` sang `www.fotech.solutions`, phục vụ các trang sản phẩm qua rewrites và gửi các đường dẫn còn lại về ứng dụng SPA.

Triển khai trên Vercel:

1. Kết nối repository với Vercel và dùng preset Vite.
2. Đặt build command là `npm run build`; output directory là `dist`.
3. Thêm `RESEND_API_KEY`, `RESEND_FROM_EMAIL` và tùy chọn `CONTACT_TO_EMAIL` cho môi trường cần gửi email.
4. Deploy lại sau khi thay đổi environment variables.

Các file `.env` và `.env.local`, `node_modules/`, `dist/` đã được loại khỏi Git bởi `.gitignore`.
