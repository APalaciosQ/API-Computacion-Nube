import { Sequelize } from 'sequelize' 

const sequelize = new Sequelize('Almacen', 'postgres', 'Celina$957', {
    host: 'localhost',
    dialect: 'postgres'
  });


export default sequelize;