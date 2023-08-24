// src/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;