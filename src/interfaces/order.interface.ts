export interface IOrder {
  id?: number;
  userId: number;
  productsIds: number[];
}
  
export interface IOrderService {
  status: number,
  data: IOrder | IOrder[],
}

export interface IToken {
  authorization: string;
}

export interface ITokenDecoded {
  id: number;
  username: string;
}