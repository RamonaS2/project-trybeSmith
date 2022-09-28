import { Request, Response } from 'express';
import jwtDecode from 'jwt-decode'; // https://github.com/auth0/jwt-decode
import OrderService from '../services/order.service';

import { IToken, ITokenDecoded } from '../interfaces/order.interface';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const { status, data } = await this.orderService.getAll();
    return res.status(status).json(data);
  };

  public create = async (req: Request, res: Response) => {
    const { authorization } = req.headers as IToken;
    const { productsIds } = req.body;
    const { id } = jwtDecode<ITokenDecoded>(authorization);

    const newOrder = { userId: id, productsIds };

    const { status, data } = await this.orderService.create(newOrder);
    return res.status(status).json(data);
  };
}