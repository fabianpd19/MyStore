require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
