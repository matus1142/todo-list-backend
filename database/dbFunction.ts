const fs = require('fs');

const getData = () => {
  const data = fs.readFileSync('./database/db.json', {
    encoding: 'utf8',
    flag: 'r',
  });
  return data;
};

const writeData = (data) => {
  try {
    fs.writeFileSync('./database/db.json', JSON.stringify(data, null, 4));

    console.log('Data successfully saved to disk');
  } catch (error) {
    console.log('An error has occurred ', error);
  }
};

export { getData, writeData };
