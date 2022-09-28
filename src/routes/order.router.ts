import { Router } from 'express';

import OrderController from '../controller/order.controller';

import verifyToken from '../middleware/token.verify';
import verifyOrder from '../middleware/order.verify';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.post('/', verifyToken, verifyOrder, orderController.create);
orderRouter.get('/', orderController.getAll);

export default orderRouter;