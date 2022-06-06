import { IOrder } from './IOrder';

export interface IOrderPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: IOrder[];
}
