// src/models/Employee.ts
import { Sequelize, DataTypes } from 'sequelize';
import sequelizeConfig from '../config';

const sequelize = new Sequelize(sequelizeConfig.database);

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Employee;
