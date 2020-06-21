const menuSub = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelectorAll('.menu__link');

let arrLink = Array.from(menuLink);
let arrSub = Array.from(menuSub);

for (let i = 0; i < arrLink.length; i++) {
    
    arrLink[i].onclick = function() {        

        // for (let j = 0; j < arrSub.length; j++) {
        //     if (arrSub[j].classList.contains('menu_active')) {
        //         arrSub[j].classList.remove('menu_active');
        //     }
        // }

        // if (arrLink[i + 1].closest('.menu_sub') !== null) {            
        //     arrLink[i + 1].closest('.menu_sub').classList.toggle('menu_active');
        // }

        if (arrLink[i].nextElementSibling.matches('.menu_sub')) {
            arrLink[i].nextElementSibling.classList.toggle('menu_active');

            return false; 
        }              
    }            
}