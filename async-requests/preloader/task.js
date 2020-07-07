'use strict'

const loader = document.getElementById('loader');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = () => {
    
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        // let responseRequest = JSON.parse(xhr.responseText);
        let valute = JSON.parse(xhr.responseText).response.Valute;

        for (let obj in valute) {
            items.insertAdjacentHTML('beforeEnd', `
            <div class="item">
                <div class="item__code">
                    ${obj.CharCode}
                </div>
                <div class="item__value">
                    ${obj.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`);            
        }
    };
};

// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === xhr.DONE) {
//         loader.classList.remove('loader_active');
//         // let responseRequest = JSON.parse(xhr.responseText);
//         let valute = JSON.parse(xhr.responseText).response.Valute;
//         for (let key in valute) {
//             items.insertAdjacentHTML('beforeEnd', `
//             <div class="item">
//                 <div class="item__code">
//                     ${key.CharCode}
//                 </div>
//                 <div class="item__value">
//                     ${key.Value}
//                 </div>
//                 <div class="item__currency">
//                     руб.
//                 </div>
//             </div>`);
//             // console.log(xhr.responseText);
//         }
//     }
// });

// if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//     // инструкция
// };