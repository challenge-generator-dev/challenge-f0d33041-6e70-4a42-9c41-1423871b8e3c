# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/adapters/mongodb/mongodb.client.ts` — La fase "Configuración del Entorno y Conexión a la Base de Datos" (f1) practica src/adapters/mongodb/MongoDBClient.ts (configuración inicial) aqui: este archivo es el ejercicio (blueprint).
- `api/src/adapters/dynamodb/product-dynamodb.repository.ts` — La fase "Implementación de Operaciones CRUD en DynamoDB" (f2) practica src/adapters/dynamodb/ProductDynamoDBRepository.ts (implementación) aqui: este archivo es el ejercicio (blueprint).
- `api/src/adapters/mongodb/product-mongodb.repository.ts` — La fase "Implementación de Operaciones CRUD en MongoDB" (f3) practica src/adapters/mongodb/ProductMongoDBRepository.ts (implementación) aqui: este archivo es el ejercicio (blueprint).
- `api/src/core/services/product.service.ts` — La fase "Implementación de Operaciones CRUD en MongoDB" (f3) practica src/core/services/ProductService.ts (servicio que usa ambos repositorios) aqui: este archivo es el ejercicio (blueprint).
- `api/src/core/models/product.model.ts` — La practica elegida no tenia ningun cuerpo que implementar: este archivo alcanzable, con cuerpos, pasa a ser el ejercicio.
- `client/src/components/ProductTable.tsx` — La fase "Configuración del Entorno y Conexión a la Base de Datos" se implementa aqui: este archivo es el ejercicio.
- `client/src/services/api.service.ts` — La fase "Implementación de Operaciones CRUD en DynamoDB" se implementa aqui: este archivo es el ejercicio.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

### Reto
- Tema: Construye operaciones CRUD en Bases de Datos SQL y NoSQL
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del Entorno y Conexión a la Base de Datos — objetivo: Establecer la conexión con DynamoDB y MongoDB y configurar el entorno de desarrollo. — entregable (NO resolver): Proyecto configurado con conexiones a DynamoDB y MongoDB, y tablas creadas.
- Fase 2: Implementación de Operaciones CRUD en DynamoDB — objetivo: Implementar las operaciones CRUD para DynamoDB. — entregable (NO resolver): Funciones implementadas para realizar operaciones CRUD en DynamoDB.
- Fase 3: Implementación de Operaciones CRUD en MongoDB — objetivo: Implementar las operaciones CRUD para MongoDB. — entregable (NO resolver): Funciones implementadas para realizar operaciones CRUD en MongoDB.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1170.0",
    "@aws-sdk/lib-dynamodb": "3.1170.0",
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "mongodb": "7.9.0",
    "mongoose": "9.12.2",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/core/models/product.model.ts ===
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

// === ARCHIVO: api/src/core/repositories/product.repository.ts ===
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

// === ARCHIVO: api/src/core/services/product.service.ts ===
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

// === ARCHIVO: api/src/adapters/dynamodb/dynamodb.client.ts ===
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// TODO(reto): Configurar el cliente de DynamoDB usando variables de entorno.
// Las variables esperadas son:
// - AWS_REGION: Región de AWS (ej: 'us-east-1')
// - DYNAMODB_TABLE_NAME: Nombre de la tabla en DynamoDB
// - AWS_ACCESS_KEY_ID: ID de la clave de acceso (opcional si se usa IAM)
// - AWS_SECRET_ACCESS_KEY: Clave secreta de acceso (opcional si se usa IAM)

export class DynamoDbClient {
  private readonly client: DynamoDBDocumentClient;
  private readonly tableName: string;

  constructor() {
    const dynamoDBClient = new DynamoDBClient({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
    });

    this.client = DynamoDBDocumentClient.from(dynamoDBClient);
    this.tableName = process.env.DYNAMODB_TABLE_NAME || 'Products';

    if (!this.tableName) {
      throw new Error('DYNAMODB_TABLE_NAME environment variable is required');
    }
  }

  getClient(): DynamoDBDocumentClient {
    return this.client;
  }

  getTableName(): string {
    return this.tableName;
  }
}

export const dynamoDbClient = new DynamoDbClient();

// === ARCHIVO: api/src/adapters/dynamodb/product-dynamodb.repository.ts ===
// TODO(reto): Implementar los métodos CRUD para DynamoDB usando el cliente configurado.
// Usa los DTOs definidos en product.model.ts y maneja errores específicos de DynamoDB.

