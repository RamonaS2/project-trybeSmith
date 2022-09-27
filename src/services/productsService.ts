import connection from '../models/connection';
import IProducts from '../interfaces/products.interface';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: IProducts): Promise<IProducts> {
    const result = await this.model.create(product);
     
    return result;
  }
}