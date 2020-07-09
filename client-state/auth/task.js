'use strict'

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');

signin.classList.add('signin_active');

// signinForm.addEventListener('submit', (event) => {    

//     signinBtn.addEventListener('click', (e) => {
//         const formData = new FormData(signinForm);
//         let xhr  = new XMLHttpRequest();
//         xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
//         xhr.send(formData);
//         e.preventDefault();
//     })
//     event.preventDefault();       
// });

signinForm.addEventListener('submit', send);
signinBtn.addEventListener('click', send);    
function send(e) {
        const formData = new FormData(signinForm);
        let xhr  = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
        e.preventDefault();

        // let xhr  = new XMLHttpRequest();
        // xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/auth.php');
        // xhr.send();
        // e.preventDefault();
}