const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseActive = document.querySelector('.rotator__case_active');
// const rotator = document.querySelector('.rotator');
let arrRotatorCase = Array.from(rotatorCase);

setInterval(() => {
	arrRotatorCase.forEach((element) => {
        if (element.matches('.rotator__case_active') && element.nextElementSibling !== null) {
            element.classList.remove('rotator__case_active');
            element.nextElementSibling.classList.add('rotator__case_active');
        }
        if (element.nextElementSibling === null) {
            element.classList.remove('rotator__case_active');
            element = arrRotatorCase[0];
            element.classList.add('rotator__case_active');
        }
    })
}, 1000)


// let timer = arrRotatorCase.forEach((element) => {
//     if (element.matches('.rotator__case_active') && element.nextElementSibling !== null) {
//         element.classList.remove('rotator__case_active');
//         element.nextElementSibling.classList.add('rotator__case_active');
//     }
//     if (element.nextElementSibling === null) {
//         element.classList.remove('rotator__case_active');
//         element = arrRotatorCase[0];
//         element.classList.add('rotator__case_active');
//     }
// })

// setInterval(timer, 1000);

// // for (let i = 0; i < arrRotatorCase.length; i++) {
//     // arrRotatorCase.forEach(function timer() {
//         function timer() {
//         // if (arrRotatorCase[i].classList.contains('rotator__case')) {
//         //     arrRotatorCase[i].classList.add('rotator__case_active');
//         // }
//     // setInterval(timer, 2000);
    
//     // rotatorCaseActive.classList.remove('rotator__case_active');
//     rotatorCaseActive.nextElementSibling.classList.add('rotator__case_active');
    
//     }
// setInterval(timer, 2000);
    
// }


// let timerId = setInterval(timer, 1000);