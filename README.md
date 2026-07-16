# 🚀 DevBook

A full-stack developer networking platform inspired by professional networking applications, built using the **MERN Stack**. DevBook enables developers to create profiles, discover other developers, send connection requests, and build meaningful professional connections in a secure and responsive environment.

---

## ✨ Features

* 🔐 Secure Authentication using JWT & HTTP-only Cookies
* 👤 Create and manage developer profiles
* 📸 Profile photo support
* 🛠️ Add skills, bio, age, and other profile information
* 🤝 Send, accept, or reject connection requests
* 📋 View pending and accepted connections
* 🌐 Personalized developer feed
* 🔍 Browse developer profiles
* 📱 Fully responsive UI
* ☁️ Cloud deployment using AWS EC2
* ⚡ RESTful API architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router
* Axios
* Tailwind CSS
* DaisyUI
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* Cookie Parser
* CORS

### Deployment & Tools

* AWS EC2
* MongoDB Atlas
* Git & GitHub
* Postman

---

## 📂 Project Structure

```
devBook/
│
├── devBook-UI/          # React Frontend
│
├── devBook-Backend/     # Express Backend
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/vanshajjyadava/devBook.git
cd devBook
```

---

## Backend Setup

```bash
cd devBook-Backend

npm install
```

Create a `.env` file inside the backend directory.

```env
PORT=7777

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

FRONTEND_URL=http://localhost:5173
```

Run the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd devBook-UI

npm install
```

Create a `.env` file.

```env
VITE_BASE_URL=http://localhost:7777
```

Start the frontend:

```bash
npm run dev
```

---

## API Highlights

### Authentication

* POST `/signup`
* POST `/login`
* POST `/logout`

### Profile

* GET `/profile/view`
* PATCH `/profile/edit`

### Connections

* POST `/request/send/:status/:userId`
* POST `/request/review/:status/:requestId`
* GET `/user/connections`
* GET `/user/requests/received`

### Feed

* GET `/feed`

---

## Security Features

* JWT Authentication
* Password Hashing using bcrypt
* HTTP-only Cookies
* Protected Routes
* CORS Configuration
* Input Validation
* Secure REST APIs

---

## Future Enhancements

* 💬 Real-time Chat
* 🔔 Notifications
* 🔍 Advanced Search & Filters
* 🌙 Dark/Light Theme Toggle
* 📹 Video Calling
* 🧠 AI-based Developer Recommendations
* 📄 Resume Upload
* 📌 Bookmark Developers
* 📊 Profile Analytics

---

## Learning Outcomes

This project helped me gain hands-on experience with:

* Building scalable MERN applications
* Authentication & Authorization
* REST API development
* Redux Toolkit state management
* MongoDB schema design
* React Hooks
* Backend validation
* AWS deployment
* Git & GitHub workflows
* Secure web application development

---

## Author

**Vansh Yadav**

* GitHub: https://github.com/vanshajjyadava


---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

