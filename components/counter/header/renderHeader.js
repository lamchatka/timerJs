import { data } from "../../../data/data.js";

export function renderHeader() {
    const titleElement = document.createElement('h1');
    titleElement.append(data.title);
    return titleElement;
}
