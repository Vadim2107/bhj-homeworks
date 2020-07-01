const interestCheck = document.querySelectorAll('.interest__check');
let arrInterestCheck = Array.from(interestCheck);

arrInterestCheck.forEach(elem => {
    let interestClosest = elem.closest('.interest'); //родитель инпута
    const arrInterest = Array.from(interestClosest.querySelectorAll('.interest__check'));
    
	if (interestClosest.querySelector('.interests')) { //если у родителя инпута есть вложенный список
        elem.addEventListener('change', () => { //добавляем на него событие 'change'
            for (let i = 0; i < arrInterest.length; i++) {
                if (elem.checked) { //если на элементе галочка                   
                    arrInterest[i].checked = true;
                } else {                   
                    arrInterest[i].checked = false;
                }
            }
		});
	}
})