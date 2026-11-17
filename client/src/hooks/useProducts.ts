import { useState, useEffect } from 'react';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product.type';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Product[]>(`${API_BASE_URL}/products`);
      setProducts(response.data);
    } catch (err) {
      setError('Error al obtener los productos');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (productData: CreateProductDto) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<Product>(`${API_BASE_URL}/products`, productData);
      setProducts([...products, response.data]);
      return response.data;
    } catch (err) {
      setError('Error al crear el producto');
      console.error('Error creating product:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProductById = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
      return response.data;
    } catch (err) {
      setError('Error al obtener el producto');
      console.error('Error fetching product:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: string, productData: UpdateProductDto) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put<Product>(`${API_BASE_URL}/products/${id}`, productData);
      setProducts(products.map(product => product.id === id ? response.data : product));
      return response.data;
    } catch (err) {
      setError('Error al actualizar el producto');
      console.error('Error updating product:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE_URL}/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      setError('Error al eliminar el producto');
      console.error('Error deleting product:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    refresh: fetchProducts,
  };
};