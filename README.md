# 🛒 Ecommerce

A full-featured Ecommerce platform built with the **MERN Stack** and styled using **Tailwind CSS v4**.
Customers can browse products, manage carts and orders; admins/sellers can manage products and orders with full CRUD.

---

## 🚀 Features

### User

* Register and login
* Browse products with availability status
* Add/remove products from the cart
* Manage delivery address
* Place orders (Cash on Delivery supported)
* View order history

### Admin / Seller

* Secure login and authentication
* Add new products with image upload
* Edit or delete products
* Change stock availability (in-stock / out-of-stock)
* Manage customer orders
* View all orders in the system

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS v4
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Other:** Cloudinary (image upload), JWT (authentication)

---

## 🎨 Frontend Design (Prebuilt UI)

The frontend uses **prebuilt UI components** to speed development and keep the interface consistent. These provide ready-made forms, buttons, tables, modals, and navigation elements that were customized to match the project’s branding.

**Benefits**

* Faster development and prototyping
* Clean, modern, responsive UI
* Consistent look and feel across pages
* Easy customization when needed

---

## ⚙️ Installation & Setup

### 1) Clone the repository

```bash
git clone https://github.com/Jaisapthagiri/Ecommerce.git
cd Ecommerce
```

### 2) Install dependencies

**Frontend**

```bash
cd client
npm install
```

**Backend**

```bash
cd ../server
npm install
```

### 3) Configure environment variables

Create a `.env` file in the **server** folder:

```bash
MONGO_URI=
JWT_SECRET=
NODE_ENV=development
SELLER_EMAIL=
SELLER_PASSWORD=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Create a `.env` (or `.env.local`) in the **client** folder:

```bash
VITE_CURRENCY=
VITE_BACKEND_URL=
```

> ⚠️ You must provide your own credentials for MongoDB, JWT, and Cloudinary.
> Without valid credentials, the app will not run properly.

### 4) Run the project

**Frontend**

```bash
cd client
npm run dev
# App runs at http://localhost:5173 by default
```

**Backend**

```bash
cd server
npm run server
```

---

## 📌 Usage

1. Open the app in your browser after starting the frontend.
2. Register as a user or login using credentials.
3. Browse products and add them to your cart.
4. Add an address and place an order.
5. Admins can login with seller credentials to manage products and orders.

---

## 📡 REST API Endpoints

### User

```
POST   /api/user/register    → Register User
POST   /api/user/login       → Login User
GET    /api/user/is-auth     → Verify User Auth
POST   /api/user/logout      → Logout User
```

### Admin / Seller

```
POST   /api/seller/login     → Login Admin
GET    /api/seller/is-auth   → Verify Admin Auth
POST   /api/seller/logout    → Logout Admin
```

### Products

```
POST   /api/product/add             → Add Product
GET    /api/product/list            → Get All Products
GET    /api/product/id              → Get Single Product by ID
PATCH  /api/product/stock           → Change Product Stock
DELETE /api/product/delete          → Delete Product
PUT    /api/product/edit-product    → Edit Product
```

### Orders

```
POST   /api/order/cod     → Place Order (Cash on Delivery)
GET    /api/order/user    → Get Orders by User ID
GET    /api/order/seller  → Get All Orders (for seller/admin)
```

### Address

```
POST   /api/address/add   → Add Address
GET    /api/address/get   → Get Address
```

### Cart

```
POST   /api/user/cart     → Add Products to Cart
```

---

## 📦 Libraries Used

### Frontend

* `react` – UI library
* `react-dom` – DOM rendering
* `tailwindcss` – Utility-first CSS framework
* `@tailwindcss/vite` – Tailwind + Vite integration
* `react-router-dom` – Client-side routing
* `axios` – HTTP requests
* `react-hot-toast` – Notifications
* `lucide-react` – Icons

### Backend

* `express` – Web framework
* `mongoose` – MongoDB ODM
* `dotenv` – Environment variables
* `jsonwebtoken` – JWT auth
* `bcryptjs` – Password hashing
* `cors` – Cross-origin requests
* `cookie-parser` – Parse cookies
* `multer` – File uploads
* `cloudinary` – Media hosting

---

## 🤝 Contributing

Contributions are welcome!
Fork the repo and open a pull request with your improvements.

---

## 📜 License

This project is licensed under the **MIT License**.

---
