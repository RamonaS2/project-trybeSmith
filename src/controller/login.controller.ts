import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import LoginService from '../services/login.service';

import { ILogin } from '../interfaces/login.interface';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public getAll = async (req: Request, res: Response) => {
    const login = req.body as ILogin;

    const { status, message, id, username } = await this.loginService.getAll(login);
    if (message) { 
      return res.status(status).json({ message });
    }

    const token = jwt.sign({ id, username }, 'trybesmith');

    console.log(token);

    return res.status(status).json({ token });
  };
}