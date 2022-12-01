window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            tab.forEach(function (item, i) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            });
        }
    });
    //timer
    let deadline = '2020-04-10';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.querySelector(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }
            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }


            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }
    setClock('#timer', deadline);
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

    let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся...',
            failure: 'Что-то пошло не так'
        },
        formBottom = document.querySelector('#form'),
        form = document.querySelector('.main-form'),
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');



    form.addEventListener('submit', postData);
    formBottom.addEventListener('submit', postData);
    // e.preventDefault();
    // form.appendChild(statusMessage);
    // let formData = new FormData(form),
    //     formobj = {};
    // for (let[key, value] of formData.entries()){
    //     formobj[key] = value;
    // }
    // let json = JSON.stringify(formobj);
    // let xhr = new XMLHttpRequest();

    // xhr.open('POST', 'server.php');
    // xhr.addEventListener('loadstart', function(){
    //     statusMessage.textContent = message.loading; 

    // });
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.responseType = 'json';
    // xhr.send(json);
    // xhr.addEventListener('error', function(){
    //     statusMessage.textContent = message.failure; 
    // });
    // xhr.addEventListener('load', function(){
    //     statusMessage.textContent = message.success;
    // });
    // input.forEach(function(item){
    //     item.value = '';
    // });


    function postData(e) {
        e.preventDefault();
        this.appendChild(statusMessage);
        let formData = new FormData(this),
            formobj = {};
        for (let [key, value] of formData.entries()) {
            formobj[key] = value;
        }
        let json = JSON.stringify(formobj);
        let promise = new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();

                xhr.open('POST', 'server.php');

                xhr.setRequestHeader('Content-Type', 'application/json');

                xhr.send(json);
                // xhr.addEventListener('readystatechange', function(){
                //     if (xhr.readyState < 4){
                //         resolve(this);

                //     }else if(xhr.readyState===4){
                //         resolve(this);
                //     }else {
                //         reject();
                //     }

                // });
                xhr.addEventListener('load', () => {
                    if (xhr.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                // xhr.addEventListener('error', function(){

                // });
                // xhr.addEventListener('load', function(){

                // });

            })
            //  .then((a)=>{
            //     statusMessage.textContent = message.loading; 
            //     return a;
            //  })
            .then(() => {
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure;
            })
            .finally(() => {
                input.forEach(function (item) {
                    item.value = '';
                });
            });

    }

    //  slider 

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

    //caculator
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('#select'),
        totalValue = document.querySelector('#total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('input', function () {
        personSum = +this.value;
        total = (daysSum + personSum) * 4000;
        let a = total * place.options[place.selectedIndex].value;
        if (days.value == '' || persons.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = a;
        }
    });
    days.addEventListener('input', function () {
        daysSum = +this.value;
        total = (daysSum + personSum) * 4000;
        let a = total * place.options[place.selectedIndex].value;
        if (persons.value == '' || days.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = a;
        }
    });
    place.addEventListener('change', function () {
        if (persons.value == '' || days.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });
    //Class
    class Option {
        constructor(height, width, bg, fontSize, textAlign, margin, padding) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.margin = margin;
            this.padding = padding;
        }
        createElement(text) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color:${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}; 
        margin: ${this.margin}; padding: ${this.padding}`;
            div.textContent = text;
        }
    }
    let block = new Option(200, 200, "red", 18, 'center', '0 auto', '30px 0 0 0');
    block.createElement('Привет как дела ?');
});