import { IProduct } from '@modules/products/domain/models/IProduct';

export interface IRequestCreateOrder {
  customer_id: string;
  products: IProduct[];
}
