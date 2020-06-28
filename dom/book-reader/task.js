"use strict";

const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');

let arrFontSize  = Array.from(fontSize);

for (let i = 0; i < arrFontSize.length; i++) {
    arrFontSize[i].onclick = function() {
        
        if (arrFontSize[i].matches('.font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (arrFontSize[i].matches('.font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
        
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        arrFontSize[i].classList.add('font-size_active');
            
        return false;
    }
}