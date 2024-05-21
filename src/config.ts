import { DataSource } from 'typeorm';
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'socialNetwork',
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
});

// npx typeorm-ts-node-esm migration:generate ./src/migrations/newDatabase -d ./src/config.ts
// npx typeorm-ts-node-esm migration:show -d ./src/config.ts
// npx typeorm-ts-node-esm migration:run -d ./src/config.ts
// npx typeorm-ts-node-esm migration:create ./src/migrations/newDatabase
