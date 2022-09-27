import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => { 
    const createProducts = await this.productsService.create(req.body);
    return res.status(201).json(createProducts);
  };
}