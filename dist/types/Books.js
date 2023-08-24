"use strict";
// import { Sequelize, DataTypes } from 'sequelize';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export interface BasicsBooks {
//     id: number,
// }
// export interface Books extends BasicsBooks{
//     title: string,
//     author: string,
//     publishedYear: number,
// }
// src/models/book.ts
// import { DataTypes, Model } from 'sequelize';
// // import sequelize from '../config/database';
// class Book extends Model {
//   public id!: string;
//   public title!: string;
//   public author!: string;
//   public publishedYear!: number;
// }
// Book.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     publishedYear: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Book',
//     tableName: 'books',
//   }
// );
// export default Book;
// src/models/book.ts
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publishedYear: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Book',
    tableName: 'books',
});
exports.default = Book;
