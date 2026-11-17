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