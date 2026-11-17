// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class Product {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.validateInvariants();
  }

  private validateInvariants(): void {
    throw new Error('TODO(reto): validateInvariants');
  }
}

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  constructor(name?: string, price?: number) {
    this.name = name;
    this.price = price;
  }
}