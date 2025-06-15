import express from "express";
const router = express.Router();
import {
  authUser,
  logoutUser,
  getUserProfile,
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router.post("/logout", logoutUser); // No need to protect, just clears cookie
router.get("/profile", protect, getUserProfile);

// --- Admin Only Routes ---
router
  .route("/")
  .post(protect, admin, addEmployee)
  .get(protect, admin, getEmployees);

router
  .route("/:id")
  .get(protect, admin, getEmployeeById)
  .put(protect, admin, updateEmployee)
  .delete(protect, admin, deleteEmployee);

export default router;
