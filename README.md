# 🛒 Ecommerce

A full-featured Ecommerce platform built with the **MERN Stack** and styled using **Tailwind CSS v4**.  
This application allows customers to browse products, add them to their cart, and place orders, while admins/sellers can manage products and orders through CRUD operations.

---

## 🚀 Features

- **User**
  - Register and login
  - Browse products with availability status
  - Add/remove products from the cart
  - Manage delivery address
  - Place orders (Cash on Delivery supported)
  - View order history

- **Admin / Seller**
  - Secure login and authentication
  - Add new products with image upload
  - Edit or delete products
  - Change stock availability (in-stock / out-of-stock)
  - Manage customer orders
  - View all orders in the system

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS v4  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Other**: Cloudinary (for image upload), JWT (for authentication)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/username/ecommerce.git
cd ecommerce

2. Install dependencies

For frontend:

cd client
npm install


For backend:

cd server
npm install


## Setup environment variables

In the backend folder, create a .env file with the following:

## Frontend : 

VITE_CURRENCY=

VITE_BACKEND_URL=


## Backend

MONGO_URI=

JWT_SECRET=

NODE_ENV=

SELLER_EMAIL=

SELLER_PASSWORD=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=


⚠️ Note: You must create your own credentials for MongoDB, JWT, and Cloudinary.
Otherwise, the app won’t run properly.


## 4.To Run the project

For frontend:

npm run dev


For backend:

npm run dev

## 📌 Usage

1.Open the app in your browser after running frontend (http://localhost:5173 by default).

2.Register as a user or login using credentials.

3.Browse available products and add them to your cart.

4.Enter your address and place an order.

5.As an admin, login with your seller credentials to manage products and orders.

## 📡 REST API Endpoints

## User

POST /api/user/register → Register User

POST /api/user/login → Login User

GET /api/user/is-auth → Verify User Auth

POST /api/user/logout → Logout User

## Admin/seller

POST /api/seller/login → Login Admin

GET /api/seller/is-auth → Verify Admin Auth

POST /api/seller/logout → Logout Admin

## Products

POST /api/product/add → Add Product

GET /api/product/list → Get All Products

GET /api/product/id → Get Single Product by ID

PATCH /api/product/stock → Change Product Stock

DELETE /api/product/delete → Delete Product

PUT /api/product/edit-product → Edit Product


## orders

POST /api/order/cod → Place Order (Cash on Delivery)

GET /api/order/user → Get Orders by User ID

GET /api/order/seller → Get All Orders (for seller/admin)


## Address

 /api/address/add → Add Address

GET /api/address/get → Get Address

## Cart

POST /api/user/cart → Add Products to Cart

## Libraries Used

  ## FrontEnd
    
    react – UI library

    react-dom – React DOM rendering
    
    tailwindcss – Utility-first CSS framework
    
    @tailwindcss/vite – Tailwind with Vite
    
    react-router-dom – Routing for React
    
    axios – HTTP requests library
    
    react-hot-toast – Toast notifications
    
    lucide-react – Icons for React
    
    router – Lightweight router
    
    dom – DOM utilities helper

    
  ## BackEnd

    express – Web framework

    mongoose – MongoDB ORM
    
    dotenv – Environment variables
    
    jsonwebtoken – JWT authentication
    
    bcryptjs – Password hashing
    
    cors – Cross-origin requests
    
    cookie-parser – Parse cookies
    
    multer – File uploads
    
    cloudinary – Image/video hosting


## 🤝 Contributing

Contributions are welcome!
If you’d like to improve this project, feel free to fork the repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License – you’re free to use, modify, and distribute it.



