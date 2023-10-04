// src/server.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize'; // Import Sequelize
import sequelizeConfig from './config';
import employeeRoutes from './routes/employeeRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);

const sequelize = new Sequelize(sequelizeConfig.database); // Initialize Sequelize with your database URI

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database synchronization error:', err);
  });
