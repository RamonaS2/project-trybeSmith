import { Router } from 'express';
import ProductsController from '../controller/productsController';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', productsController.create);

export default productsRouter;