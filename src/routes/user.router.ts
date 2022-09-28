import { Router } from 'express';
import UserController from '../controller/user.controller';
import { verifyClasse, verifyUsername,
  verifyLevel, verifyPassword } from '../middleware/user.verify';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/', 
  verifyClasse, 
  verifyUsername,
  verifyLevel, 
  verifyPassword, 
  userController.create,
);

export default userRouter;