'use strict'

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');

signin.classList.add('signin_active');

// signinForm.addEventListener('submit', (e) => {
    

    signinBtn.addEventListener('click', () => {
        const formData = new FormData(signinForm);
        let xhr  = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
        xhr.send(formData);
        e.preventDefault();
    })
    
    // signin.classList.add('signin_active');   
// });