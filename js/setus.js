'use strict';
( function () {
    window.openUserDialog = document.querySelector('.setup');
    let similarListElement = document.querySelector('.setup-similar-list');
 
window.successHendler = (function (wizards) {
    let fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 4 ; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    openUserDialog.querySelector('.setup-similar').classList.remove('hidden');  
   
});

window.errorHandler = function (errorMessage) {
    let node = document.createElement('div');
    node.style = 'z-index:100; margin:0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0 ;
    node.style.rigth = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node)
}

let form = openUserDialog.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function (evt) {
        window.upload(new FormData(form), function (response){
            openUserDialog.classList.add('hidden');
        });   
        evt.preventDefault(); 
    });
window.load(successHendler, window.errorHandler);





})();




'use strict';
( function () {

//проверка формы на валидность
let openUserDialog = document.querySelector('.setup'); //Возможны ошибки

let userNameInput = openUserDialog.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
   if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
   } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');      
   } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязтельное поле');
   } else {
    userNameInput.setCustomValidity('');
}
});



})();


