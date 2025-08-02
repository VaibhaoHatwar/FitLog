# FitLog 🏋️ - MERN Stack Fitness Tracker

A full-stack fitness tracking app built with the MERN stack (MongoDB, Express, React, Node.js).  
Users can register, log in, and manage their workout logs through a secure authentication system and a clean UI.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite), Tailwind CSS *(coming soon)*
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Dev Tools**: Git, VS Code, Postman, Nodemon

---

## 📁 Folder Structure

```
fitlog/
├── backend/
│   ├── src/
│   │   ├── config/         # MongoDB connection
│   │   ├── controllers/    # Route logic (e.g., authController.js)
│   │   ├── middleware/     # JWT middleware
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # Express routes
│   │   └── server.js       # Entry point
│   ├── .env
│   ├── .gitignore
│   └── package.json
├── frontend/               # (coming soon)
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

## 🚀 Frontend Setup (coming soon)

```bash
cd frontend  
npm install  
npm run dev
```

---

## 📌 Project Progress

This project is under active development. Initial backend setup is in progress.

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
