
import { setChangeDataCallback } from "./data/data.js";
import { renderCounter } from "./components/renderCounter.js";
// import { data } from "./data/data.js";

renderCounter();

setChangeDataCallback(renderCounter);
