'use strict'

const loader = document.getElementById('loader');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = () => {
    
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        
        let valute = JSON.parse(xhr.responseText).response.Valute;

        for (let key in valute) {
            items.insertAdjacentHTML('beforeEnd', `
            <div class="item">
                <div class="item__code">
                    ${valute[key].CharCode}
                </div>
                <div class="item__value">
                    ${valute[key].Value}
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
//         
//         let valute = JSON.parse(xhr.responseText).response.Valute;
//         for (let key in valute) {
//             items.insertAdjacentHTML('beforeEnd', `
//             <div class="item">
//                 <div class="item__code">
//                     ${valute[key].CharCode}
//                 </div>
//                 <div class="item__value">
//                     ${valute[key].Value}
//                 </div>
//                 <div class="item__currency">
//                     руб.
//                 </div>
//             </div>`);            
//         }
//     }
// });

// if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//     // инструкция
// };