import { Injectable } from '@nestjs/common';
import { Product, CreateProductDto, UpdateProductDto } from '../../core/models/product.model';
import { ProductRepository } from '../../core/repositories/product.repository';
import { dynamoDbClient } from './dynamodb.client';
import { PutCommand, ScanCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

@Injectable()
export class ProductDynamoDbRepository implements ProductRepository {
  private readonly client = dynamoDbClient.getClient();
  private readonly tableName = dynamoDbClient.getTableName();

  async create(product: CreateProductDto): Promise<Product> {
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error('Method not implemented');
  }

  async update(id: string, product: UpdateProductDto): Promise<Product | null> {
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented');
  }
}

// === ARCHIVO: api/src/adapters/mongodb/mongodb.client.ts ===
import { MongoClient, Db } from 'mongodb';

export class MongoDbClient {
  private readonly client: MongoClient;
  private readonly dbName: string;
  private dbInstance: Db | null = null;

  constructor() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
    this.dbName = process.env.MONGO_DB_NAME || 'products_db';

    if (!mongoUri) {
      throw new Error('MONGO_URI environment variable is required');
    }
    if (!this.dbName) {
      throw new Error('MONGO_DB_NAME environment variable is required');
    }

    this.client = new MongoClient(mongoUri);
  }

  async connect(): Promise<Db> {
    throw new Error('TODO(reto): connect');
  }

  async disconnect(): Promise<void> {
    throw new Error('TODO(reto): disconnect');
  }

  getDb(): Db {
    throw new Error('TODO(reto): getDb');
  }
}

export const mongoDbClient = new MongoDbClient();

// === ARCHIVO: api/src/adapters/mongodb/product-mongodb.repository.ts ===
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

// === ARCHIVO: api/src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Product API')
    .setDescription('API para gestión de productos en DynamoDB y MongoDB')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Aplicación corriendo en http://localhost:${port}`);
  console.log(`Documentación Swagger en http://localhost:${port}/docs`);
}

bootstrap();

// === ARCHIVO: api/src/app.module.ts ===
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

// === ARCHIVO: api/src/controllers/product.controller.ts ===
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

// === ARCHIVO: client/src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// === ARCHIVO: client/package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: client/vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: client/index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: client/src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: client/src/types/product.type.ts ===
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

// === ARCHIVO: client/src/hooks/useProducts.ts ===
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

// === ARCHIVO: client/src/components/ProductTable.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types/product.type';

