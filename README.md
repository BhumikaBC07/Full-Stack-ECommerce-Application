# Luxe Shop — Full Stack E-Commerce Platform

<div align="center">

![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.2-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL_8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A production-grade e-commerce application with JWT authentication, Razorpay payment integration, and role-based admin dashboard — deployed and live.**

[🌐 Live Demo](https://full-stack-e-commerce-application-xols-8cfdfwidw.vercel.app) · [📂 Backend API](https://full-stack-ecommerce-application-production.up.railway.app/api/products) · [🐛 Report Bug](https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application/issues)

</div>

---

## 📌 Project Overview

Luxe Shop is a fully functional e-commerce platform built with a **Java Spring Boot REST API** backend and a **React.js** frontend. It supports complete user flows including registration, product browsing, cart management, COD and online payment checkout via Razorpay, order history, and an admin dashboard for product and order management.

The project is **deployed end-to-end** on Railway (backend + MySQL) and Vercel (frontend) with proper environment variable management and CORS configuration.

---

## 🚀 Live Demo

| Service | URL |
|---|---|
| Frontend (Vercel) | https://full-stack-e-commerce-application-xols-8cfdfwidw.vercel.app |
| Backend API (Railway) | https://full-stack-ecommerce-application-production.up.railway.app/api |

**Test credentials** (or register your own):
- Register at `/register` with any email and password

---

## ✨ Features

### Customer Features
- 🔐 **JWT Authentication** — Register, login, secure token-based sessions
- 🛍️ **Product Catalog** — Paginated, filterable by category, searchable, sortable
- 🛒 **Shopping Cart** — Persistent cart with quantity management (localStorage)
- 💳 **Dual Payment Methods** — Cash on Delivery + Razorpay online payment (UPI, Cards, Wallets)
- 📦 **Order Management** — Place, view, and cancel orders with status tracking
- 👤 **User Profile** — View account info, change password

### Admin Features
- 📊 **Admin Dashboard** — Accessible only to `ROLE_ADMIN` users
- 🏷️ **Product CRUD** — Create, edit, soft-delete products with category assignment
- 📋 **Order Management** — View all orders, update status (PENDING → SHIPPED → DELIVERED)

### Technical Highlights
- 🔒 **Razorpay signature verification** — HMAC SHA256 fraud prevention
- 🌐 **CORS configured** for multi-environment deployment
- 🗄️ **Spring Data JPA** with paginated repository queries
- ⚠️ **Global exception handling** with structured JSON error responses
- 📱 **Responsive design** — Mobile-friendly layout

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Java 17 | Core language |
| Spring Boot 3.2.5 | Application framework |
| Spring Security | Authentication & authorization |
| JJWT 0.11.5 | JWT token generation & validation |
| Spring Data JPA / Hibernate | ORM & database abstraction |
| MySQL 8 | Relational database |
| Razorpay Java SDK 1.4.3 | Payment gateway integration |
| Lombok | Boilerplate reduction |
| Maven | Build tool |

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Redux Toolkit | Global state management |
| React Router v7 | Client-side routing |
| Axios | HTTP client with interceptors |
| Vite 8 | Build tool & dev server |
| Tailwind CSS | Utility-first styling |

### DevOps & Deployment
| Tool | Usage |
|---|---|
| Railway | Backend hosting + MySQL database |
| Vercel | Frontend hosting with CDN |
| Docker | Containerized backend build |
| GitHub | Version control & CI/CD trigger |

---

## 📁 Project Structure

```
Full-Stack-ECommerce-Application/
├── backend/                          # Spring Boot REST API
│   ├── src/main/java/com/ecommerce/backend/
│   │   ├── config/
│   │   │   ├── SecurityConfig.java   # JWT + CORS configuration
│   │   │   └── GlobalExceptionHandler.java
│   │   ├── controller/               # REST endpoints
│   │   │   ├── AuthController.java
│   │   │   ├── ProductController.java
│   │   │   ├── OrderController.java
│   │   │   ├── PaymentController.java
│   │   │   ├── CategoryController.java
│   │   │   └── UserController.java
│   │   ├── service/                  # Business logic layer
│   │   ├── model/                    # JPA entities
│   │   ├── repository/               # Spring Data JPA interfaces
│   │   ├── security/                 # JwtFilter, JwtUtil
│   │   └── dto/                      # Request/Response DTOs
│   ├── src/main/resources/
│   │   ├── application.properties        # Local config (gitignored)
│   │   └── application-prod.properties   # Production config (env vars)
│   ├── Dockerfile                    # Multi-stage Docker build
│   └── pom.xml
│
├── frontend/                         # React application
│   ├── src/
│   │   ├── api/axios.js              # Axios instance with interceptors
│   │   ├── components/               # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── AdminRoute.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   ├── pages/                    # Route-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Order.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Admin.jsx
│   │   └── redux/
│   │       ├── store.js
│   │       └── slices/
│   │           ├── authSlice.js
│   │           ├── cartSlice.js
│   │           └── toastSlice.js
│   ├── vercel.json                   # React Router SPA rewrites
│   ├── .env.production               # Production API URL
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8
- Maven 3.9+

### Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application.git
cd Full-Stack-ECommerce-Application/backend

# 2. Create MySQL database
mysql -u root -p
CREATE DATABASE ecommerce_db;
exit;

# 3. Create application.properties (do NOT commit this file)
# backend/src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
app.jwt.secret=your-secret-key-minimum-32-characters
app.jwt.expiration=86400000
razorpay.key.id=rzp_test_YOUR_KEY
razorpay.key.secret=YOUR_SECRET
allowed.origin=http://localhost:5173

# 4. Run
./mvnw spring-boot:run
# Backend starts at http://localhost:8080
```

### Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file for local development
echo "VITE_API_URL=http://localhost:8080/api" > .env

# Start development server
npm run dev
# Frontend starts at http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend (Railway Variables)

| Variable | Description |
|---|---|
| `SPRING_PROFILES_ACTIVE` | Set to `prod` |
| `JWT_SECRET` | Minimum 32-character secret key |
| `RAZORPAY_KEY_ID` | Razorpay test/live Key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay test/live Key Secret |
| `ALLOWED_ORIGIN` | Your Vercel frontend URL |
| `MYSQLHOST` | Auto-injected by Railway MySQL |
| `MYSQLPORT` | Auto-injected by Railway MySQL |
| `MYSQLDATABASE` | Auto-injected by Railway MySQL |
| `MYSQLUSER` | Auto-injected by Railway MySQL |
| `MYSQLPASSWORD` | Auto-injected by Railway MySQL |

### Frontend (Vercel Variables)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Your Railway backend URL + `/api` |

---

## 💳 Razorpay Test Payment

Use these credentials in the Razorpay checkout popup:

```
Card Number: 4111 1111 1111 1111
Expiry:      Any future date
CVV:         Any 3 digits
OTP:         1234
```

---

## 🌐 API Endpoints

### Public
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login, returns JWT |
| `GET` | `/api/products` | Get products (paginated) |
| `GET` | `/api/products/{id}` | Get single product |
| `GET` | `/api/products/search?keyword=` | Search products |
| `GET` | `/api/categories` | Get all categories |

### Protected (requires `Authorization: Bearer TOKEN`)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/orders` | Place an order |
| `GET` | `/api/orders/my-orders` | Get user's orders |
| `PUT` | `/api/orders/{id}/cancel` | Cancel a PENDING order |
| `POST` | `/api/payment/create-order` | Create Razorpay order |
| `POST` | `/api/payment/verify` | Verify payment signature |

### Admin only (requires `ROLE_ADMIN`)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/products` | Create product |
| `PUT` | `/api/products/{id}` | Update product |
| `DELETE` | `/api/products/{id}` | Soft-delete product |
| `GET` | `/api/orders/admin/all` | Get all orders |
| `PUT` | `/api/orders/admin/{id}/status` | Update order status |

---

## 🚀 Deployment

This project uses **GitHub → Railway/Vercel CI/CD**. Every push to `main` automatically redeploys both services.

### Backend (Railway)
- Detected Dockerfile for multi-stage Maven build
- MySQL database linked via Railway plugin (auto-injects connection variables)
- Environment variables set in Railway dashboard

### Frontend (Vercel)
- Auto-detected Vite project
- `vercel.json` handles React Router SPA rewrites (prevents 404 on refresh)
- `VITE_API_URL` set in Vercel environment variables

---

## 📸 Screenshots

> *(Add screenshots here — Home page, Shop page, Cart, Checkout, Orders, Admin dashboard)*

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">
Built with ❤️ by <a href="https://github.com/BhumikaBC07">Bhumika Chuchakoti</a>
</div>
