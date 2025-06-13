const bcryp = require('bcrypt');

const myPassword = 'admin123';

// const hash = bcrypt.hash(myPassword, 10);

async function hashPassword() {
  const hash = await bcryp.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
