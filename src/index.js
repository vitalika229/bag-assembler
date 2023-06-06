import wf from './writeFile.js';
import reg from './nameRegistration.js';

export default async () => {
  const data = await reg();
  wf('./users/user2.json', data);
};
