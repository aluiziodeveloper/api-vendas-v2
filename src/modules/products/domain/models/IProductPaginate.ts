import { IProduct } from './IProduct';

export interface IProductPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: IProduct[];
}
