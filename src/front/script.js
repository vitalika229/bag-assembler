// Код для первой страницы
document.getElementById('registrationForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Отменить отправку формы по умолчанию

  const username = document.getElementById('username').value;

  // Отправка имени пользователя на сервер
  fetch('/save-username', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Имя пользователя успешно сохранено на сервере.');
        // Перенаправление на другую страницу
        window.location.href = 'secondPage.html';
      } else {
        console.error('Ошибка при сохранении имени пользователя на сервере.');
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
});

// Код для второй страницы
document.getElementById('personalization-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Отменить отправку формы по умолчанию

  const days = document.getElementById('days').value;
  const cities = document.getElementById('cities').value;
  const health = document.getElementById('health').value;
  const children = document.getElementById('children').value;
  const pets = document.getElementById('pets').value;
  const accommodation = document.getElementById('accommodation').value;

  // Отправка данных на сервер
  fetch('/save-personalization', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      days,
      cities,
      health,
      children,
      pets,
      accommodation,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Информация успешно сохранена на сервере.');
      } else {
        console.error('Ошибка при сохранении информации на сервере.');
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
});
