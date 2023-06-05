import express from "express";
import { login } from "../config/auth.js";

const router = express.Router();

router.post("/login", login);

export default router;