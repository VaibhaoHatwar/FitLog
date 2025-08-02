import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Create Express app
const app = express();

// Middleware (optional now, useful later)
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.get("/api", (req, res) => {
  res.json({ msg: "Welcome to the API" });
});

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});


// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
