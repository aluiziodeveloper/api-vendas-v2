import { IProduct } from '../models/IProduct';
import { IFindProducts } from '../models/IFindProducts';
import { ICreateProduct } from '../models/ICreateProduct';
import { IUpdateStockProduct } from '../models/IUpdateStockProduct';
import { IProductPaginate } from '../models/IProductPaginate';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IProductsRepository {
  findByName(name: string): Promise<IProduct | null>;
  findById(id: string): Promise<IProduct | null>;
  findAll({ page, skip, take }: SearchParams): Promise<IProductPaginate>;
  findAllByIds(products: IFindProducts[]): Promise<IProduct[]>;
  create(data: ICreateProduct): Promise<IProduct>;
  save(product: IProduct): Promise<IProduct>;
  updateStock(products: IUpdateStockProduct[]): Promise<void>;
  remove(product: IProduct): Promise<void>;
}
