import { ICreateCustomer } from '@modules/customers/domain/models/ICreateCustomer';
import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
import { getRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async create({ name, email }: ICreateCustomer): Promise<Customer> {
    const customer = this.ormRepository.create({ name, email });

    await this.ormRepository.save(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    await this.ormRepository.save(customer);

    return customer;
  }

  public async findByName(name: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return customer;
  }
}

export default CustomersRepository;
