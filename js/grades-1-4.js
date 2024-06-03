let mediaMobile320 = window.matchMedia("(min-width: 320px)");
let mediaMobile415 = window.matchMedia("(min-width: 415px)");
let mediaMobile480 = window.matchMedia("(min-width: 480px)");
let mediaMobile768 = window.matchMedia("(min-width: 768px)");
let mediaDesctop1000 = window.matchMedia("(min-width: 1000px)");
let mediaDesctop1920 = window.matchMedia("(min-width: 1920px)");
const formButton = document.querySelector('.form__button_change-content');


if (mediaMobile415.matches) {
	formButton.textContent = "Записаться на урок";
}
if (mediaMobile768.matches) {
	formButton.textContent = "Оставить заявку";
}
if (mediaDesctop1000.matches) {
	formButton.textContent = "Записаться на урок";
}

document.addEventListener('DOMContentLoaded', function (e) {
	if (mediaDesctop1000.matches) {
		document.getElementById('grades-pages-form-imput-phone').placeholder = 'Телефон';
	}
});

// ===how-run-lesson block 578===
const posterWrapper = document.querySelector('.how-run-lesson__poster-video-cover');
const youTubeIframe = document.getElementById('how-run-lesson-iframe');

let widthSmall = 280, /* 320px */
	heightSmall = 165, /* 320px */
	borderRSmall = "border-radius: 19px;", /* 320px */
	widthIo = 375, /* 415px */
	heightIo = 221, /* 415px */
	borderRIo = "border-radius: 25px;", /* 415px */
	widthMobile = 440, /* 480px */
	heightMobile = 248, /* 480px */
	borderMobile = "border-radius: 23px;", /* 480px */
	widthTablet = 406, /* 768px */
	heightTablet = 228, /* 768px */
	borderTablet = "border-radius: 25px;", /* 768px */
	widthSmallDesctop = 578, /* 1000px */
	heightSmallDesctop = 325, /* 1000px */
	borderSmallDesctop = "border-radius: 33px;", /* 1000px */
	widthDesctop = 732, /* 1920px */
	heightDesctop = 411, /* 1920px */
	borderDesctop = "border-radius: 25px;"; /* 1920px */

posterWrapper.addEventListener('click', function (e) {
	e.target.classList.add('hidden');
});

if (mediaMobile320.matches) {
	youTubeIframe.setAttribute('width', widthSmall);
	youTubeIframe.setAttribute('height', heightSmall);
	youTubeIframe.setAttribute('style', borderRSmall);
}

if (mediaMobile415.matches) {
	youTubeIframe.setAttribute('width', widthIo);
	youTubeIframe.setAttribute('height', heightIo);
	youTubeIframe.setAttribute('style', borderRIo);

}
if (mediaMobile480.matches) {
	youTubeIframe.setAttribute('width', widthMobile);
	youTubeIframe.setAttribute('height', heightMobile);
	youTubeIframe.setAttribute('style', borderMobile);
}
if (mediaMobile768.matches) {
	youTubeIframe.setAttribute('width', widthTablet);
	youTubeIframe.setAttribute('height', heightTablet);
	youTubeIframe.setAttribute('style', borderTablet);
}
if (mediaDesctop1000.matches) {
	youTubeIframe.setAttribute('width', widthSmallDesctop);
	youTubeIframe.setAttribute('height', heightSmallDesctop);
	youTubeIframe.setAttribute('style', borderSmallDesctop);
}
if (mediaDesctop1920.matches) {
	youTubeIframe.setAttribute('width', widthDesctop);
	youTubeIframe.setAttribute('height', heightDesctop);
	youTubeIframe.setAttribute('style', borderDesctop);
}
// ======