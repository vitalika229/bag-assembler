import _ from 'lodash';

const constContent = {
  placeOfLiving: 'Moscow', sex: 'male', age: 20, citizenship: 'russian', religion: 'atheist', countryStart: 'russian', countryEnd: 'usa', child: { age: 13 },
};
const content = {
  tripDuration: 10, startCity: 'Moscow', endCity: 'London', health: 'healthy', weather: { feelslike: 13, weatherDescriptions: 'дождливо' },
};

const algorithm = (constContent, content) => {
  const compoundObj = _.merge(constContent, content);
  const recommendedItems = [];
  if (compoundObj.sex === 'male') {
    recommendedItems.push('Бритва');
  } else {
    recommendedItems.push('Косметика');
  }
  if (compoundObj.age < 18) {
    recommendedItems.push('Разрешение от родителей');
  }

  if (compoundObj.countryStart !== compoundObj.countryEnd) {
    if (compoundObj.age > 14) {
      recommendedItems.push('паспорт');
    } else {
      recommendedItems.push('Свидетельство о рождении');
    }
    recommendedItems.push('загранпаспорт');
  }
  if (compoundObj.child !== 0) {
    if (compoundObj.child.age < 14) {
      recommendedItems.push('Свидетельство о рождении детей');
    } else {
      recommendedItems.push('Паспорт ребенка');
    }
  }
  if (compoundObj.weather.weatherDescriptions === 'дождливо') {
    recommendedItems.push('Зонт');
    if (compoundObj.weather.feelslike < 6) {
      recommendedItems.push('Очень теплую непромокаемую одежду');
    } else if (compoundObj.weather.feelslike > 16 > 10) {
      recommendedItems.push('теплую непромокаемую одежду');
    } else {
      recommendedItems.push('легкую непромокаемую одежду');
    }
  } else if (compoundObj.weather.weatherDescriptions === 'солнечно') {
    if (compoundObj.weather.feelslike < 6) {
      recommendedItems.push('Очень теплeую одежду');
    } else if (compoundObj.weather.feelslike > 16 > 10) {
      recommendedItems.push('теплую одежду');
    } else {
      recommendedItems.push('легкую одежду');
    }
  }

  console.log(recommendedItems);
};
algorithm(constContent, content);
