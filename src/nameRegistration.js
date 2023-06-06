import * as readline from 'node:readline/promises'; // eslint-disable-line
import { stdin as input, stdout as output } from 'node:process';
import _ from 'lodash'; // eslint-disable-line

const reg = async () => {
  const rl = readline.createInterface({ input, output });

  const answer = await rl.question('Как вас зовут? ');

  const capitalizedAnswer = _.capitalize(answer);
  console.log(`Спасибо за регистрацию, ${capitalizedAnswer}!`);

  rl.close();
  return capitalizedAnswer;
};
export default reg;
