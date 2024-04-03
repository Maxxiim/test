import { compile } from 'sass';
import './assets/scss/main.scss';

openModalFilterGoods()
openModalOrder();
openModalWindow();


// ==================================================================
// slider start
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

// ================================================================
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


function openModalWindow() {

    const OpenModal = document.querySelector('.header__navbar-login');

    OpenModal.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalLogin = document.getElementById('modalLogin');
        const modalRegister = document.getElementById('modalRegister');

        modal.style.display = "block";
        modalLogin.style.display = "block";

        const btnCloseModal = document.getElementById('btnCloseModal');
        btnCloseModal.addEventListener('click', () => {
            modal.style.display = "none";
            modalLogin.style.display = "none"
            modalRegister.style.display = "none"
            btnTabLogin.classList.add('modal__content-tabs-tab_active');
            btnTabRegister.classList.remove('modal__content-tabs-tab_active');
        })

        const btnTabLogin = document.getElementById('btnTabLogin');
        btnTabLogin.addEventListener('click', () => {
            btnTabLogin.classList.add('modal__content-tabs-tab_active');
            btnTabRegister.classList.remove('modal__content-tabs-tab_active');
            modalLogin.style.display = "block"
            modalRegister.style.display = "none"
        })

        const btnTabRegister = document.getElementById('btnTabRegister');
        btnTabRegister.addEventListener('click', () => {
            btnTabLogin.classList.remove('modal__content-tabs-tab_active');
            btnTabRegister.classList.add('modal__content-tabs-tab_active');
            modalLogin.style.display = "none"
            modalRegister.style.display = "block"

            const showPassword = document.querySelector('.form-hide__register');
            showPassword.addEventListener('click', () => {
                const showRegisterPassword = document.getElementById('registerPassword');
                if (showRegisterPassword.type === "password") {
                    showRegisterPassword.type = "text"
                    showPassword.style.stroke = "rgb(70, 163, 88)"
                } else {
                    showRegisterPassword.type = "password"
                    showPassword.style.stroke = "rgb(114, 114, 114)"
                }
            });
        });
    });

    window.onclick = function (e) {
        if (e.target === modal) {
            document.getElementById('modal').style.display = "none";
            modalRegister.style.display = "none";
            modalLogin.style.display = "none"
            btnTabLogin.classList.add('modal__content-tabs-tab_active');
            btnTabRegister.classList.remove('modal__content-tabs-tab_active');
        };
    };
};

function openModalOrder() {
    document.addEventListener('DOMContentLoaded', () => {
        const btnPlaceOrder = document.querySelector('.checkout__order-payment-btn');
        btnPlaceOrder.addEventListener('click', () => {
            const modalOrderPlace = document.querySelector('.modal-checkout');
            modalOrderPlace.style.display = "block";
            document.body.style.overflow = "hidden";

            const btnCloseModalOrder = document.getElementById('btnCLoseOrder');
            btnCloseModalOrder.addEventListener('click', () => {
                modalOrderPlace.style.display = "none";
            })

            window.onclick = function (e) {
                if (e.target === modalOrder) {
                    modalOrderPlace.style.display = "none";
                }
                if (modalOrder.style.display === "none") {
                    document.body.style.overflow = "auto";
                }
            };

        })
    })
};

function openModalFilterGoods() {
    const btnModalFilterMob = document.querySelector(".header__navbar-filter-img");
    btnModalFilterMob.addEventListener('click', () => {
        const modalFitlerGoodsMob = document.getElementById('goodsFilter');
        modalFitlerGoodsMob.style.display = "block";
        document.body.style.overflow = "hidden";

        window.onclick = function (e) {
            if (e.target === btnModalFilterMob) {
                modalFitlerGoodsMob.style.display = "none";
                document.body.style.overflow = "auto";
            }
            else {
                modalFitlerGoodsMob.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        }
    })
};
