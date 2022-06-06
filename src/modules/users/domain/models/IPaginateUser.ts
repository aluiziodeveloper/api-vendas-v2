import { IUser } from './IUser';

export interface IPaginateUser {
  per_page: number;
  total: number;
  current_page: number;
  data: IUser[];
}
