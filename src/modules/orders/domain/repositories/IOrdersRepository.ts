import { ICreateOrder } from '../models/ICreateOrder';
import { IOrder } from '../models/IOrder';
import { IOrderPaginate } from '../models/IOrderPaginate';

export interface IOrdersRepository {
  findById(id: string): Promise<IOrder | undefined>;
  findAllPaginate(): Promise<IOrderPaginate>;
  create(data: ICreateOrder): Promise<IOrder>;
}
