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

// Eseménykezelő - A button elem click eseménye meghívja a bladeController függvényt
const buttonClick = button.addEventListener('click', bladeController);
buttonClick();

// IIFE (Immediately Invoked Function Expression - Azonnal meghívott föggvény kifejezés)
// (button.addEventListener('click', bladeController))();