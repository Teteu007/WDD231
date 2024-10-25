import generalData from "./base.js";
import { Footer_and_HamBurger, DisplayFetch, DisplayItems } from "./base.js";

const principalDynamic = new Footer_and_HamBurger();

principalDynamic.setfooter();
principalDynamic.refreshPage();
principalDynamic.setHambutton();

//-----------------------------------------------------------------------------------------------------------------------------------------------

const url_shoes = generalData.getJSON_CARS();

const ActionAPI = new DisplayFetch(url_shoes);

const containerCars = document.querySelector('#container-collection');
const _dialog = document.querySelector('dialog');

const data = await ActionAPI.getAPIFetch();

console.log(data);

const _displayer = new DisplayItems(data, containerCars, _dialog);

_displayer.displayAll();

//Buttons
const _bootButton = document.querySelector('#boot');
const _boots = _displayer.get_data_boots();
const _all = document.querySelector('#all');
const _gallery = document.querySelector('#grid');
const _list = document.querySelector('#list');

console.log(_boots);

_bootButton.addEventListener('click', () => {
    containerCars.innerHTML = '';
    containerCars.classList.remove('list');
    containerCars.classList.add('grid');
    _displayer.displayAll(_boots);
})

_all.addEventListener('click', () => {
    containerCars.innerHTML = '';
    containerCars.classList.remove('list');
    containerCars.classList.add('grid');
    _displayer.displayAll();
})

_gallery.addEventListener('click', () => {
    containerCars.innerHTML = '';
    containerCars.classList.remove('list');
    containerCars.classList.add('grid');
    _displayer.display_images();
})

_list.addEventListener('click', () => {
    containerCars.innerHTML = '';
    containerCars.classList.remove('grid');
    containerCars.classList.add('list');
    _displayer.displayAll();
})