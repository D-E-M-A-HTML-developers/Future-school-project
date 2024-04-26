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
	sliderLine.style.width = sliderWidth * sliderItems.length + "px";
	sliderItems.forEach((sliderItem) => (sliderItem.style.width = sliderWidth + "px"));
	// if (sliderWidth < 1000) {
	// 	sliderLine.style.width = sliderWidth * sliderItems.length + "px";
	// 	sliderItems.forEach((sliderItem) => (sliderItem.style.width = sliderWidth + "px"));
	// } if (sliderWidth < 1920) {
	// 	sliderWidth = sliderWidth * 0.667;
	// 	sliderLine.style.width = sliderWidth * sliderItems.length + "px";
	// 	sliderItems.forEach((sliderItem) => (sliderItem.style.width = sliderWidth + "px"));
	// } else {
	// 	sliderWidth = sliderWidth * 0.767;
	// 	sliderLine.style.width = sliderWidth * sliderItems.length + "px";
	// 	sliderItems.forEach((sliderItem) => (sliderItem.style.width = sliderWidth + "px"));
	// }

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

setInterval(() => {
	switchNextSlide()
}, 5000);


// ================== edits by egor
// const sliderItems = document.querySelectorAll('.slider__card')
// const sliderLine = document.querySelector('.slider__line')
// const sliderBtnPrev = document.querySelector('.slider__btn-prev')
// const sliderBtnNext = document.querySelector('.slider__btn-next')

// let currentSlide = 0
// let sliderWidth

// function initSlider() {
// 	sliderWidth = document.querySelector('.slider').offsetWidth
// 	sliderLine.style.width = sliderWidth * sliderItems.length + 'px'
// 	sliderItems.forEach(item => {
// 		item.style.width = sliderWidth + 'px'
// 	})
// 	showSlide(currentSlide)
// }

// function showSlide(index) {
// 	sliderLine.style.transform = `translateX(-${index * sliderWidth}px)`
// }

// function prevSlide() {
// 	if (currentSlide > 0) {
// 		currentSlide--
// 		showSlide(currentSlide)
// 	} else {
// 		currentSlide = sliderItems.length - 1
// 		showSlide(currentSlide)
// 	}
// }

// function nextSlide() {
// 	currentSlide++
// 	if (currentSlide >= sliderItems.length) {
// 		currentSlide = 0
// 	}
// 	showSlide(currentSlide)
// }

// sliderBtnPrev.addEventListener('click', prevSlide)
// sliderBtnNext.addEventListener('click', nextSlide)
// window.addEventListener('resize', initSlider)

// initSlider()



