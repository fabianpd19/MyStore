// auth.handler.js (por ejemplo)
const boom = require('boom');
const { config } = require('./../config/config');
const apiKey = encodeURIComponent(config.apiKey);

console.log('CLAVE API:' + apiKey);

function checkApiKey(req, res, next) {
  const apiKeyHeader = req.headers['api-key'];
  console.log('APIHEADER: ' + apiKeyHeader);
  if (apiKeyHeader === apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = checkApiKey;
