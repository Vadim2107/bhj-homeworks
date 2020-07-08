'use strict'

const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    let xhr  = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = (e) => {
        // alert(e.loaded);
        // alert(e.total);
        progress.value = e.loaded / e.total;
    }

    // xhr.addEventListener('readystatechange', function() {

    //     if (this.readyState == request.DONE && this.status == 200) {
    //         let data = JSON.parse(this.responseText);

    //     }   
    // });

    xhr.send(formData);
    e.preventDefault();
});