import { inject, injectable } from 'tsyringe';
import { IPaginateUser } from '../domain/models/IPaginateUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(
    search = '',
    sortField = 'name',
  ): Promise<IPaginateUser> {
    const users = await this.usersRepository.findAllPaginate(search, sortField);

    return users;
  }
}

export default ListUserService;
