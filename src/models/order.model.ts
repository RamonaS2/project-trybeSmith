import { Pool, ResultSetHeader } from 'mysql2/promise';

import { IOrder } from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `
      SELECT
        o.id AS id, u.id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM
        Trybesmith.Orders AS o
      INNER JOIN
        Trybesmith.Users AS u
          on o.userId = u.id
      INNER JOIN
        Trybesmith.Products AS p
          on o.id = p.orderId
      GROUP BY
        o.id
      ORDER BY
        o.userId`;

    const [data] = await this.connection.execute(query);

    return data as IOrder[];
  }

  public async create(order: IOrder): Promise<IOrder> {
    const queryOrder = `
          INSERT INTO Trybesmith.Orders (userId) VALUES (?)`;

    const [orderId] = await this.connection.execute<ResultSetHeader>(
      queryOrder,
      [order.userId],
    );

    const { insertId } = orderId;

    await Promise.all(
      order.productsIds.map(async (productId) => {
        await this.connection.execute(
          ` UPDATE Trybesmith.Products
            SET orderId = ?
            WHERE id = ?`,
          [insertId, productId],
        );
      }),
    );

    return order as IOrder;
  }
}