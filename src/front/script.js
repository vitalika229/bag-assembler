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
