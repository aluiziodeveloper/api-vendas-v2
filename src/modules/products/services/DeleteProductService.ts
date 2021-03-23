import { inject, injectable } from 'tsyringe';
import redisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { IDeleteProduct } from '../domain/models/IDeleteProduct';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }: IDeleteProduct): Promise<void> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    await this.productsRepository.remove(product);
  }
}

export default DeleteProductService;
