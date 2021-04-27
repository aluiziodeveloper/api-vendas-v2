import { ICreateUser } from '../models/ICreateUser';
import { IPaginateUser } from '../models/IPaginateUser';
import { IUser } from '../models/IUser';

export interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findAllPaginate(search: string, sortField: string): Promise<IPaginateUser>;
  findByName(name: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  create(data: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
}
