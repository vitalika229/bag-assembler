import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

app.post('/save-username', (req, res) => {
  const { username } = req.body;
  const data = { username };

  // Сохранение имени пользователя в файл в формате JSON
  fs.writeFile(`${__dirname}/../src/users/${username}.json`, JSON.stringify(data))
    .then(() => {
      console.log('Имя пользователя успешно сохранено на сервере.');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.use(express.static(__dirname));

app.listen(8081, () => {
  console.log('Сервер запущен на порту 8081');
});
