<div align="center">

# 🛒 Luxe Shop — Full Stack E-Commerce Platform

### *A production-grade, end-to-end e-commerce solution built with Spring Boot & React.js*

[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payment-0066FF?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Railway](https://img.shields.io/badge/Backend-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br/>

**[🌐 Live Demo](https://full-stack-e-commerce-application-mgrer4gir.vercel.app)** &nbsp;|&nbsp;
**[⚙️ API Base](https://full-stack-ecommerce-application-production.up.railway.app)** &nbsp;|&nbsp;
**[📂 Repository](https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application)**

</div>

---

## 📌 Overview

**Luxe Shop** is a fully functional, production-ready e-commerce web application that replicates the core experience of platforms like Amazon and Flipkart. Built with a **Java Spring Boot** backend and a **React.js** frontend, this project demonstrates real-world software engineering practices including **RESTful API design**, **JWT-based authentication**, **role-based access control**, and **payment gateway integration** via Razorpay.

This application solves a common real-world challenge: building a scalable, secure, and maintainable shopping platform that handles user authentication, product management, cart operations, order processing, and payments — all in a clean, decoupled architecture.

> **Why this project matters:** E-commerce is one of the largest software domains globally. This project showcases the ability to design and ship a complex, multi-layered system with industry-standard technologies.

---

## ✨ Key Features

### 👤 User Features
- Secure registration and login with JWT token-based authentication
- User profile management and order history
- Persistent shopping cart across sessions
- Real-time order tracking and status updates
- Responsive UI optimized for desktop and mobile

### 🛒 Customer Features
- Browse products with category-based filtering and keyword search
- Detailed product pages with images, descriptions, and pricing
- Add to cart, update quantity, remove items
- Seamless checkout flow with address management
- Secure payment processing via **Razorpay Payment Gateway**
- Order confirmation with email-style summaries

### 🛠️ Admin Features
- Dedicated admin dashboard with role-based access
- Add, edit, and delete products and categories
- View and manage all customer orders
- Update order status (Pending → Processing → Shipped → Delivered)
- Inventory and product catalog management

### 🔐 Security Features
- **JWT (JSON Web Tokens)** for stateless, scalable authentication
- **Spring Security** with role-based authorization (`ROLE_USER`, `ROLE_ADMIN`)
- Password encryption using **BCrypt**
- Protected API endpoints with token validation middleware
- CORS configuration for secure cross-origin requests

---

## 🏗️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based UI framework |
| **React Router DOM** | Client-side routing & navigation |
| **Axios** | HTTP client for REST API calls |
| **Context API / Redux** | State management |
| **CSS3 / Bootstrap** | Responsive styling and layout |

### Backend
| Technology | Purpose |
|---|---|
| **Java 17** | Core programming language |
| **Spring Boot 3.x** | Application framework |
| **Spring Security** | Authentication & authorization |
| **Spring Data JPA** | ORM and data persistence layer |
| **Hibernate** | JPA implementation |
| **Maven** | Dependency management & build tool |

### Database
| Technology | Purpose |
|---|---|
| **MySQL 8.0** | Relational database |
| **JPA / Hibernate** | Entity mapping and query management |

### Tools, Libraries & Integrations
| Tool | Purpose |
|---|---|
| **JWT (jjwt)** | Stateless token-based authentication |
| **Razorpay SDK** | Payment gateway integration |
| **BCrypt** | Secure password hashing |
| **Lombok** | Boilerplate reduction for Java entities |
| **Postman** | API testing and documentation |
| **Git & GitHub** | Version control |
| **Vercel** | Frontend deployment |
| **Railway** | Backend & database deployment |

---

## 🧱 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│                    React.js (Vercel)                            │
│         Components → Context/State → Axios HTTP Client          │
└──────────────────────────┬──────────────────────────────────────┘
                           │  REST API Calls (HTTPS/JSON)
                           │  Authorization: Bearer <JWT>
┌──────────────────────────▼──────────────────────────────────────┐
│                       API GATEWAY LAYER                         │
│                  Spring Boot (Railway)                          │
│     ┌────────────┐  ┌─────────────┐  ┌──────────────────────┐  │
│     │ Controllers│  │   Services  │  │  Security Filter     │  │
│     │  (REST)    │→ │  (Business) │  │  (JWT Validation)    │  │
│     └────────────┘  └──────┬──────┘  └──────────────────────┘  │
│                            │                                    │
│     ┌──────────────────────▼──────────────────────────────────┐ │
│     │              Repository Layer (JPA)                     │ │
│     └──────────────────────┬──────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────────┘
                           │  JPA / Hibernate Queries
┌──────────────────────────▼──────────────────────────────────────┐
│                      DATABASE LAYER                             │
│                    MySQL 8.0 (Railway)                          │
│     Users │ Products │ Categories │ Orders │ Cart │ Payments    │
└─────────────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                   PAYMENT LAYER                                 │
│               Razorpay Payment Gateway                          │
│         Order Creation → Payment → Webhook Verification         │
└─────────────────────────────────────────────────────────────────┘
```

### Authentication Flow

```
User Login Request
      │
      ▼
Spring Security Filter Chain
      │
      ▼
UserDetailsService → Load user from DB
      │
      ▼
BCrypt Password Verification
      │
      ▼
JWT Token Generated (signed with secret key)
      │
      ▼
Token returned to client → stored in localStorage
      │
      ▼
All subsequent requests: Authorization: Bearer <token>
      │
      ▼
JwtAuthFilter validates token → sets SecurityContext
      │
      ▼
Controller processes authenticated request
```

---

## 📂 Project Structure

```
Full-Stack-ECommerce-Application/
│
├── backend/                          # Spring Boot Application
│   └── src/
│       └── main/
│           ├── java/com/ecommerce/
│           │   ├── config/           # Security, CORS, JWT Config
│           │   │   ├── SecurityConfig.java
│           │   │   ├── JwtConfig.java
│           │   │   └── CorsConfig.java
│           │   ├── controller/       # REST API Controllers
│           │   │   ├── AuthController.java
│           │   │   ├── ProductController.java
│           │   │   ├── CartController.java
│           │   │   ├── OrderController.java
│           │   │   └── PaymentController.java
│           │   ├── service/          # Business Logic Layer
│           │   │   ├── UserService.java
│           │   │   ├── ProductService.java
│           │   │   ├── CartService.java
│           │   │   ├── OrderService.java
│           │   │   └── PaymentService.java
│           │   ├── repository/       # JPA Data Access Layer
│           │   │   ├── UserRepository.java
│           │   │   ├── ProductRepository.java
│           │   │   └── OrderRepository.java
│           │   ├── model/            # JPA Entity Classes
│           │   │   ├── User.java
│           │   │   ├── Product.java
│           │   │   ├── Cart.java
│           │   │   ├── Order.java
│           │   │   └── Payment.java
│           │   ├── dto/              # Data Transfer Objects
│           │   ├── security/         # JWT Filter & Utilities
│           │   └── exception/        # Global Exception Handling
│           └── resources/
│               └── application.properties
│
├── frontend/                         # React.js Application
│   ├── public/
│   └── src/
│       ├── components/               # Reusable UI Components
│       │   ├── Navbar/
│       │   ├── ProductCard/
│       │   ├── Cart/
│       │   └── Footer/
│       ├── pages/                    # Route-level Page Components
│       │   ├── Home.jsx
│       │   ├── ProductList.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   ├── OrderHistory.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   └── AdminDashboard.jsx
│       ├── context/                  # Global State Management
│       ├── services/                 # Axios API Service Layer
│       ├── utils/                    # Helper Functions
│       └── App.jsx
│
├── .env.example                      # Environment variable template
├── README.md
└── LICENSE
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure the following are installed on your system:

- **Java 17+** — [Download](https://adoptium.net/)
- **Node.js 18+** — [Download](https://nodejs.org/)
- **MySQL 8.0+** — [Download](https://dev.mysql.com/downloads/)
- **Maven 3.8+** — [Download](https://maven.apache.org/)
- **Git** — [Download](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application.git
cd Full-Stack-ECommerce-Application
```

---

### 2️⃣ Backend Setup (Spring Boot)

```bash
# Navigate to the backend directory
cd backend

# Configure your environment variables (see .env section below)
cp .env.example .env
# Edit .env with your DB credentials, JWT secret, and Razorpay keys

# Build the project
mvn clean install

# Run the Spring Boot application
mvn spring-boot:run
```

> The backend server will start on **`http://localhost:8080`**

---

### 3️⃣ Database Setup (MySQL)

```sql
-- Connect to MySQL
mysql -u root -p

-- Create the database
CREATE DATABASE ecommerce_db;

-- Verify
SHOW DATABASES;
```

> Spring Boot with `spring.jpa.hibernate.ddl-auto=update` will auto-create all tables on first run.

---

### 4️⃣ Frontend Setup (React.js)

```bash
# Navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your API base URL and Razorpay key

# Start the development server
npm start
```

> The React app will launch on **`http://localhost:3000`**

---

## 🔑 Environment Variables

### Backend — `backend/src/main/resources/application.properties`

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT Configuration
jwt.secret=your_super_secret_jwt_key_min_32_chars
jwt.expiration=86400000

# Razorpay Configuration
razorpay.key.id=rzp_test_XXXXXXXXXXXXXXXX
razorpay.key.secret=your_razorpay_secret_key

# Server Port
server.port=8080
```

### Frontend — `frontend/.env`

```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXX
```

> ⚠️ **Never commit `.env` files or secrets to version control.** Add `.env` to your `.gitignore`.

---

## 💳 Payment Integration

This project integrates **Razorpay** — India's leading payment gateway — to handle secure online transactions.

### How It Works

```
1. User clicks "Pay Now" on the checkout page
       │
       ▼
2. Frontend calls backend: POST /api/payment/create-order
       │
       ▼
3. Backend uses Razorpay SDK to create an order on Razorpay servers
   → Returns: { orderId, amount, currency }
       │
       ▼
4. Frontend opens Razorpay Checkout modal with order details
       │
       ▼
5. User completes payment (card / UPI / netbanking / wallet)
       │
       ▼
6. Razorpay returns: { razorpay_payment_id, razorpay_order_id, razorpay_signature }
       │
       ▼
7. Frontend sends payment details to: POST /api/payment/verify
       │
       ▼
8. Backend verifies HMAC-SHA256 signature using Razorpay secret
       │
       ▼
9. On success → Order confirmed, database updated, user notified
```

- Uses **Razorpay Java SDK** for server-side order creation
- Implements **HMAC-SHA256 signature verification** to prevent payment fraud
- Supports **test mode** for development without real transactions

---

## 🔌 API Endpoints

Base URL: `https://full-stack-ecommerce-application-production.up.railway.app/api`

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login and receive JWT token | ❌ |

```json
// POST /auth/login — Request Body
{
  "email": "user@example.com",
  "password": "securepassword"
}

// Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "role": "ROLE_USER",
  "email": "user@example.com"
}
```

### Products

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/products` | Get all products (supports `?search=&category=`) | ❌ |
| `GET` | `/products/{id}` | Get product by ID | ❌ |
| `POST` | `/admin/products` | Add a new product | ✅ Admin |
| `PUT` | `/admin/products/{id}` | Update product | ✅ Admin |
| `DELETE` | `/admin/products/{id}` | Delete product | ✅ Admin |

### Cart & Orders

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/cart` | Get current user's cart | ✅ User |
| `POST` | `/cart/add` | Add item to cart | ✅ User |
| `DELETE` | `/cart/remove/{itemId}` | Remove item from cart | ✅ User |
| `POST` | `/orders/place` | Place an order | ✅ User |
| `GET` | `/orders/my-orders` | Get user's order history | ✅ User |

### Payment

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/payment/create-order` | Create Razorpay order | ✅ User |
| `POST` | `/payment/verify` | Verify payment signature | ✅ User |

---

## 📸 Screenshots

> *Add screenshots to a `/screenshots` folder in the repository to populate the table below.*

| Page | Preview |
|------|---------|
| 🏠 Home / Product Listing | ![Home Page](screenshots/home.png) |
| 🛒 Shopping Cart | ![Cart Page](screenshots/cart.png) |
| 💳 Checkout & Payment | ![Checkout Page](screenshots/checkout.png) |
| 📦 Order History | ![Orders Page](screenshots/orders.png) |
| 🛠️ Admin Dashboard | ![Admin Dashboard](screenshots/admin.png) |
| 🔐 Login / Register | ![Auth Page](screenshots/auth.png) |

---

## 🚀 Deployment

### Frontend → Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the frontend directory
cd frontend
vercel

# Set environment variables in Vercel Dashboard:
# REACT_APP_API_BASE_URL = https://your-backend.up.railway.app/api
# REACT_APP_RAZORPAY_KEY_ID = rzp_live_XXXXXXXXXXXXXXXX
```

**Live Frontend:** [https://full-stack-e-commerce-application-mgrer4gir.vercel.app](https://full-stack-e-commerce-application-mgrer4gir.vercel.app)

---

### Backend → Railway

```bash
# 1. Push your code to GitHub
# 2. Connect your GitHub repository at railway.app
# 3. Railway auto-detects Spring Boot via Maven
# 4. Add a MySQL plugin from the Railway dashboard

# Set these environment variables in Railway:
SPRING_DATASOURCE_URL=jdbc:mysql://<host>:<port>/railway
SPRING_DATASOURCE_USERNAME=<railway_user>
SPRING_DATASOURCE_PASSWORD=<railway_password>
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Railway automatically provisions a **MySQL database** and links it to your Spring Boot service. Deployments trigger automatically on every push to `main`.

**Live Backend:** [https://full-stack-ecommerce-application-production.up.railway.app](https://full-stack-ecommerce-application-production.up.railway.app)

---

## 🧪 Testing

### Backend Testing

```bash
# Run all unit and integration tests
cd backend
mvn test

# Run with test coverage report
mvn test jacoco:report
```

- **Unit Tests** — Service layer logic tested with **JUnit 5** and **Mockito**
- **Integration Tests** — Repository layer tested with **Spring Boot Test** and an in-memory H2 database
- **API Testing** — All endpoints manually verified using **Postman**; collection available in `/postman/`

### Frontend Testing

```bash
cd frontend
npm test
```

- **Component Tests** — Key components tested with **React Testing Library**
- **End-to-End** — Core user flows (login → browse → cart → checkout) manually verified across Chrome and Firefox

---

## 📈 Future Enhancements

| Feature | Description |
|---------|-------------|
| 🤖 **AI Product Recommendations** | Collaborative filtering to suggest products based on user behavior |
| 🐳 **Docker & Docker Compose** | Containerize the full stack for consistent local and cloud deployments |
| 🔄 **CI/CD Pipeline** | GitHub Actions for automated testing, building, and deployment on every push |
| 🧩 **Microservices Architecture** | Decompose into independent services (Auth, Product, Order, Payment) |
| 📧 **Email Notifications** | Order confirmation and shipping updates via JavaMail / SendGrid |
| 📊 **Admin Analytics Dashboard** | Sales charts, revenue tracking, and inventory reports |
| 🔍 **Elasticsearch Integration** | Full-text product search with fuzzy matching and advanced filtering |
| 📱 **React Native Mobile App** | Cross-platform mobile version using the existing REST API |
| ⭐ **Reviews & Ratings** | User-submitted product reviews with aggregate star ratings |
| 🌐 **Internationalization (i18n)** | Multi-language and multi-currency support |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/Full-Stack-ECommerce-Application.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and commit
git add .
git commit -m "feat: add your feature description"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Open a Pull Request on GitHub
```

### Contribution Guidelines

- Follow **conventional commits** (`feat:`, `fix:`, `docs:`, `refactor:`)
- Write or update **tests** for any new functionality
- Ensure all tests pass before submitting a PR (`mvn test` / `npm test`)
- Keep PRs focused and scoped to a single feature or fix
- Update documentation where relevant

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License — Copyright (c) 2024 Bhumika BC
Permission is granted to use, copy, modify, and distribute this software
for any purpose with or without fee, provided the copyright notice is retained.
```

---

## 👩‍💻 Author

<div align="center">

### Bhumika BC
#### *Java Full Stack Developer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/bhumikachuchakoti-9b317727a)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BhumikaBC07)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](bhumikachuchakoti@gmail.com)

</div>

**Core Skills:**

| Domain | Technologies |
|--------|-------------|
| **Backend** | Java 17, Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs, Maven |
| **Frontend** | React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap |
| **Database** | MySQL, JPA/Hibernate ORM |
| **Security** | JWT Authentication, BCrypt, Role-Based Access Control |
| **Cloud & DevOps** | Railway, Vercel, Git, GitHub |
| **Payments** | Razorpay Payment Gateway Integration |
| **Tools** | Postman, IntelliJ IDEA, VS Code, Maven |

---

<div align="center">

*Built with ❤️ by [Bhumika BC](https://github.com/BhumikaBC07) — Open to Java Full Stack Developer opportunities*

⭐ **If you found this project useful, please consider giving it a star!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/BhumikaBC07/Full-Stack-ECommerce-Application?style=social)](https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/BhumikaBC07/Full-Stack-ECommerce-Application?style=social)](https://github.com/BhumikaBC07/Full-Stack-ECommerce-Application/network/members)

</div>
