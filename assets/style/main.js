
// Global Product Data
window.products = {
    'mu': { id: 'mu', name: "Áo đấu sân nhà Manchester United 25/26", price: "2.200.000₫", img: "./assets/hinhanh/Ao_djau_san_nha_Manchester_United_mua_giai_25-26_DJo_JI7428_000_plp_model.avif", desc: "Diện mạo mới đầy táo vinh quang của Quỷ Đỏ. Công nghệ HEAT.RDY giúp làm mát tối ưu trên sân cỏ.", cat: "Football" },
    'real': { id: 'real', name: "Áo Real Madrid US Pack", price: "1.800.000₫", img: "./assets/hinhanh/Ao_Real_Madrid_US_Pack_trang_JN3073_000_plp_model.avif", desc: "Phong cách hoàng gia pha trộn nét hiện đại từ bộ sưu tập US Pack độc quyền.", cat: "Lifestyle" },
    'rm_home': { id: 'rm_home', name: "Áo Đấu Sân Nhà Real Madrid Mùa Giải 2025/2026", price: "3.000.000₫", img: "./assets/hinhanh/Ao_DJau_San_Nha_Real_Madrid_Mua_Giai_2025-2026_Chinh_Hang_trang_JV5918_HM1.avif", desc: "Sắc trắng huyền thoại được nâng cấp với các chi tiết dệt chìm sang trọng, tôn vinh truyền thống của đội bóng hoàng gia Tây Ban Nha.", cat: "Football" },
    'juve': { id: 'juve', name: "Áo Đấu Sân Nhà Juventus Mùa Giải 25/26", price: "2.800.000₫", img: "./assets/hinhanh/ao-dau-san-nha-juventus-25-26.avif", desc: "Thiết kế sọc đen trắng cổ điển của bà đầm già thành Turin, sử dụng chất liệu tái chế cao cấp bảo vệ môi trường.", cat: "Football" },
    'rm_away': { id: 'rm_away', name: "Áo Đấu Sân Khách Real Madrid Mùa Giải 25/26", price: "3.000.000₫", img: "./assets/hinhanh/Ao_DJau_San_Khach_Chinh_Thuc_Real_Madrid_Mua_Giai_2025-26_Mau_xanh_da_troi_JV5920_HM1.avif", desc: "Mẫu áo sân khách với sắc màu độc đáo, giúp các ngôi sao Real Madrid luôn nổi bật trong mọi trận đấu xa nhà.", cat: "Football" },
    'messi': { id: 'messi', name: "Áo Thun In Hình Messi - Hồng Đặc Biệt", price: "1.500.000₫", img: "./assets/hinhanh/Ao_thun_in_hinh_Messi_Hong_JM8954_HM3.avif", desc: "Dòng áo thun đặc biệt vinh danh huyền thoại Lionel Messi với phối màu hồng biểu tượng của Inter Miami.", cat: "Sportswear" },
    'arsenal': { id: 'arsenal', name: "Áo Đấu Sân Nhà Arsenal Mùa Giải 25/26", price: "2.200.000₫", img: "./assets/hinhanh/ao-dau-san-nha-arsenal-25-26.avif", desc: "Sự kết hợp hoàn hảo giữa nét truyền thống của Pháo thủ và công nghệ vải dệt hiện đại hàng đầu.", cat: "Football" }
};

window.articles = {
    speed: {
        category: "PERFORMANCE x F1",
        title: "LỊCH SỬ CỦA TỐC ĐỘ: SILVER ARROWS PACK",
        img: "./assets/hinhanh/new1.avif",
        content: `<p>Sự giao thoa giữa đường đua F1 rực lửa và phong cách thời trang đường phố đã chính thức lộ diện. Bộ sưu tập adidas x Mercedes-AMG PETRONAS F1 là một minh chứng cho khát khao chinh phục vận tốc.</p><div class="news-quote">"Tốc độ không chỉ là con số trên đồng hồ, đó là một lối sống."</div><p>Lấy cảm hứng từ huyền thoại 'Silver Arrows', các thiết kế mang tông màu bạc kim loại đặc trưng, kết hợp cùng chất liệu vải kỹ thuật cao cấp nhất của Adidas.</p>`
    },
    taekwondo: {
        category: "CULTURE & STYLE",
        title: "TAEKWONDO: TỪ VÕ ĐÀI ĐẾN SÀN DIỄN THỜI TRANG",
        img: "./assets/hinhanh/new2.avif",
        content: `<p>Võ thuật không chỉ là rèn luyện thân thể, đó còn là nguồn cảm hứng bất tận cho những nhà thiết kế tại Adidas. Dòng sản phẩm Taekwondo mới mang đến một cái nhìn hoàn toàn khác về trang phục thể thao.</p>`
    },
    evo: {
        category: "RUNNING TECHNOLOGY",
        title: "ADIYERO EVO SL: ĐỊNH NGHĨA LẠI TỐC ĐỘ",
        img: "./assets/hinhanh/new3.avif",
        content: `<p>Sự kết hợp hoàn hảo giữa công nghệ đệm Lightstrike Pro và thiết kế tối giản siêu nhẹ. ADIYERO EVO SL không chỉ dành cho những cuộc đua chuyên nghiệp.</p>`
    },
    real_away: {
        category: "FOOTBALL x REAL MADRID",
        title: "REAL MADRID 25/26 AWAY KIT: SÁNG RỰC ĐƯỜNG XA",
        img: "./assets/hinhanh/new4.avif",
        content: `<p>Mẫu áo sân khách mới của Real Madrid lấy cảm hứng từ những ánh đèn đêm rực rỡ tại thủ đô Madrid. Với tông màu cam rực rỡ và các chi tiết hiện đại.</p>`
    },
    fog: {
        category: "FASHION COLLABORATION",
        title: "FEAR OF GOD ATHLETICS: TẦM NHÌN MỚI",
        img: "./assets/hinhanh/new5.avif",
        content: `<p>Jerry Lorenzo mang đến một diện mạo hoàn toàn mới cho dòng sản phẩm Athletics của Adidas thông qua sự hợp tác với Fear of God.</p>`
    }
};

