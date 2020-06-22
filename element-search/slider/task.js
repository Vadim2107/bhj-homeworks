const sliderArrow = document.querySelectorAll('.slider__arrow');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');

let arrArrow = Array.from(sliderArrow);
let arrItem = Array.from(sliderItem);
let arrDot = Array.from(sliderDot);
let numActiveSlide = 0;

for (let i = 0; i < arrArrow.length; i++) {    
    arrArrow[i].onclick = function() {
        if (arrArrow[i].matches('.slider__arrow_next')) {
            if (numActiveSlide >= arrItem.length - 1) {
                numActiveSlide = - 1;                
            }        
           
            arrItem[numActiveSlide + 1].classList.add('slider__item_active');
            if (numActiveSlide == -1) {
                arrItem[arrItem.length - 1].classList.remove('slider__item_active');
            } else {
                arrItem[numActiveSlide + 1].previousElementSibling.classList.remove('slider__item_active');
            }
                
            numActiveSlide = ++numActiveSlide;            
        } else if (arrArrow[i].matches('.slider__arrow_prev')) {
            
            if (numActiveSlide == 0) {
                numActiveSlide = arrItem.length;
                arrItem[0].nextElementSibling.classList.remove('slider__item_active');
                arrItem[numActiveSlide - 1].classList.add('slider__item_active');
            } else {
                arrItem[numActiveSlide - 1].classList.add('slider__item_active');
                arrItem[numActiveSlide - 1].nextElementSibling.classList.remove('slider__item_active');
            }
                
            numActiveSlide = --numActiveSlide;
        }
    }
}

for (let i = 0; i < arrDot.length; i++) {
    arrDot[i].onclick = function() {
        arrItem[numActiveSlide].classList.remove('slider__item_active');
        arrItem[i].classList.add('slider__item_active');
        numActiveSlide = i;
    }
}