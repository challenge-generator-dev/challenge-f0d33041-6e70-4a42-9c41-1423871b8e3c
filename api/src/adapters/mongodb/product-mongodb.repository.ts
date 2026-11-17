import { Injectable } from '@nestjs/common';
import { MongoDbClient } from './mongodb.client';
import { Product, CreateProductDto, UpdateProductDto } from '../../core/models/product.model';
import { ProductRepository } from '../../core/repositories/product.repository';

@Injectable()
export class ProductMongodbRepository implements ProductRepository {
  constructor(private readonly mongoDbClient: MongoDbClient) {}

  async create(product: CreateProductDto): Promise<Product> {
    // TODO(reto): Implementar la creación de producto en MongoDB
    // 1. Obtener la colección de productos del cliente MongoDB
    // 2. Generar un ID único para el producto
    // 3. Insertar el documento en la colección
    // 4. Retornar el producto creado como instancia de Product
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    // TODO(reto): Implementar la obtención de todos los productos de MongoDB
    // 1. Obtener la colección de productos del cliente MongoDB
    // 2. Realizar una consulta para obtener todos los documentos
    // 3. Mapear los documentos a instancias de Product
    // 4. Retornar el array de productos
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar la búsqueda de producto por ID en MongoDB
    // 1. Obtener la colección de productos del cliente MongoDB
    // 2. Buscar el documento por el campo id
    // 3. Si existe, mapear a Product y retornarlo
    // 4. Si no existe, retornar null
    throw new Error('Method not implemented');
  }

  async update(id: string, product: UpdateProductDto): Promise<Product | null> {
    // TODO(reto): Implementar la actualización de producto en MongoDB
    // 1. Obtener la colección de productos del cliente MongoDB
    // 2. Buscar el documento por el campo id
    // 3. Si existe, actualizar los campos proporcionados en UpdateProductDto
    // 4. Retornar el producto actualizado como Product o null si no existe
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar la eliminación de producto en MongoDB
    // 1. Obtener la colección de productos del cliente MongoDB
    // 2. Eliminar el documento cuyo campo id coincida con el parámetro
    // 3. No retornar nada (void)
    throw new Error('Method not implemented');
  }
}