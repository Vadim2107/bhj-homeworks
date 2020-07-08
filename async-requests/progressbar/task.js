'use strict'

const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    let xhr  = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = (event) => {        
        progress.value = event.loaded / event.total;
    }    

    xhr.send(formData);
    e.preventDefault();    
});