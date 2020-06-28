const chatWidget = document.querySelector('.chat-widget');
// const message = document.querySelectorAll('.message')
const chatWidgetMessages = document.getElementById('chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
// let arrMessage = Array.from(message);

let arrMessage = [
    'Добрый день! А на сегодня хороших новостей больше нет.',
    'Мы ещё не проснулись. Позвоните через 10 лет.',
    'Давай, досвидания.',
    'К сожалению все операторы сейчас заняты. Не пишите нам больше.',
    'Все товары распроданы. Новых поступлений не планируется!!!',
    'Ой мама, кто это!',
    'С вами общается РОБОТ. Знай своё место, кожаный мешок!!!'
];


chatWidget.onclick = function() {
    chatWidget.classList.add('chat-widget_active');
}
let i = 0;
chatWidgetInput.addEventListener('keydown', function(elem){
	if(elem.keyCode === 13) {        
        if(this.value.length > 0) {            
            chatWidgetMessages.innerHTML += `        
            <div class="message message_client">
            <div class="message__time">${new Date().toLocaleTimeString('RU').substr(0, 5)}</div>
            <div class="message__text">${elem.target.value}</div>
            </div>
            <div class="message">
            <div class="message__time">${new Date().toLocaleTimeString('RU').substr(0, 5)}</div>
            <div class="message__text">${arrMessage[i]}</div>
            </div>`;
        }
        if (i == arrMessage.length - 1) {
            i = 0;
        } else {
            i = i + 1;
        }

        this.value = '';
    }
})