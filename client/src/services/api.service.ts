// TODO(reto): archivo stubbeado; implementa los cuerpos.
import axios from 'axios';
import type { Product, CreateProductDto, UpdateProductDto } from '../types/product.type';

const API_BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  async getProducts(): Promise<Product[]> {
    throw new Error('TODO(reto): getProducts');
  },

  async getProductById(id: string): Promise<Product> {
    throw new Error('TODO(reto): getProductById');
  },

  async createProduct(data: CreateProductDto): Promise<Product> {
    throw new Error('TODO(reto): createProduct');
  },

  async updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    throw new Error('TODO(reto): updateProduct');
  },

  async deleteProduct(id: string): Promise<void> {
    // TODO(reto): Implementar llamada DELETE /products/:id
    await apiClient.delete(`/products/${id}`);
  },
};