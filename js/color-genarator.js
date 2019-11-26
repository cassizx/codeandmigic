'use strict';
( function () {
   
 // Функция для генерации нового цвета
function getNewColorAll(colorArr) {
    for (let i = 0; i < colorArr.length; i++) {
        let number = Math.floor(Math.random() * colorArr.length);
        let newColor = colorArr[number];  
        return newColor;
    }
};

//
//генерация цвета глаз волшебника

let wizard_eyes = window.openUserDialog.querySelector('.wizard-eyes');
let wizardEyesInputValue = window.openUserDialog.querySelector("input[name='eyes-color']");
wizard_eyes.addEventListener('click', function () { 
    let newEyesColor = getNewColorAll(eyesColors);
    wizard_eyes.style.fill =  newEyesColor;
    wizardEyesInputValue.value =  newEyesColor;
    //console.log(getEyesColor(eyesColors));
});
let eyesColors = ['black' , 'red' , 'blue' , 'yellow' , 'green' ];

///

//генерация цвета мантии волшебника

let wizard_coat = window.openUserDialog.querySelector('.wizard-coat');
let wizardCoatInputValue = window.openUserDialog.querySelector("input[name='coat-color']");
wizard_coat.addEventListener('click', function () {
    let newCoatColor =  getNewColorAll(coatsColor);
    wizard_coat.style.fill = newCoatColor;
    wizardCoatInputValue.value = newCoatColor;
})
let coatsColor = ['rgb(101, 137, 164)' , 'rgb(241, 43, 107)' , 'rgb(146, 100, 161)' , 'rgb(56, 159, 117)' , 'rgb(215, 210, 55)' , 'rgb(0, 0, 0)' ];

//

//генерация цвета фаербола волшебника

let wizardFirebollColor = window.openUserDialog.querySelector('.setup-fireball-wrap');
let firebollColorValue = window.openUserDialog.querySelector("input[name='fireball-color']");
let ExistFirebollColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
wizardFirebollColor.addEventListener('click', function () {
    let newFirebolColor =  getNewColorAll(ExistFirebollColor);
    wizardFirebollColor.style.background = newFirebolColor;
    firebollColorValue.value = newFirebolColor;
});


//
let wizards = [];

let sucsessHandler = function (data) {
    wizards = data;
    window.render(wizards);
}


    let errorHandler = function (errorMessage) {
        let node = document.createElement('div');
        node.style = 'z-index:100; margin:0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0 ;
        node.style.rigth = 0;
        node.style.fontSize = '30px';
        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node)
    }

    let URL = 'https://js.dump.academy/code-and-magick/data';
   

//
})();
