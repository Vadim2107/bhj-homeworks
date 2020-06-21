const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseTimes = document.getElementsByClassName('modal__close_times');
const showSuccess = document.getElementsByClassName('show-success');
const firstSuccess = showSuccess.item(0);
let arr = Array.from(modalCloseTimes);


modalMain.classList.add('modal_active');

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
}

firstSuccess.onclick = function() {
    modalSuccess.classList.add('modal_active');
    modalMain.classList.toggle('modal_active');
}