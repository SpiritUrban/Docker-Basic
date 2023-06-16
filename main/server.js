const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Привіт, світ!!!!!!***222333++++цffffffffffhhhhhhhhhhhhhhhhfчччччсссссссссссссчі!!!!!!!rrrr!!!!!!');
});

app.listen(3008, () => {
  console.log('Сервер запущено на порту 3008');
});
