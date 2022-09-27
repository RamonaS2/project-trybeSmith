import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProducts): Promise<IProducts> {
    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?)';

    const [result] = await this.connection.execute<ResultSetHeader>(
      query, 
      [product.name, product.amount],
    );

    const { insertId: id } = result;

    return { id, ...product };
  }
}