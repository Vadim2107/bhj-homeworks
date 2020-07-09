'use strict'

const editor = document.getElementById('editor');


document.addEventListener('keyup', () => {
    if (editor.value.length > 0) {
        // localStorage.setItem('editor', `${editor.value}`);        
        localStorage.editor = `${editor.value}`;
    }
})



// editor.value = localStorage.getItem('editor');
editor.value = localStorage.editor;

 