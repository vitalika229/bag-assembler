import wf from './writeFile.js';
import reg from './nameRegistration.js';
import routeInformation from './routeInformation.js';
import getWeather from './weatherFunc.js';

export default async () => {
  const data = await reg();
  wf('./users/user.json', data);
  await routeInformation();
  const weather = await getWeather();
  console.log(weather);
};
