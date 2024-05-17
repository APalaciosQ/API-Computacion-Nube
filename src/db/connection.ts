import { Sequelize } from 'sequelize' 

const sequelize = new Sequelize('almacen', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
  });


export default sequelize;