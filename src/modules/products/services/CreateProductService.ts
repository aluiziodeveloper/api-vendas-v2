import { inject, injectable } from 'tsyringe';
import redisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { ICreateProduct } from '../domain/models/ICreateProduct';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';
import { IProduct } from '../domain/models/IProduct';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    name,
    price,
    quantity,
  }: ICreateProduct): Promise<IProduct> {
    const productExists = await this.productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return product;
  }
}

export default CreateProductService;
