import express from "express";
import { getAllUser, signup ,login } from "../controllers/user-controller";

const userRouter = express.Router();

router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/login",login);
export default userRouter;