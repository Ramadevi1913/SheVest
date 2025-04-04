import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('F:/BankApplication/backend/.env') });




const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
  })
  .catch((error) => {
    console.error('Error connecting to the Postgres database:', error.message);
  });

const jwtSecret = process.env.JWT_SECRET;

const config = {
  sequelize,
  jwtSecret,
  port: process.env.PORT || 5000,
};

export default config;
