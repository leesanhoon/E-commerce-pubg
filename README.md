# E-commerce PUBG

## Cấu trúc thư mục

### Phần dành cho Quản trị viên (Admin)
```
admin/
├── components/
│   ├── categories/
│   │   ├── CategoryList.tsx
│   │   ├── CategoryForm.tsx
│   │   ├── CategoryItem.tsx
│   │   └── CategoryDelete.tsx
│   └── shared/
│       ├── Layout.tsx
│       ├── Header.tsx
│       └── Sidebar.tsx
├── services/
│   └── api/
│       └── categories.ts
├── hooks/
│   └── useCategories.ts
└── pages/
    └── categories/
        ├── index.tsx
        ├── create.tsx
        └── [id]/
            └── edit.tsx
```

### Phần dành cho Người dùng (User)
```
src/
├── components/
│   ├── products/
│   │   ├── ProductList.tsx
│   │   └── ProductItem.tsx
│   └── shared/
│       ├── Layout.tsx
│       ├── Header.tsx
│       └── Footer.tsx
├── services/
│   └── api/
│       └── products.ts
└── pages/
    ├── index.tsx
    └── products/
        └── [category]/
            └── index.tsx
```

### Thư mục chung
- **next.config.ts**: File cấu hình cho Next.js
- **package.json**: File quản lý dependencies và scripts
- **tsconfig.json**: File cấu hình TypeScript
- **public/**: Thư mục chứa tài nguyên tĩnh
  - **file.svg**: Tệp SVG
  - **globe.svg**: Tệp SVG
  - **next.svg**: Tệp SVG
  - **vercel.svg**: Tệp SVG
  - **window.svg**: Tệp SVG

### API Endpoints cho Categories
```
GET    /api/categories      - Lấy danh sách categories
POST   /api/categories      - Tạo category mới
GET    /api/categories/:id  - Lấy chi tiết category
PUT    /api/categories/:id  - Cập nhật category
DELETE /api/categories/:id  - Xóa category
```

## Chạy dự án với Docker

### Yêu cầu
- Docker
- Docker Compose

### Các bước chạy dự án

1. Build và chạy container
```bash
docker-compose up --build
```

2. Chỉ chạy container (sau khi đã build)
```bash
docker-compose up
```

3. Dừng container
```bash
docker-compose down
```

### Truy cập ứng dụng

- Frontend: http://localhost:3000
- Admin Dashboard: http://localhost:3000/admin/categories

### Lưu ý

- Đảm bảo port 3000 không bị sử dụng bởi ứng dụng khác
- Kiểm tra logs container nếu có lỗi: `docker-compose logs -f`