interface ProductTableProps {
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export function ProductTable({ onEdit, onDelete }: ProductTableProps) {
  throw new Error('TODO(reto): anonymous');
}

// TODO(reto): Implementar lógica de edición de productos
// TODO(reto): Implementar lógica de eliminación de productos
// TODO(reto): Conectar con el servicio API para persistencia

// === ARCHIVO: client/src/services/api.service.ts ===
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

// === ARCHIVO: client/src/App.tsx ===
import { useState, useEffect } from 'react';
import { Product, CreateProductDto, UpdateProductDto } from './types/product.type';
import { apiService } from './services/api.service';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async (data: CreateProductDto) => {
    setLoading(true);
    setError(null);
    try {
      const newProduct = await apiService.createProduct(data);
      setProducts(prev => [...prev, newProduct]);
      setIsCreating(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear producto');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string, data: UpdateProductDto) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await apiService.updateProduct(id, data);
      setProducts(prev => prev.map(p => p.id === id ? updated : p));
      setEditingProduct(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar producto');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiService.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar producto');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsCreating(false);
  };

  const handleDeleteClick = (id: string) => {
    if (window.confirm('¿Está seguro de eliminar este producto?')) {
      handleDelete(id);
    }
  };

  const handleFormSubmit = (data: CreateProductDto | UpdateProductDto) => {
    if (editingProduct) {
      handleUpdate(editingProduct.id, data);
    } else {
      handleCreate(data as CreateProductDto);
    }
  };

  const renderProductList = () => {
    if (loading && products.length === 0) {
      return <p>Cargando productos...</p>;
    }

    if (products.length === 0) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <p style={{ color: '#666', fontSize: '16px' }}>
            No hay productos disponibles. Haga clic en "Nuevo Producto" para comenzar.
          </p>
        </div>
      );
    }

    return (
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginTop: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Nombre</th>
            <th style={{ padding: '12px', textAlign: 'right' }}>Precio</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr 
              key={product.id} 
              style={{ 
                backgroundColor: index % 2 === 0 ? '#fff' : '#f5f5f5',
                borderBottom: '1px solid #eee'
              }}
            >
              <td style={{ padding: '12px' }}>{product.id}</td>
              <td style={{ padding: '12px' }}>{product.name}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>
                ${product.price.toFixed(2)}
              </td>
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <button
                  onClick={() => handleEdit(product)}
                  disabled={loading}
                  style={{
                    padding: '6px 12px',
                    marginRight: '8px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteClick(product.id)}
                  disabled={loading}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.6 : 1
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>
        Gestión de Productos
      </h1>
      
      {error && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#ffebee', 
          border: '1px solid #ef5350',
          marginBottom: '20px',
          borderRadius: '4px',
          color: '#c62828'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => { setIsCreating(true); setEditingProduct(null); }}
          disabled={loading || isCreating}
          style={{
            padding: '12px 24px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          + Nuevo Producto
        </button>
        <button 
          onClick={loadProducts}
          disabled={loading}
          style={{
            padding: '12px 24px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '14px'
          }}
        >
          {loading ? 'Cargando...' : 'Recargar'}
        </button>
      </div>

      {(isCreating || editingProduct) && (
        <div style={{
          padding: '24px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          marginBottom: '24px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ marginTop: 0, color: '#333' }}>
            {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
          </h3>
          <ProductForm
            product={editingProduct}
            onSubmit={handleFormSubmit}
            onCancel={() => { setIsCreating(false); setEditingProduct(null); }}
            loading={loading}
          />
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        {renderProductList()}
      </div>

      {loading && products.length > 0 && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          Procesando...
        </div>
      )}
    </div>
  );
}

interface ProductFormProps {
  product?: Product | null;
  onSubmit: (data: CreateProductDto | UpdateProductDto) => void;
  onCancel: () => void;
  loading: boolean;
}

function ProductForm({ product, onSubmit, onCancel, loading }: ProductFormProps) {
  const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price?.toString() || '');
  const [nameError, setNameError] = useState('');

  const validateName = (value: string) => {
    if (!value.trim()) {
      setNameError('El nombre es requerido');
      return false;
    }
    if (value.trim().length < 2) {
      setNameError('El nombre debe tener al menos 2 caracteres');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    if (!validateName(trimmedName)) {
      return;
    }

    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue < 0) {
      return;
    }

    const data: CreateProductDto | UpdateProductDto = {
      name: trimmedName,
      price: priceValue
    };
    
    onSubmit(data);
  };

  const isValid = name.trim().length >= 2 && price && !isNaN(parseFloat(price)) && parseFloat(price) >= 0;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '200px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#333' }}>
          Nombre del Producto
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); validateName(e.target.value); }}
          required
          minLength={2}
          style={{ 
            padding: '10px', 
            borderRadius: '4px', 
            border: nameError ? '2px solid #f44336' : '1px solid #ccc', 
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '14px'
          }}
          placeholder="Ingrese el nombre del producto"
        />
        {nameError && (
          <span style={{ color: '#f44336', fontSize: '12px', marginTop: '4px', display: 'block' }}>
            {nameError}
          </span>
        )}
      </div>
      <div style={{ flex: '0 0 150px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', color: '#333' }}>
          Precio ($)
        </label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ 
            padding: '10px', 
            borderRadius: '4px', 
            border: '1px solid #ccc', 
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '14px'
          }}
          placeholder="0.00"
        />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          type="submit"
          disabled={loading || !isValid}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: (loading || !isValid) ? 'not-allowed' : 'pointer',
            opacity: (loading || !isValid) ? 0.6 : 1,
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Guardando...' : (product ? 'Actualizar' : 'Crear')}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#9e9e9e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '14px'
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

// === ARCHIVO: .run/api.run.xml ===
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="api" type="js.build_tools.npm" nameIsGenerated="false">
    <package-json value="$PROJECT_DIR$/api/package.json" />
    <command value="run" />
    <scripts>
      <script value="start" />
    </scripts>
    <node-interpreter value="project" />
    <envs>
      <env name="DYNAMODB_ENDPOINT" value="http://localhost:8000" />
      <env name="AWS_REGION" value="us-east-1" />
      <env name="AWS_ACCESS_KEY_ID" value="local" />
      <env name="AWS_SECRET_ACCESS_KEY" value="local" />
      <env name="MONGODB_URI" value="mongodb://localhost:27017/app" />
    </envs>
    <method v="2" />
  </configuration>
</component>


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s
  mongo:
    image: "mongo:7.0.14"
    ports:
      - "127.0.0.1:27017:27017"
    environment:
      MONGO_INITDB_DATABASE: "app"
    volumes:
      - "./infra-local/mongo/init.js:/docker-entrypoint-initdb.d/init.js:ro"
    healthcheck:
      test: ["CMD","mongosh","--quiet","--eval","db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 20s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |
| MongoDB | `mongo:7.0.14` | 27017 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"


// === ARCHIVO: infra-local/mongo/init.js ===
// Se ejecuta una sola vez al crear el volumen de MongoDB (docker-entrypoint-initdb.d).
db = db.getSiblingDB('app');
db.createCollection('items');
db.items.createIndex({ name: 1 });

```
