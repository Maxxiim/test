import './assets/scss/main.scss';

const point = document.querySelectorAll('.point');
const slider = document.querySelectorAll('.slider__list-item');

point[1].classList.add('point_active');
slider[1].classList.add('slider__list-item_active');
let counter = 0;

clickPoint();


function clickPoint() {
    for (let i = 0; i < point.length; i++) {
        point[i].addEventListener('click', () => {
            for (let k = 0; k < slider.length; k++) {
                point[k].classList.remove('point_active');
                slider[k].classList.remove('slider__list-item_active');
            };
            counter = i;
            point[counter].classList.add('point_active');
            slider[counter].classList.add('slider__list-item_active');
        });
    };
};

function autoSlider() {
    for (let k = 0; k < slider.length; k++) {
        point[k].classList.remove('point_active')
        slider[k].classList.remove('slider__list-item_active')
    }
    counter++;
    if (counter >= slider.length) {
        counter = 0;
    }
    point[counter].classList.add('point_active')
    slider[counter].classList.add('slider__list-item_active')
};

let sliderTimer = 1000;
let timerSlider = setInterval(() => autoSlider(), sliderTimer);