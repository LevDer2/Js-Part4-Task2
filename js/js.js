const sliderEl = document.querySelector(".slider__input");
const imageEl = document.querySelector(".slider__image");

sliderEl.addEventListener("input", _.debounce(func, 300));

function func(event) {
    imageEl.style.width = `${event.target.value}px`
    imageEl.style.height = `${event.target.value}px`
};

  const box = document.getElementById('box');

  function moveBox(e) {
    box.style.left = e.clientX + 'px';
    box.style.top = e.clientY + 'px';
  }

  const debouncedMove = _.debounce(moveBox, 100);

  document.addEventListener('mousemove', debouncedMove);