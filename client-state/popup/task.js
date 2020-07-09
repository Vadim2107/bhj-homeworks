'use strict'

const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

subscribeModal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
    let close = subscribeModal.classList.remove('modal_active');
    document.cookie = 'modalClose=ОкноЗакрыто';
    // document.cookie = 'Close=' + encodeURIComponent('Окно закрыто');
})