// Global Logic
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'ti-check' : (type === 'warning' ? 'ti-alert' : 'ti-info-alt');
    toast.innerHTML = `<i class="${icon}"></i><span>${message}</span><div class="toast-progress"><div class="toast-progress-bar" style="animation: progress 3s linear forwards"></div></div>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('active'), 10);
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function updateBadges() {
    const user = localStorage.getItem('currentUser');
    const cartCount = document.getElementById('cartCount');
    const wishlistCount = document.getElementById('wishlistCount');
    const userDisplay = document.getElementById('userNameDisplay');
    const userLink = document.querySelector('.user-info a');

    if (userDisplay && user) {
        userDisplay.innerText = user.toUpperCase();
        if (userLink) {
            userLink.href = "javascript:void(0)";
            userLink.innerHTML = '<i class="ti-power-off" title="Logout" onclick="logout()"></i>';
        }
    }

    if (!user) {
        if (cartCount) cartCount.style.display = 'none';
        if (wishlistCount) wishlistCount.style.display = 'none';
        if (userDisplay) userDisplay.innerText = 'GUEST';
        if (userLink) {
            userLink.href = "login.html";
            userLink.innerHTML = '<i class="ti-user"></i>';
        }
        return;
    }
    const cart = JSON.parse(localStorage.getItem(`cart_${user}`) || '[]');
    const wishlist = JSON.parse(localStorage.getItem(`wishlist_${user}`) || '[]');
    if (cartCount) {
        if (cart.length > 0) { cartCount.innerText = cart.length; cartCount.style.display = 'block'; }
        else { cartCount.style.display = 'none'; }
    }
    if (wishlistCount) {
        if (wishlist.length > 0) { wishlistCount.innerText = wishlist.length; wishlistCount.style.display = 'block'; }
        else { wishlistCount.style.display = 'none'; }
    }
}

function addToCart(product) {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        showToast('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'warning');
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }
    let cart = JSON.parse(localStorage.getItem(`cart_${user}`) || '[]');
    cart.push(product);
    localStorage.setItem(`cart_${user}`, JSON.stringify(cart));
    updateBadges();
    showToast('Đã thêm sản phẩm vào giỏ hàng!');
}

function addToWishlist(product) {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        showToast('Vui lòng đăng nhập để thêm vào danh sách yêu thích!', 'warning');
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }
    let wishKey = `wishlist_${user}`;
    let wishlist = JSON.parse(localStorage.getItem(wishKey) || '[]');
    if (!wishlist.find(item => item.name === product.name)) {
        wishlist.push(product);
        localStorage.setItem(wishKey, JSON.stringify(wishlist));
        updateBadges();
        showToast('Đã thêm vào danh sách yêu thích!');
    } else {
        showToast('Sản phẩm đã có trong danh sách yêu thích.', 'warning');
    }
}

// Search Suggestions
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('inputsearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            // Implement search dropdown UI here if needed
        });
    }
    updateBadges();
});

// Scroll Logic for Header
let prevScrollPos = window.scrollY;
const mainHeader = document.getElementById("main-header");
if (mainHeader) {
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) { mainHeader.style.top = "0"; }
        else if (currentScrollPos > 100) { mainHeader.style.top = `-${mainHeader.offsetHeight}px`; }
        prevScrollPos = currentScrollPos;
    });
}
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.reload();
}

// Export to window
window.showToast = showToast;
window.updateBadges = updateBadges;
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.logout = logout;
