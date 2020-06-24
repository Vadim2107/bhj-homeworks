const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

let arrTab = Array.from(tab);
let arrTabContent = Array.from(tabContent);
// let tabActive = document.querySelector('.tab_active');
let indexActive = 0;

for (let i = 0; i < arrTab.length; i++) {
    arrTab[i].onclick = function() {
        arrTab[indexActive].classList.remove('tab_active');
        arrTab[i].classList.add('tab_active');
        // let indexActive = arrTab.indexOf(tabActive);
        
        arrTabContent[indexActive].classList.remove('tab__content_active');
        arrTabContent[i].classList.add('tab__content_active');
        indexActive = i;
    }
}