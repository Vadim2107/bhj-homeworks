const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
// const clickerSpeed = document.getElementById("clicker__speed");

image.onclick = function() {
    
    clickerCounter.textContent = ++clickerCounter.textContent;
    const div = clickerCounter.textContent % 2;
    // let timeEven;
    // let timeOdd;
    // let speed;

    if (div == 0) {
        image.width = 200;
        // timeEven = Date.now();
        // speed = timeOdd - timeEven;        
    } else {
        image.width = 170;
        // timeOdd = Date.now();
        // speed = timeEven - timeOdd;        
    }    

    // clickerSpeed.textContent = 1000 / speed;
}