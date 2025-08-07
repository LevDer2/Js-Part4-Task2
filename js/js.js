const sliderEl = document.querySelector(".slider__input");
const imageEl = document.querySelector(".slider__image");

sliderEl.addEventListener("input", _.debounce(func, 10));

function func(event) {
    imageEl.style.width = `${event.target.value}px`
};

const box = document.querySelector("#box");
const buttonStart = document.querySelector("#buttonStart");

buttonStart.addEventListener("click", secondExercise);


function secondExercise() {
    document.addEventListener("mousemove", _.debounce((event) => {
        const x = event.clientX;
        const y = event.clientY;

        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
    }, 100),
    );
}