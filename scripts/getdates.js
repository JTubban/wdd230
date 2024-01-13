import { getyear } from "./modules.js";

document.querySelector('#year').textContent = getyear();

const text = document.lastModified;
document.querySelector('#lastModified').innerHTML = "Last Modification: " + text;