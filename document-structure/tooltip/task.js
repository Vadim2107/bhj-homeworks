'use strict'

const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');
let arr = Array.from(hasTooltip);

for (let i = 0; i < arr.length; i++) {
    arr[i].insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0"></div>');
    
    arr[i].onclick = function() {    
        arr[i].nextElementSibling.classList.toggle('tooltip_active');
        arr[i].nextElementSibling.textContent = arr[i].title;
        arr[i].nextElementSibling.style.top = `${arr[i].getBoundingClientRect().bottom}px`;
        arr[i].nextElementSibling.style.left = `${arr[i].getBoundingClientRect().left}px`;
        
        return false;
    }    
}

// window.onscroll = function() {
//     if (tooltip.style.top !== `${previousElementSibling.getBoundingClientRect().bottom}px`) {
//         tooltip.classList.remove('tooltip_active');
//     }
// }