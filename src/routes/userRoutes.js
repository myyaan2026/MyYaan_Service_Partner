import express from "express";

import {
    getUserById,
    requestServicePartnerOtp,
    verifyServicePartnerOtp,
    logout,
} from "../controller/userController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/service-partners/request-otp", requestServicePartnerOtp);
router.post("/service-partners/verify-otp", verifyServicePartnerOtp);
router.get("/users", authenticate, getUserById);
router.post("/auth/logout", authenticate, logout);

export default router;
