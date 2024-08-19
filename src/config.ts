import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'dpg-cr1mv85umphs73afuo00-a.oregon-postgres.render.com', // Updated to your online host
  port: 5432,
  username: 'socail_c_user', // Updated to your online username
  password: '1ZMF2elYPT4mfjO6lA4iqaxw3XwpyrE6', // Updated to your online password
  database: 'socail_c', // Updated to your online database name
  logging: false,
  entities: ['dist/**/*.entity.js'], // Keep this as is
  migrations: ['dist/**/migrations/*.js'], // Keep this as is
  ssl: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});
