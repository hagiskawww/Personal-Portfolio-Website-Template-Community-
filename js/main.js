const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');

    burgerBtn.onclick = () => {
            burgerBtn.classList.toggle('active');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
    }


