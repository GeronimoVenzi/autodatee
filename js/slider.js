const slider = document.querySelector('.slider-container');

let maxScrollLeft = slider.scrollWidth - slider.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function () {
        slider.scrollLeft = slider.scrollLeft + step;
        if (slider.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (slider.scrollLeft === 0) {
            step = step * -1;
        }
    }, 10)
}

const stop = () => {
    clearInterval(intervalo);
}

slider.addEventListener('mouseover', () => {
    stop();
})

slider.addEventListener('mouseover', () => {
    start();
})

start();