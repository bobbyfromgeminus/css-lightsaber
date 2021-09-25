'use strict';

const blade = document.querySelector('.ls-blade');
const button = document.querySelector('.grip-button');
let isOpened = false;

const bladeController = () => {
    if (isOpened === false) {
        button.classList.replace('button-off', 'button-on');
        blade.classList.remove('close');
        blade.classList.add('open');
        isOpened = true;
    } else {
        button.classList.replace('button-on', 'button-off');
        blade.classList.remove('open');
        blade.classList.add('close');
        isOpened = false;
    }
}


const buttonClick = button.addEventListener('click', bladeController);
buttonClick();

// (button.addEventListener('click', bladeController))();