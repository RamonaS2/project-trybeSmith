import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<boolean> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return true;
  }

  public async getByUsername(username: string): Promise<IUser> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';

    const [data] = await this.connection.execute(query, [username]);

    const [user] = data as IUser[];
    return user;
  }
}