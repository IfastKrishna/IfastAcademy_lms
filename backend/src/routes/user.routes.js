import express from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  registorUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateCurrentPassword,
  updateAccountDetails,
  updateUserAvatar,
  getUserProfile,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(registorUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/current-user").get(verifyJwt, getCurrentUser);
router.route("/profile").get(verifyJwt, getUserProfile);
router.route("/destory").delete(verifyJwt, deleteUser);
router.route("/change-password").post(verifyJwt, updateCurrentPassword);
router.route("/account-details").patch(verifyJwt, updateAccountDetails);
router
  .route("/avatar")
  .patch(verifyJwt, upload.single("avatar"), updateUserAvatar);

export default router;
