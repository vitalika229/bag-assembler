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