
/**
 * Simple Authentication and Database Management using localStorage
 */

const UserDB = {
    STORAGE_KEY: 'adidas_users',

    // Initialize the DB with an admin account if it doesn't exist
    init() {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
            const initialUsers = [
                {
                    username: 'admin',
                    fullname: 'Administrator',
                    email: 'admin@adidas.com',
                    password: '123'
                }
            ];
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialUsers));
        }
    },

    // Get all users
    getUsers() {
        this.init();
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    },

    // Find a user by username or email
    findUser(identifier) {
        const users = this.getUsers();
        return users.find(u => u.username === identifier || u.email === identifier);
    },

    // Register a new user
    register(userData) {
        const users = this.getUsers();

        // Check if user already exists
        if (users.some(u => u.username === userData.username || u.email === userData.email)) {
            return { success: false, message: 'Tên đăng nhập hoặc Email đã được sử dụng!' };
        }

        users.push(userData);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
        return { success: true, message: 'Đăng ký thành công!' };
    },

    // Login logic
    login(identifier, password) {
        const user = this.findUser(identifier);

        if (user && user.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', user.username);
            return { success: true, user };
        }

        return { success: false, message: 'Thông tin đăng nhập không chính xác!' };
    },

    // Logout
    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
};

// Auto init
UserDB.init();

window.UserDB = UserDB;
