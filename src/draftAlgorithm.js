import _ from 'lodash';

// const data1 = {
//   placeOfLiving: 'Moscow', sex: 'male', age: 20, citizenship: 'russian', religion: 'atheist', countryStart: 'russian', countryEnd: 'usa', child: { age: 13 },
// };
// const data2 = {
//   tripDuration: 10, startCity: 'Moscow', endCity: 'London', health: 'healthy', weather: { feelslike: 13, weatherDescriptions: 'дождливо' },
// };
import { readFileAsync } from './helpers.js';

const constContent = await readFileAsync('../database/users/personalization.json');
const content = await readFileAsync('../database/users/user.json');
console.log(constContent);
console.log(content);
// {"days":"10","cities":"dubai","health":"yes","children":"yes","pets":"yes","accommodation":"hotel"}
// {"name":"Виталий","sex":"male","age":"19","placeLive":"LONDON","citizenship":"qwe","religion":"atheist"}
const algorithm = (constContent, content) => {
  const compoundObj = _.merge(JSON.parse(constContent), JSON.parse(content));
  const recommendedItems = [];
  console.log(compoundObj);
  if (Number(compoundObj.days) === 1) {
    recommendedItems.push('powerbank');
  } else if (Number(compoundObj.days) > 1) {
    recommendedItems.push('powerbank');
    recommendedItems.push('зарядку для телефона');
  }

  if (compoundObj.sex === 'male') {
    recommendedItems.push('Бритва');
  } else {
    recommendedItems.push('Косметика');
  }
  if (compoundObj.age < 18) {
    recommendedItems.push('Разрешение от родителей');
  } else {
    recommendedItems.push('паспорт');
  }

  if (compoundObj.child === 'yes') {
    recommendedItems.push('Паспорт ребенка');
  }

  if (compoundObj.pets === 'yes') {
    recommendedItems.push('переноска');
    recommendedItems.push('корм');
  }
  return recommendedItems;
};

// if (compoundObj.placeLive !== compoundObj.countryEnd) {
//   if (compoundObj.age > 14) {
//     recommendedItems.push('паспорт');
//   } else {
//     recommendedItems.push('Свидетельство о рождении');
//   }
//   recommendedItems.push('загранпаспорт');
// }

// if (compoundObj.child.age < 14) {
//   recommendedItems.push('Свидетельство о рождении детей');
// } else {
//   recommendedItems.push('Паспорт ребенка');
// }

// if (compoundObj.weather.weatherDescriptions === 'дождливо') {
//   recommendedItems.push('Зонт');
//   if (compoundObj.weather.feelslike < 6) {
//     recommendedItems.push('Очень теплую непромокаемую одежду');
//   } else if (compoundObj.weather.feelslike > 16 > 10) {
//     recommendedItems.push('теплую непромокаемую одежду');
//   } else {
//     recommendedItems.push('легкую непромокаемую одежду');
//   }
// } else if (compoundObj.weather.weatherDescriptions === 'солнечно') {
//   if (compoundObj.weather.feelslike < 6) {
//     recommendedItems.push('Очень теплeую одежду');
//   } else if (compoundObj.weather.feelslike > 16 > 10) {
//     recommendedItems.push('теплую одежду');
//   } else {
//     recommendedItems.push('легкую одежду');
//   }
// }
