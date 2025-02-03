const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const modalBtn = document.getElementById('open-popup')
const closeBtn = document.querySelector('.welcome__btn-close');
const modal = document.querySelector('.welcome__popup')
const moreBtn = document.querySelector('.project__btn');
const cardsEl = document.querySelector('.project__cards');

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

     moreBtn.onclick = () => {
        const newCard = document.createElement('div');
        newCard.classList.add('project__card');

        newCard.innerHTML = `
        <div class="project__info">
                        <h3 class="project__card-title">
                        Project Name
                    </h3>
                        <p class="project__card-subtitle">
                            I created this personal project in order to show how to create an interface in Figma using a
                            portfolio as an example.
                        </p>
                        <button class="project__card-btn">View Project</button>
                    </div>
                    <img class="project__img" src="./public/io.jpeg">
        `

        cardsEl.appendChild(newCard);
    }
