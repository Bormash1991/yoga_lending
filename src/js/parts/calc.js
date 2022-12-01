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