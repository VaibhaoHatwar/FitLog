# MERN Stack Fitness Tracker

A full-stack fitness tracking app built with the MERN stack (MongoDB, Express, React, Node.js).  
Users can register, log in, and manage their workout logs through a secure authentication system and a clean UI.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite),
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Dev Tools**: Git, VS Code, Postman, Nodemon

---

## 📁 Folder Structure

```
mern-fitness-tracker/
├── backend/
│   ├── controllers/    # Route logic (e.g., authController.js)
│   ├── middleware/     # JWT middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routes
│   │── server.js       # Entry point
│   ├── .env
│   ├── .gitignore
│   └── package.json
├── frontend/
|                 
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file inside `/backend` with the following:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

---

## 🚀 Getting Started

### Backend (API Server)

```bash
cd backend
npm install
npm run dev
```

> Uses nodemon to run server from `src/server.js`  
> Your server should start on: http://localhost:5000

---

## 🚀 Frontend Setup

```bash
cd frontend  
npm install  
npm run dev
```

---

## 🚀 Features

- User authentication with email/password (Login & Signup)
- Track fitness tasks (Completed, Failed, New, Accepted)
- Role-based dashboards for Admin & Employee
- Context API for global state management
- Local storage-based data persistence
- React Router navigation

---

## 📁 Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── WorkoutDetails.jsx
│   └── WorkoutForm.jsx
├── context/
│   ├── AuthContext.jsx
│   └── WorkoutContext.jsx
├── hooks/
│   ├── useAuthContext.jsx
│   ├── useLogin.jsx
│   ├── useLogout.jsx
│   ├── useSignup.jsx
│   └── useWorkoutContext.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── SignupPage.jsx
├── App.jsx
├── main.jsx
├── index.css
├── index.html
.gitignore
README.md
eslint.config.js
vite.config.js
package.json
```

---

## 🔧 Getting Started

### Prerequisites

- Node.js
- MongoDB (local or cloud)
- npm or yarn

### Install Dependencies

```
npm install
```

### Start Frontend

```
npm run dev
```
---

## 🔐 Auth Flow

- On login/signup, the user is stored in local storage
- Context API handles global user/task state
- Logout clears local storage and state

---

## 💡 Tips

- Customize tasks using context and route-based logic
- Update styles using Tailwind classes
- Replace localStorage with API backend for production

---

## 📦 Deployment

- Recommended: Vercel (Frontend) + Render or Railway (Backend)
- Setup `.env` for secrets

---

## 🙏 Acknowledgements

Based on Net Ninja's tutorial with modifications.

---

## ✨ Author

**Vaibhao Hatwar**  
📧 vaibhaohatwar.works@gmail.com