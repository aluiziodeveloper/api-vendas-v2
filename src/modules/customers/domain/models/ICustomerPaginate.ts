import { ICustomer } from './ICustomer';

export interface ICustomerPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: ICustomer[];
}
