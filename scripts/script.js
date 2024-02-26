const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
// const map = document.querySelector('.map');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    // map.classList.toggle('open');
});

// Page visits
const visitsDisplay = document.querySelector('#pageVisits');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit. Welcome!';
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);