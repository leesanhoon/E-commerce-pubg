Danh sách các curl command để test Category API:

1. Lấy danh sách phân trang:
```bash
curl -X GET \
  'http://localhost:5000/api/Categories' \
  -H 'Accept: application/json'

# Expected Response:
{
    "message": "Lấy danh sách danh mục thành công",
    "data": [
        {
            "id": 1,
            "name": "Súng trường",
            "description": "Các loại súng trường trong PUBG"
        },
        {
            "id": 2, 
            "name": "Súng ngắn",
            "description": "Các loại súng lục trong PUBG"
        }
    ]
}
```

2. Lấy chi tiết theo id:
```bash
curl -X GET \
  'http://localhost:5000/api/Categories/1' \
  -H 'Accept: application/json'

# Expected Response:
{
    "message": "Lấy thông tin danh mục thành công",
    "data": {
        "id": 1,
        "name": "Súng trường",
        "description": "Các loại súng trường trong PUBG"
    }
}
```

3. Tạo mới:
```bash
curl -X POST \
  'http://localhost:5000/api/Categories' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Trang phục",
    "description": "Các loại trang phục trong PUBG"
}'

# Expected Response:
{
    "message": "Tạo danh mục thành công",
    "data": {
        "id": 3,
        "name": "Trang phục", 
        "description": "Các loại trang phục trong PUBG"
    }
}
```

4. Cập nhật:
```bash
curl -X PUT \
  'http://localhost:5000/api/Categories/3' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Trang phục đặc biệt",
    "description": "Các trang phục độc quyền trong PUBG"
}'

# Expected Response:
{
    "message": "Cập nhật danh mục thành công"
}
```

5. Xóa:
```bash
curl -X DELETE \
  'http://localhost:5000/api/Categories/3' \
  -H 'Accept: application/json'

# Expected Response:
{
    "message": "Xóa danh mục thành công"
}
```

6. Tìm kiếm theo tên:
```bash
curl -X GET \
  'http://localhost:5000/api/Categories?name=súng' \
  -H 'Accept: application/json'

# Expected Response:
{
    "message": "Lấy danh sách danh mục thành công",
    "data": [
        {
            "id": 1,
            "name": "Súng trường",
            "description": "Các loại súng trường trong PUBG"
        },
        {
            "id": 2,
            "name": "Súng ngắn",
            "description": "Các loại súng lục trong PUBG"
        }
    ]
}
```

Các lỗi có thể gặp:
1. Validation Error (400 Bad Request):
```json
{
    "message": "Dữ liệu không hợp lệ",
    "errors": {
        "Name": ["Tên danh mục không được để trống"]
    }
}
```

2. Not Found Error (404):
```json
{
    "message": "Không tìm thấy danh mục có id = 999"
}
```

3. Server Error (500):
```json
{
    "message": "Đã xảy ra lỗi khi xử lý yêu cầu"
}
```