const sliderItems = document.querySelectorAll(".slider__card");
const sliderLine = document.querySelector(".slider__line");
const sliderBtnPrev = document.querySelector(".slider__btn-prev");
const sliderBtnNext = document.querySelector(".slider__btn-next");

let sliderCount = 0,
	sliderWidth;

window.addEventListener("resize", showSliderWidth);
sliderBtnNext.addEventListener("click", switchNextSlide);
sliderBtnPrev.addEventListener("click", switchPrevSlide);

function showSliderWidth() {
	sliderWidth = document.querySelector(".slider").offsetWidth;
	if (sliderWidth < 1000) {
		sliderLine.style.width = sliderWidth * sliderItems.length + "px";
		sliderItems.forEach((sliderItem) => (sliderItem.style.width = sliderWidth + "px"));
	} else {
		sliderWidth = sliderWidth * 0.667;// на 1920px = 0.767 
		sliderLine.style.width = sliderWidth * sliderItems.length + "px";
		sliderItems.forEach((sliderItem) => (sliderItem.style.width = sliderWidth + "px"));
	}

	createRollSlider();
}
showSliderWidth();
function switchNextSlide() {
	sliderCount++;
	if (sliderCount >= sliderItems.length) sliderCount = 0;
	createRollSlider();
}

function switchPrevSlide() {
	sliderCount--;
	if (sliderCount < 0) sliderCount = sliderItems.length - 1;
	createRollSlider();
}

function createRollSlider() {
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// setInterval(() => {
// 	switchNextSlide()
// }, 5000);
