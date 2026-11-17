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