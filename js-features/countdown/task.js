const seconds = document.getElementById("timer");

const timer = function(){
    seconds.textContent -= 1;

    if (seconds.textContent == 0) {
    alert('Вы победили в конкурсе!');    
    clearInterval(timerId);
    }
}

let timerId = setInterval(timer, 1000);