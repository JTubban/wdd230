let visits = document.querySelector('.visits');
let now = new Date();
let past = new Date(localStorage.getItem('lastVisit')) || null;
let diff = Math.round((now - past) / (1000 * 60 * 60 * 24));

if (localStorage.getItem('lastVisit') === null) {
    visits.textContent = 'Welcome! Let us know if you have any questions.';
} else if (diff < 1) {
    visits.textContent = 'Back too soon! Awesome!';
} else {
    visits.textContent = `You last visited ${diff} day${diff > 1 ? 's' : ''} ago.`;
}

localStorage.setItem('lastVisit', now.toString());

    