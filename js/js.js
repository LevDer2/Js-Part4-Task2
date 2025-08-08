const sliderEl = document.querySelector(".slider__input");
const imageEl = document.querySelector(".slider__image");

sliderEl.addEventListener("input", _.debounce(func, 10));

function func(event) {
    imageEl.style.width = `${event.target.value}px`
};

  const box = document.getElementById('box');

  // Функція переміщення
  function moveBox(e) {
    box.style.left = e.clientX + 'px';
    box.style.top = e.clientY + 'px';
  }

  // Використовуємо debounce з lodash (100 мс)
  const debouncedMove = _.debounce(moveBox, 100);

  // Вішаємо на подію миші
  document.addEventListener('mousemove', debouncedMove);