function modal() {
    let descrBtn = document.querySelectorAll('.description-btn'),
        modal = document.querySelector('.overlay'),
        clouseBtn = document.querySelector('.popup-close'),
        more = document.querySelector('.more'),
        target;

    function showModal(e) {
        target = e.target
        modal.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    descrBtn.forEach(function (item) {
        item.addEventListener('click', showModal);
    });
    more.addEventListener('click', showModal);

    clouseBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        target.classList.remove('more-splash');
        document.body.style.overflow = '';

    });
}

module.exports = modal;