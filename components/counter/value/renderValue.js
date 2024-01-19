import { data } from "../../../data/data.js";

export function renderValue() {
    const valueElement = document.createElement('div');
    valueElement.append(data.count);
    return valueElement;
}
    