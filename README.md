# FitLog 🏋️‍♂️ - MERN Stack Fitness Tracker

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

<details>
<summary>📂 Project Folder Structure</summary>

## 📁 Folder Structure

```
fitlog/
├── backend/ # 🖥 Backend (Node.js + Express + MongoDB)
│ ├── src/
│ │ ├── config/ # MongoDB connection setup (db.js)
│ │ ├── controllers/ # Route logic (e.g., authController.js)
│ │ ├── middleware/ # JWT authentication middleware
│ │ ├── models/ # Mongoose schemas
│ │ ├── routes/ # Express routes
│ │ └── server.js # Backend entry point
│ ├── .env # Environment variables
│ ├── .gitignore
│ └── package.json
│
├── frontend/ # 🎨 Frontend (React + Vite)
│ ├── src/
│ │ ├── assets/ # Static assets (images, icons, etc.)
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Navbar.jsx
│ │ │ ├── WorkoutDetails.jsx
│ │ │ └── WorkoutForm.jsx
│ │ ├── context/ # React Context API files
│ │ │ ├── AuthContext.jsx
│ │ │ └── WorkoutContext.jsx
│ │ ├── hooks/ # Custom React hooks
│ │ │ ├── useAuthContext.jsx
│ │ │ ├── useLogin.jsx
│ │ │ ├── useLogout.jsx
│ │ │ ├── useSignup.jsx
│ │ │ └── useWorkoutContext.jsx
│ │ ├── pages/ # Page-level components
│ │ │ ├── HomePage.jsx
│ │ │ ├── LoginPage.jsx
│ │ │ └── SignupPage.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── index.css
│ │ └── index.html
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── vite.config.js
│ └── package.json
│
├── LICENSE
├── README.md
```
</details>

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

### 1️⃣ Clone the repository
```git clone https://github.com/yourusername/fitlog.git
cd fitlog
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

> Runs with nodemon from `src/server.js`  
> Server runs on: http://localhost:5000


### 3️⃣ Frontend Setup

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

- Frontend: Vercel

- Backend: Render / Railway

- Configure .env files with secrets

---

## 🙏 Acknowledgements

Based on Net Ninja's tutorial with modifications.

---

## 📜 License
This project is under the MIT License.

---

## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## ✨ Author

**Vaibhao Hatwar**  
📧 vaibhaohatwar.works@gmail.com
