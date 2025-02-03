const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const modalBtn = document.getElementById('open-popup')
const closeBtn = document.querySelector('.welcome__btn-close');
const modal = document.querySelector('.welcome__popup')

    burgerBtn.onclick = () => {
            burgerBtn.classList.toggle('active');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
    }

    modalBtn.onclick = () => {
        const modalStyle = modal.style;
        modalStyle.display = 'block';
        modalStyle.zIndex = '9';
        closeBtn.onclick = function () {
            modalStyle.display = 'none';
            modalStyle.zIndex = '0';
        }
    }


