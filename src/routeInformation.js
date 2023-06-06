import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const routeInformation = async () => {
  const rl = readline.createInterface({ input, output });
  const answerStartCity = await rl.question('Откуда вы летите? ');
  const answerEndCity = await rl.question('Куда вы летите? ');
  const capitalizeCities = [_.capitalize(answerStartCity), _.capitalize(answerEndCity)];
  console.log(`${capitalizeCities[0]} => ${capitalizeCities[1]}`);

  rl.close();
  return capitalizeCities;
};

routeInformation();
