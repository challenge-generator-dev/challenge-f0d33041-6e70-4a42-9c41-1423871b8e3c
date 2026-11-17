// TODO(reto): Implementar los métodos CRUD para Product.
// Este repositorio define la interfaz que deben implementar los adaptadores de persistencia.
// Usa los DTOs definidos en product.model.ts para los parámetros y retornos.

import { Product, CreateProductDto, UpdateProductDto } from '../models/product.model';

export interface ProductRepository {
  create(product: CreateProductDto): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  update(id: string, product: UpdateProductDto): Promise<Product | null>;
  delete(id: string): Promise<void>;
}