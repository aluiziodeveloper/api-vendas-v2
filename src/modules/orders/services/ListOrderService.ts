import { inject, injectable } from 'tsyringe';
import { IOrdersRepository } from '../domain/repositories/IOrdersRepository';
import { IOrderPaginate } from '../domain/models/IOrderPaginate';

@injectable()
class ListOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(): Promise<IOrderPaginate> {
    const orders = await this.ordersRepository.findAllPaginate();

    return orders;
  }
}

export default ListOrderService;
