# Cấu trúc Cơ sở dữ liệu (Mock Database)

Dự án sử dụng `localStorage` của trình duyệt để mô phỏng một cơ sở dữ liệu quan hệ đơn giản. Dưới đây là cấu trúc các bảng và dữ liệu.

## 1. Bảng `adidas_users` (Danh sách người dùng)
Được quản lý thông qua `auth.js`.

| Trường | Kiểu dữ liệu | Mô tả |
| :--- | :--- | :--- |
| `username` | String (Unique) | Tên đăng nhập |
| `fullname` | String | Họ và tên đầy đủ |
| `email` | String (Unique) | Địa chỉ email |
| `password` | String | Mật khẩu (Dạng text chuyên cho demo) |

**Dữ liệu mặc định:**
- Admin: `admin` / `123`

---

## 2. Bảng `cart_{username}` (Giỏ hàng của từng User)
Mỗi user có một giỏ hàng riêng biệt được lưu trữ theo key prefix.

| Trường | Kiểu dữ liệu | Mô tả |
| :--- | :--- | :--- |
| `id` | String | ID sản phẩm |
| `name` | String | Tên sản phẩm |
| `price` | String | Giá sản phẩm |
| `img` | String (Path) | Đường dẫn hình ảnh |

---

## 3. Bảng `wishlist_{username}` (Danh sách yêu thích)
Tương tự giỏ hàng, được phân tách theo từng user.

| Trường | Kiểu dữ liệu | Mô tả |
| :--- | :--- | :--- |
| `id` | String | ID sản phẩm |
| `name` | String | Tên sản phẩm |
| `price` | String | Giá sản phẩm |
| `img` | String | Đường dẫn hình ảnh |

---

## 4. Bảng `products` (Danh mục sản phẩm)
Hiện tại được định nghĩa trong `main.js` (Object).

| Trường | Kiểu dữ liệu | Mô tả |
| :--- | :--- | :--- |
| `id` | String | Mã định danh |
| `name` | String | Tên đầy đủ |
| `price` | String | Giá niêm yết |
| `img` | String | Ảnh minh họa |
| `desc` | String | Mô tả sản phẩm |
| `cat` | String | Danh mục (Football, Lifestyle, Sportswear) |

---

## Cách thức hoạt động
- **Đăng ký:** Dữ liệu được đẩy vào mảng JSON trong `localStorage.getItem('adidas_users')`.
- **Đăng nhập:** Truy vấn mảng người dùng dựa trên `username` hoặc `email`.
- **Phiên làm việc:** Lưu trữ thông qua `localStorage.setItem('currentUser', username)`.
