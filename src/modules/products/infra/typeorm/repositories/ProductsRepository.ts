import { In, Repository } from 'typeorm';
import { IProductsRepository } from '@modules/products/domain/repositories/IProductsRepository';
import Product from '../entities/Product';
import { IFindProducts } from '@modules/products/domain/models/IFindProducts';
import { ICreateProduct } from '@modules/products/domain/models/ICreateProduct';
import { IUpdateStockProduct } from '@modules/products/domain/models/IUpdateStockProduct';
import { IProductPaginate } from '@modules/products/domain/models/IProductPaginate';
import { dataSource } from '@shared/infra/typeorm';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Product);
  }

  public async create({
    name,
    price,
    quantity,
  }: ICreateProduct): Promise<Product> {
    const product = this.ormRepository.create({ name, price, quantity });

    await this.ormRepository.save(product);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    await this.ormRepository.save(product);

    return product;
  }

  public async remove(product: Product): Promise<void> {
    await this.ormRepository.remove(product);
  }

  public async updateStock(products: IUpdateStockProduct[]): Promise<void> {
    await this.ormRepository.save(products);
  }

  public async findByName(name: string): Promise<Product | null> {
    const product = this.ormRepository.findOneBy({
      name,
    });

    return product;
  }

  public async findById(id: string): Promise<Product | null> {
    const product = this.ormRepository.findOneBy({ id });

    return product;
  }

  public async findAll({
    page,
    skip,
    take,
  }: SearchParams): Promise<IProductPaginate> {
    const [
      products,
      count,
    ] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: products,
    };

    return result;
  }

  public async findAllByIds(products: IFindProducts[]): Promise<Product[]> {
    const productIds = products.map(product => product.id);

    const existentProducts = await this.ormRepository.find({
      where: {
        id: In(productIds),
      },
    });

    return existentProducts;
  }
}

export default ProductsRepository;
