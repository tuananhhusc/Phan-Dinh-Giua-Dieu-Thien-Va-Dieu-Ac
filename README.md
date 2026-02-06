# Phân Định Giữa Điều Thiện Và Điều Ác
## Khảo sát Thần học & Kinh Thánh

Dự án này là một trang web tĩnh (Static Web App) được xây dựng bằng **Next.js**, trình bày một báo cáo chuyên sâu về thần học và phân định thiêng liêng theo truyền thống Công giáo.

![Giao diện chính](public/thumbnail.jpg) *<!-- Bạn có thể thêm ảnh chụp màn hình vào đây -->*

## 🚀 Công Nghệ Sử Dụng

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Cormorant Garamond (Tiêu đề) & Merriweather (Nội dung)

## 🛠️ Cài Đặt & Chạy Thử

1.  **Cài đặt dependencies**:
    ```bash
    npm install
    ```

2.  **Chạy server phát triển (Development)**:
    ```bash
    npm run dev
    ```
    Truy cập [http://localhost:3000](http://localhost:3000) để xem trang web.

3.  **Build bản production**:
    ```bash
    npm run build
    ```
    Kết quả sẽ được xuất ra thư mục `out/`.

## 📦 Hướng Dẫn Deploy lên GitHub Pages

Dự án này đã được cấu hình sẵn để deploy tự động lên GitHub Pages thông qua GitHub Actions.

### Bước 1: Tạo Repository trên GitHub
1. Truy cập [GitHub](https://github.com/new) và tạo một repository mới (ví dụ: `phan-dinh-thien-ac`).
2. **Không** chọn "Initialize with README".

### Bước 2: Đẩy code lên GitHub
Mở terminal tại thư mục dự án và chạy các lệnh sau:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
# Thay <USERNAME> bằng tên GitHub của bạn
# Thay <REPO_NAME> bằng tên repository bạn vừa tạo
git push -u origin main
```

### Bước 3: Cấu hình Next.js (Quan trọng)
Nếu bạn deploy vào địa chỉ dạng `username.github.io/repo-name`, bạn cần chỉnh sửa file `next.config.ts`:

1. Mở `next.config.ts`.
2. Bỏ comment (dấu `//`) ở dòng `basePath` và đổi tên repository cho đúng:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/ten-repository-cua-ban', // <--- Sửa dòng này
   };
   ```
3. Commit và push thay đổi lên GitHub:
   ```bash
   git add .
   git commit -m "Update config for GitHub Pages path"
   git push
   ```

### Bước 4: Kích hoạt GitHub Pages
1. Vào trang Repository trên GitHub > **Settings** > **Pages**.
2. Tại mục **Build and deployment** > **Source**, chọn **GitHub Actions**.
3. GitHub sẽ tự động nhận diện workflow trong `.github/workflows/deploy.yml` và bắt đầu deploy.
4. Sau khi deploy xong, link trang web sẽ hiện ra (Ví dụ: `https://username.github.io/repo-name`).

## 📁 Cấu Trúc Dự Án

```
├── app/
│   ├── layout.tsx      # Layout chính (Fonts, Global CSS)
│   ├── page.tsx        # Trang chủ (lắp ghép các components)
│   └── globals.css     # Tailwind imports & Custom styles
├── components/
│   ├── Hero.tsx            # Header đầu trang
│   ├── TableOfContents.tsx # Menu bên trái (Desktop)
│   ├── MobileMenu.tsx      # Menu rút gọn (Mobile)
│   └── ReportRenderer.tsx  # Hiển thị nội dung báo cáo
├── lib/
│   └── reportData.ts   # Dữ liệu bài viết (JSON structure)
└── public/             # Tài nguyên tĩnh (ảnh, fonts...)
```
