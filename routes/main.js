import express from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  resetItems,
} from "../controllers/itemControllers.js";

const router = express.Router();

// Route to get all items
router.get("/items", getItems);

// Route to create a new item
router.post("/items", createItem);

// Route to update an existing item
router.put("/items/:id", updateItem);

// Route to delete an item
router.delete("/items/:id", deleteItem);

// Route to reset all items
router.post("/items/reset", resetItems);

export default router;
