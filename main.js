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

let sliderTimer = 1000 * 3;
let timerSlider = setInterval(() => autoSlider(), sliderTimer);

// ==================================================================
// unput range filter price

const rangeInput = document.querySelectorAll('.price-input__slider-range-input input');
const progress = document.querySelector('.price-input__slider-progress');
const numberInput = document.querySelectorAll(".price-input__field input");
let priceGap = 300;

numberInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minValue = numberInput[0].value;
        let maxValue = numberInput[1].value;


        if ((maxValue - minValue >= priceGap) && maxValue <= 2000) {
            if (e.target.className === "price-input__field-min") {
                rangeInput[0].value = minValue;
                progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";

            } else {
                rangeInput[1].value = maxValue;
                progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
            }
        };
    });
});

rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minValue = rangeInput[0].value;
        let maxValue = rangeInput[1].value;

        if (maxValue - minValue <= priceGap) {
            if (e.target.className === "price-input__slider-range-input-min") {
                rangeInput[0].value = maxValue - priceGap;
            } else {
                rangeInput[1].value = minValue + priceGap;
            }
        } else {
            numberInput[0].value = minValue;
            numberInput[1].value = maxValue;
            progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }
    });
});
// ==================================================================