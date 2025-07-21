import bcryptjs from "bcryptjs";
import { User } from "../models/userModel.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

// Controller to handle user signup
export const signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if all required fields are provided
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const useAlredayExists = await User.findOne({ email });
    if (useAlredayExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  res.send("Login route");
};

export const logoutUser = async (req, res) => {
  res.send("Logout route");
};
