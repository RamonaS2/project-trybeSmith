import { Router } from 'express';

import LoginController from '../controller/login.controller';
import verifyLogin from '../middleware/login.verify';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', verifyLogin, loginController.getAll);

export default loginRouter;