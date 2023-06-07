import { writeFileAsync, registration, routeInformation } from './helpers.js';

export default async () => {
  const data = await registration();
  writeFileAsync('./users/user.json', data);
  const temperature = await routeInformation();
  console.log(temperature);
};
