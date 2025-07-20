import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signupUser); // create a user
router.post("/login", loginUser); // login and get token
router.post("/logout", logoutUser); // clear token

export default router;
