// Код для первой страницы
document.getElementById('registrationForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Отменить отправку формы по умолчанию

  // const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const sex = document.getElementById('sex').value;
  const age = document.getElementById('age').value;
  const placeLive = document.getElementById('placeLive').value;
  const citizenship = document.getElementById('citizenship').value;
  const religion = document.getElementById('religion').value;

  // Отправка имени пользователя на сервер
  fetch('/save-username', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      sex,
      age,
      placeLive,
      citizenship,
      religion,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Данные пользователя успешно сохранено на сервере.');
        // Перенаправление на другую страницу
        window.location.href = 'personalizationPage.html';
      } else {
        console.error('Ошибка при сохранении данных пользователя на сервере.');
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
});
