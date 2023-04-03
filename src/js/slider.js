// элементы слайдера (const)

const sliderBar = document.querySelector('.slider-list');
const sliderImges = document.querySelectorAll('.slider-list__img');

const sliderBtnNext = document.getElementById('slider__btn_next');
const sliderBtnPrev = document.getElementById('slider__btn_prev');

const sliderDots = document.querySelectorAll('.dot');


// счетчик слайдеров и видимвя часть слайда (let)

let sliderCount = 0;
let sliderWidth;




const showSlider = () => {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderBar.style.width = sliderWidth * sliderImges.length + 'px';
    sliderImges.forEach(item => item.style.width = sliderWidth + 'px');

    scrollSlider();
};



// адаптив под размер окна

window.addEventListener('resize', showSlider);

const showNextSlide = () => {
    sliderCount++;
    if (sliderCount >= sliderImges.length) sliderCount = 0;

    scrollSlider();
    activeSlide(sliderCount);
};

const showPrevSlide = () => {
    sliderCount--;
    if (sliderCount < 0) sliderCount = (sliderImges.length - 1);

    scrollSlider();
    activeSlide(sliderCount);
};

// перемещения слайдов

const scrollSlider = () => {
    sliderBar.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

const activeSlide = index => {
    sliderDots.forEach(item => item.classList.remove('dot_active'));
    sliderDots[index].classList.add('dot_active');
};

setInterval(() => {
    showNextSlide()
}, 5000);


// кнопки переключениz слайдов

sliderBtnNext.addEventListener('click', showNextSlide);
sliderBtnPrev.addEventListener('click', showPrevSlide);


sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        scrollSlider();
        activeSlide(sliderCount);
    })
});

export default showSlider; 