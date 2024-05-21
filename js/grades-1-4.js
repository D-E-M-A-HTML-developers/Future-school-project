let mediaMobile415 = window.matchMedia("(min-width: 415px)");
let mediaMobile768 = window.matchMedia("(min-width: 768px)");
let mediaMobile1000 = window.matchMedia("(min-width: 1000px)");
const formButton = document.querySelector('.form__button_change-content');
const formInputPhone = document.querySelector('.form__input_grades-pages');
console.log(formInputPhone);

if (mediaMobile415.matches) {
	formButton.textContent = "Записаться на урок";
}
if (mediaMobile768.matches) {
	formButton.textContent = "Оставить заявку";
}
if (mediaMobile1000.matches) {
	formButton.textContent = "Записаться на урок";
	formInputPhone.placeholder = 'Телефон';
}