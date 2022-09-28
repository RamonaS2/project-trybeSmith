import { Router } from 'express';
import ProductsController from '../controller/productsController';

import { verifyName, verifyAmount } from '../middleware/productsVerify';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', verifyName, verifyAmount, productsController.create);
productsRouter.get('/', productsController.getAll);

export default productsRouter;