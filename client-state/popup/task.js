'use strict'

const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');
const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}

if (getCookie('modalWindow') == undefined) {
    subscribeModal.classList.add('modal_active');
} else {
    subscribeModal.classList.remove('modal_active');
}

modalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    // document.cookie = 'modalWindow=windowIsClosed';
    document.cookie = 'modalWindow=' + encodeURIComponent('The modal window is closed');
})
