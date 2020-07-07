'use strict'

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const poll = document.querySelector('.poll');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let pollList = JSON.parse(xhr.responseText).data;

        pollTitle.innerText = pollList.title;

        for (let i = 0; i < pollList.answers.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeEnd', 
           `<button class="poll__answer">
              ${pollList.answers[i]}
            </button>`);
        }        
    }
});

poll.addEventListener('click', (event) => {
    const answer = event.target.matches('.poll__answer');

    if (answer) {
        alert('Спасибо, ваш голос засчитан!');
    }
})