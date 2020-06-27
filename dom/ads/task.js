const rotatorCase = document.querySelectorAll('.rotator__case');
let arrRotatorCase = Array.from(rotatorCase);
let lengthArr = arrRotatorCase.length;
let i = 0;

setInterval(() => {    
    arrRotatorCase[i].classList.remove("rotator__case_active");
    
    if (i == lengthArr - 1) {
        i = 0;
        arrRotatorCase[i].classList.add('rotator__case_active');
    } else {
        ++i;
        arrRotatorCase[i].classList.add('rotator__case_active');
    } 
}, 1000);