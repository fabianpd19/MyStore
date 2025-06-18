const jwt = require('jsonwebtoken');

const secret = 'ESPESecreat';

function verifyToken(secret){
    return jwtDecrypt.verify(secret);
}

const token = verifyToken(secret);
console.log(token);