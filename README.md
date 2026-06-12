# 🛒 Simple E-Commerce Store

A full-stack E-commerce web application developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas. This project allows users to browse products, view product details, register/login, add items to the cart, and place orders.

---

## 🚀 Features

### User Features
- View all available products
- View individual product details
- User Registration
- User Login and Logout
- Add products to shopping cart
- View cart items
- Calculate total order amount
- Place orders successfully

### Backend Features
- REST API for products, users, and orders
- User authentication handling
- MongoDB database connection
- Product and order management

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Tools & Services
- Git
- GitHub
- VS Code
  

---

## 📂 Project Structure

```
E_commerse
│
├── Backend
│   ├── models
│   │   ├── product.js
│   │   ├── user.js
│   │   └── order.js
│   │
│   ├── routes
│   │   ├── product.js
│   │   └── user.js
│   │
│   ├── server.js
│   ├── package.json
│
└── frontend
    ├── index.html
    ├── style.css
    ├── app.js
    ├── product.html
    ├── product.js
    ├── cart.html
    ├── cart.js
    ├── login.html
    ├── login.js
    ├── register.html
    └── register.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Open Backend Folder

```bash
cd Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env` file inside Backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 5. Start Backend Server

```bash
node server.js
```

or

```bash
nodemon server.js
```

### 6. Run Frontend

Open `frontend/index.html` using Live Server.

---

## 🔗 API Endpoints

### Product APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product details |

### User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | User login |

### Order APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/order | Place a new order |

---

## 📸 Project Screenshots

    *Home page*
    <img width="935" height="728" alt="Screenshot 2026-06-12 125437" src="https://github.com/user-attachments/assets/58993649-e6be-49bd-bfa0-69afa69cd350" />
    
    *product Details page*
    <img width="460" height="302" alt="Screenshot 2026-06-12 130331" src="https://github.com/user-attachments/assets/6b20ff71-e29e-42d5-80bd-fd04fc4eee03" />

    *Cart page*
    <img width="818" height="381" alt="Screenshot 2026-06-12 130511" src="https://github.com/user-attachments/assets/89f93435-ddc9-421d-8573-eacad41e8739" />

    *LogIn Page*
    <img width="375" height="221" alt="Screenshot 2026-06-12 130706" src="https://github.com/user-attachments/assets/d5d8fcfb-1e68-4995-8887-be028ddf57a6" />

    *Register Page*
    <img width="414" height="245" alt="Screenshot 2026-06-12 130807" src="https://github.com/user-attachments/assets/fc40fb77-1a86-4364-b3f6-2cfb8c1ea3b2" />
    
## 🔮 Future Improvements

- Add payment gateway integration
- Add product images upload
- Add quantity selection in cart
- Add admin dashboard
- Improve authentication with JWT
- Improve UI responsiveness

---

## 👨‍💻 Author

**Priyanshu Singh**

Full Stack Web Development Project

---

## ⭐ Support

If you like this project, don't forget to give it a ⭐ on GitHub.
