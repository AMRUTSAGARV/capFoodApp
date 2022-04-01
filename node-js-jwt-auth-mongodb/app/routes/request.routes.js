import express from "express";
const router = express.Router();
//import auth from "../middleware/auth.js";

import { createHello, getHellos } from "../controllers/request.js";

router.post("/", createHello);
router.get("/", getHellos);

export default router;
