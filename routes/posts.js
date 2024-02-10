import express from "express";
import upload from "../middleware/multer.js";
import * as postsController from "../controllers/posts.js";
import { ensureAuth, ensureGuest } from "../middleware/auth.js";

const router = express.Router();

// Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

export default router;
