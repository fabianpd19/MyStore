const { config } = require('./../config/config');

// Fallback si las env vars no se cargan
const USER = encodeURIComponent(config.dbUser || 'espe');
const PASS = encodeURIComponent(config.dbPass || 'espe');
const HOST = config.dbHost || 'localhost';
const PORT = config.dbPort || '5432';
const NAME = config.dbName || 'myStore';

const URI = `postgres://${USER}:${PASS}@${HOST}:${PORT}/${NAME}`;

console.log('=== DATABASE DEBUG ===');
console.log('USER:', USER);
console.log('PASS:', PASS ? '[HIDDEN]' : 'UNDEFINED');
console.log('URI:', URI);
console.log('=====================');

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
