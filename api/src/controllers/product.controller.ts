import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import {
  Product,
  CreateProductDto,
  UpdateProductDto,
} from '../core/models/product.model';
import { ProductService } from '../core/services/product.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({
    status: 201,
    description: 'Producto creado exitosamente',
    type: Product,
  })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      if (!createProductDto.name || createProductDto.name.trim().length === 0) {
        throw new BadRequestException('El nombre del producto no puede estar vacío');
      }
      if (createProductDto.price < 0) {
        throw new BadRequestException('El precio no puede ser negativo');
      }
      return await this.productService.create(createProductDto);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Error al crear el producto: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      );
    }
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos',
    type: [Product],
  })
  async findAll(): Promise<Product[]> {
    try {
      return await this.productService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener los productos: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un producto por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado',
    type: Product,
  })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  async findById(@Param('id') id: string): Promise<Product> {
    try {
      if (!id || id.trim().length === 0) {
        throw new BadRequestException('El ID del producto no puede estar vacío');
      }
      const product = await this.productService.findById(id);
      if (!product) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      return product;
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Error al obtener el producto: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      );
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado exitosamente',
    type: Product,
  })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      if (!id || id.trim().length === 0) {
        throw new BadRequestException('El ID del producto no puede estar vacío');
      }
      if (updateProductDto.price !== undefined && updateProductDto.price < 0) {
        throw new BadRequestException('El precio no puede ser negativo');
      }
      const product = await this.productService.update(id, updateProductDto);
      if (!product) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      return product;
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Error al actualizar el producto: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      );
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar un producto' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  @ApiResponse({ status: 204, description: 'Producto eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  async delete(@Param('id') id: string): Promise<void> {
    try {
      if (!id || id.trim().length === 0) {
        throw new BadRequestException('El ID del producto no puede estar vacío');
      }
      const product = await this.productService.findById(id);
      if (!product) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      await this.productService.delete(id);
    } catch (error) {
      if (error instanceof BadRequestException || error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Error al eliminar el producto: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      );
    }
  }
}