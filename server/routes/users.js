import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Get user
router.get("/:id", verifyToken, getUser);
// Get user friends
router.get("/:id/friends", verifyToken, getUserFriends);
// update friend status (ADD/REMOVE)
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
