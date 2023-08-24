import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Book extends Model {
  public id!: string;
  public title!: string;
  public author!: string;
  public publishedYear!: number;
}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true,
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
console.log(Book === sequelize.models.Book);