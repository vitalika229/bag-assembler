import * as readline from 'node:readline/promises'; // eslint-disable-line
import { stdin as input, stdout as output } from 'node:process';
import _ from 'lodash'; // eslint-disable-line

const link = 'http://api.weatherstack.com/current?access_key=3ec035a6c71364180f51f129f7014668';

const routeInformation = async () => {
  const rl = readline.createInterface({ input, output });
  const answerStartCity = await rl.question('Откуда вы летите? ');
  const answerEndCity = await rl.question('Куда вы летите? ');
  const capitalizeCities = [_.capitalize(answerStartCity), _.capitalize(answerEndCity)];
  console.log(`${capitalizeCities[0]} => ${capitalizeCities[1]}`);

  const result = await fetch(`${link}&query=${capitalizeCities[1]}`);
  const data = await result.json();
  // const { temperature } = data.current;
  // const weatherDescriptions = data.current.weather_descriptions.join(', ');

  rl.close();

  return data;
};

export default routeInformation;
