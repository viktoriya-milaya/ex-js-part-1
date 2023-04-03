

// ссылки галереи 
const galleryImges = document.querySelectorAll('.gallery-list__img');

//  модальное окно
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');


// кнопка закрытия модального окна
const modalBtnClose = document.getElementById('close');


const showModal = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
    modal.style.display = `flex`;
    modal.style.visibility = `visible`;
    modal.style.opacity = 1;

};

const showImgInModal = () => {

    galleryImges.forEach((el) => el.addEventListener('click', (e) => {

        modalImg.setAttribute('src', e.target?.src);
        modalTitle.innerText = e.target?.alt;
     
        showModal();
    }));
};


const closeModal = () => {
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = '0';

    modal.style.opacity = 0;

    setTimeout(() => {
        modal.style.visibility = `hidden`;
    }, 300)
};


modalBtnClose.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);


export default showImgInModal;

