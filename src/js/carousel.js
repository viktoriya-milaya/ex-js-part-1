
// элементы карусели (const)
const carouselBar = document.querySelector('.carousel-list');
const carouselImges = document.querySelectorAll('.carousel-list__img');

const carouselBtnNext = document.getElementById('carousel__btn_next');
const carouselBtnPrev = document.getElementById('carousel__btn_prev');

// параметры изображений карусели

const GAP = 20;
const CAROUSEL_IMG_WIDTH = 160;

const CAROUSEL_3_IMG_WIDTH = 3 * CAROUSEL_IMG_WIDTH + 2 * GAP;
const CAROUSEL_5_IMG_WIDTH = 5 * CAROUSEL_IMG_WIDTH + 4 * GAP;


// направление перемещения по х (translateX)
const MAX_WIDTH_TRANSLATE = -((carouselImges.length - 1) * (CAROUSEL_IMG_WIDTH + GAP));

const NEXT = -1;
const PREV = 1;

// начальная точка
let position = 0;

// вьюпорт карусели
let carouselWidth;

// кол-во видимых изображений в карусели
let carouselCount;


const getCarouselWidth = () => {
    carouselWidth = document.querySelector('.carousel-wrap').offsetWidth;

    return carouselWidth;
};

const getCarouselCount = () => {
    carouselCount = (carouselWidth < CAROUSEL_3_IMG_WIDTH) ? 1 :
        (carouselWidth >= CAROUSEL_3_IMG_WIDTH && carouselWidth < CAROUSEL_5_IMG_WIDTH) ? 3 : 5;

    return carouselCount;
};


// перемещения карусели

const scrollCarousel = (simbol) => {

    getCarouselWidth();
    getCarouselCount();

    position += ((CAROUSEL_IMG_WIDTH + GAP) * carouselCount * simbol);

    if (position < 0 && position >= MAX_WIDTH_TRANSLATE) {
        carouselBar.setAttribute(`data-position`, `${position}`);
        carouselBar.style.transform = `translateX(${position}px)`;
    } else {
        carouselBar.setAttribute(`data-position`, `0`);
        carouselBar.style.transform = `translateX(${0}px)`
    }
};

const showNextImges = () => {

    scrollCarousel(NEXT);

    carouselBtnPrev.disabled = false;

    position = Number(carouselBar.dataset.position);

    if (position === MAX_WIDTH_TRANSLATE ||
        (carouselCount === 5 && position <= (MAX_WIDTH_TRANSLATE + 4 * (CAROUSEL_IMG_WIDTH + GAP))) ||
        (carouselCount === 3 && position <= (MAX_WIDTH_TRANSLATE + 2 * (CAROUSEL_IMG_WIDTH + GAP)))) {

        carouselBtnNext.disabled = true;
    }

};

const showPrevImges = () => {

    scrollCarousel(PREV);

    carouselBtnNext.disabled = false;

    position = Number(carouselBar.dataset.position);

    if (position === 0) {
        carouselBtnPrev.disabled = true;
    };

};


// кнопки переключения карусели

const showCarousel = () => {
    carouselBtnNext.addEventListener('click', showNextImges);
    carouselBtnPrev.addEventListener('click', showPrevImges);
};


export default showCarousel;