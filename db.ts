// src/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Books', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false
  }
});

export default sequelize;
