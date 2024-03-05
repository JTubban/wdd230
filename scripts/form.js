// Form
// Password - if the password is the same
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const message = document.querySelector('#message');

confirmPassword.addEventListener('focusout', checkSame);

function checkSame() {
    if (password.value !== confirmPassword.value) {
        message.textContent = 'Password does not match!';
        message.style.visibility = 'show';
        confirmPassword.style.backgroundColor = '#fff0f3';
        confirmPassword.value = '';
        confirmPassword.focus();
    } else {
        message.style.display = 'none';
        confirmPassword.style.backgroundColor = '#fff';
        confirmPassword.style.color = '#000';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    function handleSubmit(event) {
        event.preventDefault();

        let formt = event.target;
        let formData = new FormData(formt);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
    }

    // const form = document.querySelector('.fr1');
    // form.addEventListener('submit', handleSubmit);
});