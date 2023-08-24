// src/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Books', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

export default sequelize;


// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('database_name', 'username', 'password', {
//   host: 'localhost',
//   port: 3306, // MySQL default port
//   dialect: 'mysql',
// });

// export default sequelize;