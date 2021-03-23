import { inject, injectable } from 'tsyringe';
import redisCache from '@shared/cache/RedisCache';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';
import { IProduct } from '../domain/models/IProduct';

@injectable()
class ListProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<IProduct[]> {
    let products = await redisCache.recover<IProduct[]>(
      'api-vendas-PRODUCT_LIST',
    );

    if (!products) {
      products = await this.productsRepository.findAll();

      await redisCache.save('api-vendas-PRODUCT_LIST', products);
    }

    return products;
  }
}

export default ListProductService;
