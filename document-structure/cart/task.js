'use strict'

const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

let arrControl = Array.from(productQuantityControls);
let arrProduct = Array.from(product);

for (let i = 0; i < arrControl.length; i++) {
    arrControl[i].addEventListener('click', (event) => {
        let value = arrControl[i].querySelector('.product__quantity-value');

        if (event.target.matches('.product__quantity-control_dec')) {
            if (value.innerText == 1) {
                return;
            }
            --value.innerText;            
        } else if (event.target.matches('.product__quantity-control_inc')) {
            ++value.innerText;          
        }
        return value.innerText;
    })
}

for (let i = 0; i < arrProduct.length; i++) {
    arrProduct[i].addEventListener('click', (event) => {
        const cartProduct = document.querySelectorAll('.cart__product');
        let arrCartProduct = Array.from(cartProduct);        

        const id = arrProduct[i].dataset.id;
        const value = Number(arrProduct[i].querySelector('.product__quantity-value').innerText);
        const img = arrProduct[i].querySelector('.product__image').getAttribute('src');
        
        const elementParent = arrCartProduct.find((elem) => {
            return elem.dataset.id === id;
            // return elem.dataset.id === event.target.closest('.product').dataset.id;
        })            
            
        if (elementParent) {
            if (event.target.matches('.product__add')) {
                let valueAdd = Number(elementParent.querySelector('.cart__product-count').innerText);
                elementParent.querySelector('.cart__product-count').innerText = valueAdd + value;
            }            
        } else {
            if (event.target.matches('.product__add')) {
                cartProducts.insertAdjacentHTML('beforeEnd', `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${value}</div>
                </div>`);
            }
        }
    })
}