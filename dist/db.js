"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/database.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('Books', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
exports.default = sequelize;
// import { Sequelize } from 'sequelize';
// const sequelize = new Sequelize('database_name', 'username', 'password', {
//   host: 'localhost',
//   port: 3306, // MySQL default port
//   dialect: 'mysql',
// });
// export default sequelize;
