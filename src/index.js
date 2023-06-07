import writeFile from './writeFile.js';
import reg from './nameRegistration.js';
import routeInformation from './routeInformation.js';

export default async () => {
  const data = await reg();
  writeFile('./users/user.json', data);
  const temperature = await routeInformation();
  console.log(temperature);
};
