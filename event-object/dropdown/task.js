const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownValue = document.querySelectorAll('.dropdown__value');

let arrItem = Array.from(dropdownItem);
let arrValue = Array.from(dropdownValue);

function changesValue() {
    for (let j = 0; j < arrItem.length; j++) {
        arrItem[j].onclick = function() {
            arrItem[j].closest('.dropdown__list').classList.remove('dropdown__list_active');            
            arrItem[j].closest('.dropdown__list').previousElementSibling.textContent = arrItem[j].textContent;

            return false;
        }
    }
}

for (let i = 0; i < arrValue.length; i++) {
    arrValue[i].onclick = function() {
    
        arrValue[i].nextElementSibling.classList.toggle('dropdown__list_active');
        arrValue[i].addEventListener('click', changesValue);
    }
}