import { NextFunction, Request, Response } from 'express';
import jwtDecode from 'jwt-decode';
import UserModel from '../models/user.model';
import connection from '../models/connection';

import { IToken, ITokenDecoded } from '../interfaces/order.interface';

const userModel = new UserModel(connection);

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers as IToken;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const { username } = jwtDecode<ITokenDecoded>(authorization);

    const user = await userModel.getByUsername(username);

    if (!user) throw new Error();

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
export default verifyToken;