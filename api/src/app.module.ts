import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './core/services/product.service';
import { ProductDynamoDbRepository } from './adapters/dynamodb/product-dynamodb.repository';
import { ProductMongodbRepository } from './adapters/mongodb/product-mongodb.repository';
import { DynamoDbClient } from './adapters/dynamodb/dynamodb.client';
import { MongoDbClient } from './adapters/mongodb/mongodb.client';

@Module({
  controllers: [ProductController],
  providers: [
    DynamoDbClient,
    MongoDbClient,
    ProductDynamoDbRepository,
    ProductMongodbRepository,
    {
      provide: 'DB_TYPE',
      useFactory: () => {
        const dbType = process.env.DB_TYPE || 'dynamodb';
        if (dbType !== 'dynamodb' && dbType !== 'mongodb') {
          throw new Error(`Tipo de base de datos no válido: ${dbType}`);
        }
        return dbType;
      },
    },
    {
      provide: ProductService,
      inject: [ProductDynamoDbRepository, ProductMongodbRepository],
      useFactory: (
        dynamoDbRepo: ProductDynamoDbRepository,
        mongoDbRepo: ProductMongodbRepository,
      ) => {
        return new ProductService(dynamoDbRepo, mongoDbRepo);
      },
    },
  ],
  exports: [ProductService],
})
export class AppModule {}