const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

// const hole = function getHole(index) {
//     return document.getElementById(`hole${index}`);
// }
getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {    
        if (getHole(i).className.includes('hole_has-mole') == true) {
            dead.textContent = ++dead.textContent;
        } else {
            lost.textContent = ++lost.textContent;
        }

        if (dead.textContent == 10) {
            alert('Победа!!!');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (lost.textContent == 5) {
            alert('Вы проиграли.');
            lost.textContent = 0;
            dead.textContent = 0;
        }
    }
}