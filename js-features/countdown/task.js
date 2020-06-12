const timer = function(){
    const seconds = document.getElementById("timer");
    seconds.textContent -= 1;

    if (seconds.textContent < 0) {
        alert('Вы победили в конкурсе!');
        seconds.textContent = 59;
    }    
}

setInterval(timer, 1000);