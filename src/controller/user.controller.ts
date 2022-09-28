import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    await this.userService.create(user);

    const token = jwt.sign({ user: user.username }, 'trybesmith');

    return res.status(201).json({ token });
  };
}