# Fitness Tracker (MERN Stack with Auth)

A full-featured Fitness Tracker web app built using the MERN stack (MongoDB, Express, React, Node.js) with authentication.

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

## 🙏 Acknowledgements

Based on Net Ninja's tutorial with modifications.