const viewportHeight = window.innerHeight;
const reveal = document.querySelectorAll('.reveal');
let arrReveal = Array.from(reveal);

const addReveal = () => {
    for (let i = 0; i < arrReveal.length; i++) {
        const revealTop = arrReveal[i].getBoundingClientRect().top;
        if (revealTop < viewportHeight) {
            arrReveal[i].classList.add('reveal_active');
        }
    }    
}

window.addEventListener('scroll', addReveal);