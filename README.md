# 🏨 Hotel Booking Web App

A full-stack hotel booking platform built with **React (Vite)**, **Clerk Authentication**, **Express (via Vercel Serverless Functions)**, **MongoDB**, and **Cloudinary** for image uploads.

---

## 📦 Features

- 🔐 User authentication using **Clerk**
- 🏠 Hotel registration by hotel owners
- 🛏️ Room listing with image uploads
- 📅 Room availability check and booking
- 🧾 View and manage user bookings
- 📊 Owner dashboard with revenue stats
- 🌥️ Cloudinary integration for image hosting


---

## 🧠 Tech Stack

| Tech             | Purpose                      |
|------------------|------------------------------|
| **Vite + React** | Frontend framework           |
| **Tailwind CSS** | Styling                      |
| **Clerk**        | Authentication               |
| **MongoDB Atlas**| Database                     |
| **Cloudinary**   | Image hosting                |
| **Express.js**   | Backend API (serverless)     |
| **Vercel**       | Deployment platform          |

---

## 🗂️ Project Structure


---

## 🚀 Getting Started (Local)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/hotel-booking-app.git
cd hotel-booking-app
```
### 2. Setup the client
```bash
cd client
npm install


VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:3000
```

### 3. Setup the Server
```bash
cd ../server
npm install


MONGO_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### 4. Run the Project
```bash
cd client
npm run dev

cd ../server
npx vercel dev


