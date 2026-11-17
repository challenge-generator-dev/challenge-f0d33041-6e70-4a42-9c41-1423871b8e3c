export type Product = {
  id: string;
  name: string;
  price: number;
};

export type CreateProductDto = {
  name: string;
  price: number;
};

export type UpdateProductDto = {
  name?: string;
  price?: number;
};