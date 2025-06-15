import express from "express";
const router = express.Router();
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  updateTaskStatus,
} from "../controllers/taskController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// All users can get tasks (will be filtered by role in controller)
router.route("/").get(protect, getTasks);

// All users can get a specific task (filtered by role in controller)
router.route("/:id").get(protect, getTaskById);

// All users can update the status of a task (filtered by role in controller)
router.put("/:id/status", protect, updateTaskStatus);

// --- Admin Only Routes ---
router.route("/").post(protect, admin, createTask);
router
  .route("/:id")
  .put(protect, admin, updateTask)
  .delete(protect, admin, deleteTask);

export default router;
