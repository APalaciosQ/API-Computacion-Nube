import { Sequelize } from 'sequelize' 

const sequelize = new Sequelize('almacen', 'postgres', 'Celina$957', {
    host: 'localhost',
    dialect: 'postgres'
  });


export default sequelize;