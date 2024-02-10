import express from "express";
import * as authController from "../controllers/auth.js";
import * as postsController from "../controllers/posts.js";
import { ensureAuth, ensureGuest } from "../middleware/auth.js";

const router = express.Router();

// Main Routes - simplified for now
router.get("/user", authController.getUser);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.post("/signup", authController.postSignup);

export default router;
