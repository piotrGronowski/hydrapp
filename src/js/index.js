import '../scss/main.scss';

// uncomment the lines below to enable PWA
 import {registerSW} from './pwa.js';
 registerSW();

/* place your code below */

console.log('HELLO 🚀')

const glassCounter = document.querySelector('.glass_counter--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toISOString().slice(0,10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue){
    currentGlassCounter = localStorageValue;
}else{
    localStorage.setItem(key,0);
}

glassCounter.innerHTML = currentGlassCounter;

buttonAdd.addEventListener('click',()=>{
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
})
buttonRemove.addEventListener('click',()=>{
    if(currentGlassCounter>0){
        currentGlassCounter--;
        glassCounter.innerHTML = currentGlassCounter;
        localStorage.setItem(key, currentGlassCounter);
    }else{
        alert('Z pustego i Salomon nie naleje')
    }
})