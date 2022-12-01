function sliderShow() {
    let img = document.querySelectorAll('.slider-item'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot'),
        slideIndex = 1;

    function showSlids(n) {
        if (n > img.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = img.length;
        }
        img.forEach((item) => {
            item.style.display = 'none';
        });
        dots.forEach((item) => {
            item.classList.remove('dot-active');
        });
        img[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    showSlids(1);

    function plusSlide(n) {
        showSlids(slideIndex += n);
    }

    function currenSlide(n) {
        showSlids(slideIndex = n);
    }
    prev.addEventListener('click', function () {
        plusSlide(-1);
    });
    next.addEventListener('click', function () {
        plusSlide(1);
    });
    dotsWrap.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('dot')) {
            dots.forEach((item, i) => {
                if (target == item) {
                    currenSlide(i + 1);
                }
            });
        }
        // for (let i = 0; i < dots.length+1; i++){
        //     if (event.target.classList.contains('dot') && event.target == dots[i-1]){
        //         currenSlide(i);
        //     }
        // }
    });
}

module.exports = sliderShow;