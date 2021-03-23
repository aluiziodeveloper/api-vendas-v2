import { IUser } from './IUser';

export interface IUserAuthenticated {
  user: IUser;
  token: string;
}
