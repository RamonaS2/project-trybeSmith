import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { ILogin, ILoginService } from '../interfaces/login.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getAll(login: ILogin): Promise<ILoginService> {
    const user = await this.model.getAll(login);
    if (!user) {
      return { status: 401, message: 'Username or password invalid' };
    }
  
    return { status: 200, id: user.id, username: user.username };
  }
}