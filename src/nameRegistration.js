import * as readline from 'node:readline/promises'; // eslint-disable-line
import { stdin as input, stdout as output } from 'node:process';

const reg = async () => {
  const rl = readline.createInterface({ input, output });

  const answer = await rl.question('Как вас зовут? ');

  console.log(`Спасибо за регистрацию, ${answer}!`);

  rl.close();
  return answer;
};
export default reg;
