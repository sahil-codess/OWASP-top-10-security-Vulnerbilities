import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { login, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/users", getAllUsers);

export default router;
