'use strict';

const blade = document.querySelector('.ls-blade');
const button = document.querySelector('.grip-button');
let isOpened = false;

const bladeController = () => {
    if (isOpened === false) {
        // change blade state
        blade.classList.remove('close');
        blade.classList.add('open');
        // change button color
        button.classList.remove('button-off');
        button.classList.add('button-on');
        isOpened = true;
    } else {
        // change blade state
        blade.classList.remove('open');
        blade.classList.add('close');
        // change button color
        button.classList.remove('button-on');
        button.classList.add('button-off');
        isOpened = false;
    }
}


const bladeClick = button.addEventListener('click', bladeController);
bladeClick();