const fs = require('fs');

const writeToLog = (info) => {
  try {
    const path = 'log.txt';
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    fs.writeFileSync(path, `${data}${info}\n`);
  } catch (err) {
    console.log('Failed to save file');
  }
};

module.exports = writeToLog;
