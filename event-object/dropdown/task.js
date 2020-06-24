const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownValue = document.querySelectorAll('.dropdown__value');

let arrItem = Array.from(dropdownItem);
let arrValue = Array.from(dropdownValue);

function changesValue() {
    for (let j = 0; j < arrItem.length; j++) {
        arrItem[j].onclick = function() {
            this.closest('.dropdown__list').classList.remove('dropdown__list_active');            
            this.closest('.dropdown__list').previousElementSibling.textContent = arrItem[j].textContent;

            return false;
        }
    }
}

for (let i = 0; i < arrValue.length; i++) {
    arrValue[i].onclick = function() {
    
        this.nextElementSibling.classList.toggle('dropdown__list_active');
        this.addEventListener('click', changesValue);
    }
}