<div align="center">

# 🛍️ Luxe Shop — Full Stack E-Commerce Platform

[![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.2-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org)
[![MySQL](https://img.shields.io/badge/MySQL_8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

**A production-grade, fully deployed full-stack e-commerce platform with JWT authentication, Razorpay payment integration, and a role-based admin dashboard.**

[🌐 Live Demo](https://full-stack-e-commerce-application-x.vercel.app/) · [🔗 Backend API](https://dashboard.render.com/web/srv-d825sdnavr4c739gqhn0) · [🐛 Report Bug](https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application/issues)

</div>

---

## 🎬 Live Demo

> **Check out the app in action:**

![Luxe Shop Demo](demo.gif)

**Test Credentials** — or register your own account at `/register`:

| Role | Email | Password |
|------|-------|----------|
| Customer | Register any email | Any password |
| Admin | Contact via GitHub | — |

> ⚠️ *Backend is hosted on Render's free tier — first request may take ~30s to cold-start.*

---

## 📌 What Is This Project?

Luxe Shop is a **complete, production-deployed e-commerce application** built from the ground up — no templates, no boilerplates. It handles the full customer journey: browse products, add to cart, pay securely via Razorpay or Cash on Delivery, and track orders. Admins get a protected dashboard to manage inventory and fulfillment across 5 order states.

The project is deployed end-to-end: **Vercel** serves the React frontend, **Render** hosts the Dockerized Spring Boot backend, and **Aiven** provides the managed cloud MySQL database.

---

## ✨ Feature Overview

### 👤 Customer Features

- 🔐 **JWT Authentication** — Stateless sessions with HMAC-SHA256 signed tokens; auto-attach via Axios interceptors; 401 → auto-redirect to `/login`
- 🛍️ **Product Catalog** — Paginated (12/page), filterable by 6 categories, full-text keyword search, sortable by price / rating / newest
- 🛒 **Persistent Cart** — Redux-managed cart with quantity updates, persisted in `localStorage` across sessions
- 💳 **Dual Checkout Flows** — Cash on Delivery + Razorpay online payment (UPI, credit/debit cards, net banking, digital wallets)
- 📦 **Order Lifecycle Tracking** — Place, view, and cancel orders; real-time status: `PENDING → CONFIRMED → SHIPPED → DELIVERED → CANCELLED`
- 👤 **User Profile** — View account details, change password

### 🛠️ Admin Features

- 📊 **Protected Admin Dashboard** — Accessible only to `ROLE_ADMIN` users via `AdminRoute` HOC
- 🏷️ **Full Product CRUD** — Create, edit, and soft-delete products with category assignment across 20+ products
- 📋 **Order Management** — View all platform orders; update fulfillment status through all 5 stages
- 📦 **Inventory Visibility** — Real-time stock tracking across the full catalog

### ⚙️ Technical Highlights

- 🔒 **Server-side Razorpay signature verification** — HMAC-SHA256 prevents fraudulent order submissions
- 🌐 **Environment-aware CORS** — Separate Spring profiles for local dev vs production
- 🗄️ **Dynamic JPA queries** — 6 endpoint variants for filtering, searching, and sorting without N+1 issues
- ⚠️ **Global exception handling** — Structured JSON error responses across all 25 endpoints
- 📱 **Fully responsive** — Mobile-first layout with Tailwind CSS

---

## 🛠️ Tech Stack

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Java | 17 | Core language |
| Spring Boot | 3.2.5 | Application framework |
| Spring Security | 6.x | Authentication & authorization |
| JJWT | 0.11.5 | JWT token generation & validation (HMAC-SHA256) |
| Spring Data JPA / Hibernate | — | ORM & database abstraction |
| MySQL | 8 | Relational database (hosted on Aiven) |
| Razorpay Java SDK | 1.4.3 | Payment gateway integration |
| Lombok | — | Boilerplate reduction |
| Maven | 3.9 | Build tool |

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI framework |
| Redux Toolkit | — | Global state management (auth, cart, toast slices) |
| React Router | v7 | Client-side routing with protected routes |
| Axios | — | HTTP client with request interceptors |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | — | Utility-first responsive styling |

### DevOps & Infrastructure

| Tool | Role |
|------|------|
| Docker | Multi-stage build (Maven 3.9 + Eclipse Temurin 17-JRE) — separates build and runtime stages |
| Render | Dockerized backend hosting with auto-deploy on `git push` |
| Aiven | Managed cloud MySQL 8 database |
| Vercel | Frontend CDN hosting with SPA rewrites via `vercel.json` |
| GitHub | Version control + CI/CD trigger for both Render and Vercel |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Browser)                           │
│                React 19 + Redux Toolkit + Axios                     │
│         Vercel CDN  ·  vercel.json SPA rewrites                     │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ HTTPS (Bearer JWT)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BACKEND (Render / Docker)                        │
│              Spring Boot 3.2 + Spring Security                      │
│                                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │
│  │  Auth    │  │ Products │  │  Orders  │  │ Payment (Razorpay)│   │
│  │Controller│  │Controller│  │Controller│  │   Controller      │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘   │
│         │             │             │                │              │
│         └─────────────┴─────────────┴────────────────┘             │
│                               │                                     │
│                        Service Layer                                │
│                       JPA Repositories                              │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ JDBC (TLS)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     DATABASE (Aiven Cloud)                          │
│                    MySQL 8 · Managed · TLS                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Full-Stack-ECommerce-Application/
├── backend/                              # Spring Boot REST API
│   ├── src/main/java/com/ecommerce/backend/
│   │   ├── config/
│   │   │   ├── SecurityConfig.java       # JWT filter chain + CORS policy
│   │   │   └── GlobalExceptionHandler.java
│   │   ├── controller/                   # 25 REST endpoints
│   │   │   ├── AuthController.java
│   │   │   ├── ProductController.java
│   │   │   ├── OrderController.java
│   │   │   ├── PaymentController.java
│   │   │   ├── CategoryController.java
│   │   │   └── UserController.java
│   │   ├── service/                      # Business logic layer
│   │   ├── model/                        # JPA entities
│   │   ├── repository/                   # Spring Data JPA interfaces
│   │   ├── security/                     # JwtFilter, JwtUtil
│   │   └── dto/                          # Request/Response DTOs
│   ├── src/main/resources/
│   │   ├── application.properties        # Local config (gitignored)
│   │   └── application-prod.properties   # Production config (env vars)
│   ├── Dockerfile                        # Multi-stage Docker build
│   └── pom.xml
│
├── frontend/                             # React application
│   ├── src/
│   │   ├── api/axios.js                  # Axios instance + Bearer token interceptor
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx        # Auth guard HOC
│   │   │   ├── AdminRoute.jsx            # Admin-only route guard
│   │   │   ├── Toast.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Shop.jsx                  # Paginated + filterable catalog
│   │   │   ├── Cart.jsx
│   │   │   ├── Order.jsx                 # Razorpay + COD checkout
│   │   │   ├── Profile.jsx
│   │   │   └── Admin.jsx                 # Role-protected dashboard
│   │   └── redux/
│   │       ├── store.js
│   │       └── slices/
│   │           ├── authSlice.js          # JWT + user state
│   │           ├── cartSlice.js          # localStorage-persisted cart
│   │           └── toastSlice.js
│   ├── vercel.json                       # SPA rewrite rules
│   ├── .env.production                   # VITE_API_URL → Render backend
│   └── package.json
│
├── Dockerfile                            # Root-level build context
└── README.md
```

---

## ⚙️ Local Development Setup

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8
- Maven 3.9+

### 1. Clone & Set Up Database

```bash
git clone https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application.git
cd Full-Stack-ECommerce-Application

# Create local database
mysql -u root -p -e "CREATE DATABASE ecommerce_db;"
```

### 2. Configure Backend

Create `backend/src/main/resources/application.properties` (this file is gitignored):

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update

app.jwt.secret=your-secret-key-at-least-32-characters-long
app.jwt.expiration=86400000

razorpay.key.id=rzp_test_YOUR_KEY_ID
razorpay.key.secret=YOUR_RAZORPAY_SECRET

allowed.origin=http://localhost:5173
```

```bash
cd backend
./mvnw spring-boot:run
# API running at http://localhost:8080
```

### 3. Configure Frontend

```bash
cd frontend
npm install

# Create local .env
echo "VITE_API_URL=http://localhost:8080/api" > .env

npm run dev
# App running at http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend (Render Dashboard)

| Variable | Description |
|----------|-------------|
| `SPRING_PROFILES_ACTIVE` | `prod` |
| `JWT_SECRET` | Minimum 32-character HMAC secret |
| `RAZORPAY_KEY_ID` | Razorpay test/live Key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay test/live Key Secret |
| `ALLOWED_ORIGIN` | Your Vercel frontend URL |
| `AIVEN_MYSQL_HOST` | Aiven service host |
| `AIVEN_MYSQL_PORT` | Aiven MySQL port |
| `AIVEN_MYSQL_DATABASE` | Aiven database name |
| `AIVEN_MYSQL_USER` | Aiven database user |
| `AIVEN_MYSQL_PASSWORD` | Aiven database password |

### Frontend (Vercel Dashboard)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Render backend URL + `/api` (e.g. `https://ecommerce-backend-xuka.onrender.com/api`) |

---

## 🌐 API Reference

### Public Endpoints (no auth required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login, returns JWT |
| `GET` | `/api/products` | Get products (paginated, 12/page) |
| `GET` | `/api/products/{id}` | Get single product |
| `GET` | `/api/products/search?keyword=` | Keyword search |
| `GET` | `/api/products/category/{id}` | Filter by category |
| `GET` | `/api/products?sort=price_asc` | Sort by price / rating / newest |
| `GET` | `/api/categories` | Get all 6 categories |

### Protected Endpoints (`Authorization: Bearer <token>`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Place an order |
| `GET` | `/api/orders/my-orders` | Get authenticated user's orders |
| `PUT` | `/api/orders/{id}/cancel` | Cancel a PENDING order |
| `POST` | `/api/payment/create-order` | Create Razorpay order |
| `POST` | `/api/payment/verify` | Verify HMAC-SHA256 payment signature |
| `GET` | `/api/users/profile` | Get user profile |
| `PUT` | `/api/users/change-password` | Update password |

### Admin-Only Endpoints (`ROLE_ADMIN` required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/products` | Create product |
| `PUT` | `/api/products/{id}` | Update product |
| `DELETE` | `/api/products/{id}` | Soft-delete product |
| `GET` | `/api/orders/admin/all` | Get all platform orders |
| `PUT` | `/api/orders/admin/{id}/status` | Update order fulfillment status |
| `POST` | `/api/categories` | Create category |

---

## 💳 Razorpay Test Credentials

Use these in the Razorpay checkout popup:

```
Card Number : 4111 1111 1111 1111
Expiry      : Any future date (e.g. 12/26)
CVV         : Any 3 digits
OTP         : 1234
```

---

## 🚀 Deployment Architecture

```
GitHub (main branch push)
       │
       ├──► Render (auto-deploy Docker image)
       │         └── Spring Boot 3.2 API
       │               └── connects to Aiven MySQL (TLS)
       │
       └──► Vercel (auto-deploy React build)
                 └── VITE_API_URL → Render backend
```

### Backend — Render + Aiven

- Render detects the `Dockerfile` and runs a multi-stage build: Maven compiles in `maven:3.9-eclipse-temurin-17`, then only the JAR is copied into a slim `eclipse-temurin:17-jre` runtime image.
- Aiven MySQL provides a managed, TLS-secured cloud database. Connection credentials are injected as environment variables — no hardcoded secrets.
- `application-prod.properties` reads all sensitive values from the environment at startup.

### Frontend — Vercel

- Vite builds a static bundle; Vercel serves it from a global CDN.
- `vercel.json` rewrites all routes to `index.html`, enabling client-side React Router navigation without 404s on hard refresh.
- `VITE_API_URL` is baked into the bundle at build time, pointing to the Render backend.

---

## 🐛 Real Deployment Challenges Solved

This project was not smooth sailing — here are real issues hit and fixed in production:

| Problem | Root Cause | Fix |
|---------|-----------|-----|
| Railway `host_not_allowed` errors | Trial plan blocked outbound port routing | Migrated backend to Render; database to Aiven |
| JWT `${app.jwt.secret}` literal in logs | Spring not resolving placeholder in prod properties | Corrected `application-prod.properties` binding |
| All order fields silently dropped | DTO field names mismatched frontend JSON payload | Renamed DTO fields to match exact frontend keys |
| CORS errors in production | Hardcoded `localhost` in `SecurityConfig` | Externalized `allowed.origin` as an env variable |
| Docker build context failure in monorepo | `COPY` path resolved from wrong directory | Fixed `Dockerfile` paths and Render build root config |
| 404 on React route refresh | Vercel serving SPA without rewrite rules | Added `vercel.json` with catch-all rewrite |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## 📄 License

MIT License — see [LICENSE](https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application/blob/main/LICENSE) for details.

---

<div align="center">

Built with ❤️ by [Bhumika Chuchakoti](https://github.com/BhumikaBC07)

*Java · Spring Boot · React · Redux · MySQL · Docker · Render · Aiven · Vercel*

</div>
