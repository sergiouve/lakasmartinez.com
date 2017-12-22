const header = {
    init: () => {
        let header = document.querySelector('.js-nav');
        let button = document.querySelector('.js-nav-button');

        button.addEventListener('click', () => {
            header.classList.toggle('open');
        });
    }
};

module.exports = header;
