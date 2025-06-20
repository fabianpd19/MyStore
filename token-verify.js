const jwt = require('jsonwebtoken');

const secret = 'ESPESecreat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbCI6ImN1c3RvbWVyIiwiaWF0IjoxNzUwNDIzNDk0fQ.6md6XlOE9MAlQTntBj9oC8fMJr_zez7uOXywcXWsTuQ';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
