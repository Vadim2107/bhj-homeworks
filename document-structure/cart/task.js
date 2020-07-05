'use strict'

const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

// let arrCartProduct = [];
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
        const cartProduct = cartProducts.querySelectorAll('cart__product');
        let arrCartProduct = Array.from(cartProduct);

        const id = arrProduct[i].getAttribute('data-id');
        const value = arrProduct[i].querySelector('.product__quantity-value');
        const img = arrProduct[i].querySelector('.product__image').getAttribute('src');
        
        // arrCartProduct.find((item) => {
        //     if (item.getAttribute('data-id')) {
        //         alert('click');
        //     } else
             if (event.target.matches('.product__add')) {
                    cartProducts.insertAdjacentHTML('beforeEnd', `
                    <div class="cart__product" data-id="${arrProduct[i].dataset.id}">
                        <img class="cart__product-image" src="${img}">
                        <div class="cart__product-count">${value.innerText}</div>
                    </div>`);

                    // arrCartProduct.push(cart);           
            }
            return arrCartProduct;
        // })        
    })
}
