import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';

const app = express();
app.use(express.json());

// Получение абсолютного пути к текущей директории
const __filename = fileURLToPath(import.meta.url); // eslint-disable-line
const __dirname = dirname(__filename); // eslint-disable-line

// Сохранение имени пользователя
app.post('/save-username', (req, res) => {
  const {
    name, sex, age, placeLive, citizenship, religion,
  } = req.body;
  const data = {
    name,
    sex,
    age,
    placeLive,
    citizenship,
    religion,
  };

  // Сохранение имени пользователя в файл в формате JSON
  fs.writeFile(`${__dirname}/../../database/users/user.json`, JSON.stringify(data))
    .then(() => {
      console.log('Имя пользователя успешно сохранено на сервере.');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Сохранение информации из формы персонализации
app.post('/save-personalization', (req, res) => {
  const {
    days, cities, health, children, pets, accommodation,
  } = req.body;
  const data = {
    days,
    cities,
    health,
    children,
    pets,
    accommodation,
  };

  // Сохранение информации в файл в формате JSON
  fs.writeFile(`${__dirname}/../../database/users/personalization.json`, JSON.stringify(data))
    .then(() => {
      console.log('Информация успешно сохранена на сервере.');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.use(express.static(__dirname));

export default app;
