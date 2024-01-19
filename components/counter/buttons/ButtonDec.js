import { decreaseDataCount } from "../../../data/data.js";

export function renderButtonDecrease() {

    const buttonDecrease = document.createElement('button');
    buttonDecrease.append('-');
    buttonDecrease.addEventListener('click', function (){
        decreaseDataCount();
    });

    return buttonDecrease;

}