const adressFirst = document.querySelector('.adress1'),
      adressSecond = document.querySelector('.adress2'),
      pageCounter = document.querySelectorAll('.header-pagecounter-tab'),
      numberPage = document.querySelector('.header-pagecounter-numberpage-counter');




// Добавляем функцию на клик адрессам      
adressFirst.addEventListener('click', adressOne);
adressSecond.addEventListener('click', adressTwo);

//Переключение страниц в хеаде
    for ( let i = 0; i < pageCounter.length; i++){
        pageCounter[i].addEventListener('click', function page() {

            const prevActive = document.querySelector('.pagecounter-active'),
                prevActiveNear = document.querySelectorAll('.pagecounter-nearactive'),
                prevActiveNearLonger = document.querySelectorAll('.pagecounter-nearactivelonger');

            //Удаляем все прошлые active
            prevActive.classList.remove('pagecounter-active');

            // Удаляем все прошлые near-active
            for (i = 0; i < prevActiveNear.length; i++) {
                prevActiveNear[i].classList.remove('pagecounter-nearactive');
            }

            // Удаляем все прошлые near-active-longer
            for (i = 0; i < prevActiveNearLonger.length; i++) {
                prevActiveNearLonger[i].classList.remove('pagecounter-nearactivelonger');
            }

            //Добавляем active на нажатую кнопку
            this.classList.add('pagecounter-active');

            // исключаем ошибку на первой кнопке
            if (this.previousElementSibling.tagName == 'BUTTON') {
                this.previousElementSibling.classList.add('pagecounter-nearactive');
            }

            // исключаем ошибку на последней кнопке
            if (this.nextElementSibling !== null && this.nextElementSibling.tagName == 'BUTTON') {
                this.nextElementSibling.classList.add('pagecounter-nearactive');
            }

            const nextLonger = this.nextElementSibling,
                prevLonger = this.previousElementSibling;

            // исключаем ошибку на near-active-longer
            if (nextLonger !== null && nextLonger.nextElementSibling !== null && nextLonger.nextElementSibling.tagName == 'BUTTON') {
                nextLonger.nextElementSibling.classList.add('pagecounter-nearactivelonger');
            }
            // исключаем ошибку на near-active-longer
            if (prevLonger.previousElementSibling !== null && prevLonger.previousElementSibling.tagName == 'BUTTON') {
                prevLonger.previousElementSibling.classList.add('pagecounter-nearactivelonger');
            }
            numberPage.textContent = this.id;
        }, true);
    }

    
    

// Функции для адрессов
function adressOne() {
    if(adressFirst.classList.contains('activeadress') !== true){
        adressFirst.classList.add('activeadress');
        adressSecond.classList.remove('activeadress');
    }
}

function adressTwo() {
    if (adressSecond.classList.contains('activeadress') !== true) {
        adressSecond.classList.add('activeadress');
        adressFirst.classList.remove('activeadress');
    }
}




