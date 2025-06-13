const bcryp = require('bcrypt');

const myPassword = 'admin123';
const hash = '$2b$10$Mx2s6CAm5z4lBh5PP/InnOleoHiM7NUWZ/HyLfnj5KGYyLxX.ZZpW';

// const hash = bcrypt.hash(myPassword, 10);

async function verifyPassword() {
  const isMatch = await bcryp.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
