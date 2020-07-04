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
        let value = arrProduct[i].querySelector('.product__quantity-value');
        
        if (event.target.matches('.product__add')) {
            cartProducts.insertAdjacentHTML('beforeEnd', `
            <div class="cart__product" data-id="${arrProduct[i].dataset.id}">
                <img class="cart__product-image" src="https://static-eu.insales.ru/images/products/1/7875/257179331/4515850.jpg">
                <div class="cart__product-count">${value.innerText}</div>
            </div>`);

            // alert('click');
        }

        
    })
}