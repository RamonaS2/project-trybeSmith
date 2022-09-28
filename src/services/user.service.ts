import UserModel from '../models/user.model';
import connection from '../models/connection';

import IUser from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<boolean> {
    return this.model.create(user);
  }
}