const seconds = document.getElementById("timer");
// const time = document.getElementById("timer");
// const dd = new Date();
// const hh = dd.getHours();
// const mm = dd.getMinutes();
// const ss = dd.getSeconds();
// const padNum = ((num) => num.toString(). padStart (2 , "0"));

const timer = function(){
    seconds.textContent -= 1;
    // time.textContent = `${padNum(hh)}:${padNum(mm)}:${padNum(ss)}`;

    if (seconds.textContent == 0) {
    alert('Вы победили в конкурсе!');    
    clearInterval(timerId);
    }
}

let timerId = setInterval(timer, 1000);