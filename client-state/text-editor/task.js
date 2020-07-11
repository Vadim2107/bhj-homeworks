'use strict'

const editor = document.getElementById('editor');


document.addEventListener('input', () => {
    if (editor.value.length > 0) {
        // localStorage.setItem('editor', `${editor.value}`);        
        localStorage.editor = `${editor.value}`;
    } else if (editor.value.length == 0) {
        localStorage.editor = ``;
    }
})

if (localStorage.editor == undefined) {
    editor.value = '';
} else {
    // editor.value = localStorage.getItem('editor');
    editor.value = localStorage.editor;
}
