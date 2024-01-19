
import { renderValue } from "./counter/value/renderValue.js";
import { renderHeader } from "./counter/header/renderHeader.js";
import { renderButtonIncrease } from "./counter/buttons/ButtonInc.js";
import { renderButtonDecrease } from "./counter/buttons/ButtonDec.js";

export function renderCounter() {

    document.body.innerHTML = '';
    // Header
    const header = renderHeader();
    document.body.append(header);

    // Value
    const value = renderValue();
    document.body.append(value);

    // Button Increase
    const buttonIncrease = renderButtonIncrease();
    document.body.append(buttonIncrease);

    // Button Decrease
    const buttonDecrease = renderButtonDecrease();
    document.body.append(buttonDecrease);
    
}
