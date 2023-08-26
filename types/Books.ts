import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Books extends Model {
  public id!: string;
  public title!: string;
  public author!: string;
  public publishedYear!: number;
}

Books.init(
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
    modelName: 'Books',
    tableName: 'books',
  }
);

export default Books;
console.log(Books === sequelize.models.Books);