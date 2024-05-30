import express from 'express';
import cors from 'cors';
import { Signup } from '../controller/userController';
const router = express.Router();
router.use(cors());
router.post("/Signup", Signup);
export default router;

