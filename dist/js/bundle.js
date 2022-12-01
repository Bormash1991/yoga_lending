/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator() {
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
}

module.exports = calculator;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formSend() {
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
}

module.exports = formSend;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = '2020-04-21';

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
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");
    calc();
    form();
    modal();
    slider();
    tabs();
    timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map