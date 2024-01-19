import { increaseDataCount } from "../../../data/data.js";

export function renderButtonIncrease() {

    const buttonIncrease = document.createElement('button');
    buttonIncrease.append('+');
    buttonIncrease.addEventListener('click', function (){
        increaseDataCount();
    });

    return buttonIncrease;

}