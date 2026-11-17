// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { Product, CreateProductDto, UpdateProductDto } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';
import { ProductDynamoDbRepository } from '../../adapters/dynamodb/product-dynamodb.repository';
import { ProductMongodbRepository } from '../../adapters/mongodb/product-mongodb.repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProductDynamoDbRepository) private readonly dynamoDbRepository: ProductRepository,
    @Inject(ProductMongodbRepository) private readonly mongoDbRepository: ProductRepository,
  ) {}

  async create(product: CreateProductDto): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findAll(): Promise<Product[]> {
    throw new Error('TODO(reto): findAll');
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error('TODO(reto): findById');
  }

  async update(id: string, product: UpdateProductDto): Promise<Product | null> {
    throw new Error('TODO(reto): update');
  }

  async delete(id: string): Promise<void> {
    throw new Error('TODO(reto): delete');
  }
}