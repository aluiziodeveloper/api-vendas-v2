import { inject, injectable } from 'tsyringe';
import Customer from '../infra/typeorm/entities/Customer';
import { ICustomersRepository } from '../domain/repositories/ICustomersRepository';

@injectable()
class ListCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute(): Promise<Customer[] | undefined> {
    const customers = await this.customersRepository.findAll();

    return customers;
  }
}

export default ListCustomerService;
