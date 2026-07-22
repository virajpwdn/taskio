import { Router } from "express";
import { prisma } from "../lib/prisma";
const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default userRouter;
