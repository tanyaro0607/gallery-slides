function slidesPlugin(activeSlide = 2) {
	const slides = document.querySelectorAll('.slide');

	slides[activeSlide].classList.add('active');

	for (const slide of slides) { //проходим по всем элементам slides и создаем переменные slide
		slide.addEventListener('click', () => { //при клике вызываем функцию
			clearActiveClasses();
			slide.classList.add('active');
		});
	}

	function clearActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
	}
}

slidesPlugin(0);