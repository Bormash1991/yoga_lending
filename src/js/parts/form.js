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