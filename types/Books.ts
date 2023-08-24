// import { Sequelize, DataTypes } from 'sequelize';

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
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Book extends Model {
  // ...
}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  }
);

export default Book;
