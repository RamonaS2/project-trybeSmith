import { NextFunction, Request, Response } from 'express';

import { IOrder } from '../interfaces/order.interface';

const verifyOrder = (req: Request, res: Response, next: NextFunction) => {
  const order = req.body as IOrder;

  if (!order.productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(order.productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (order.productsIds.length < 1) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export default verifyOrder;