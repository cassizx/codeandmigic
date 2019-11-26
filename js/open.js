
'use strict';
( function () {
    

//открытие и закрытие окна

let ESC_KEYCODE = 27;
let ENTER_KEYCODE = 13;
let userDialog = document.querySelector('.setup');
let openSetung = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');
let setupOpenIcon = document.querySelector('.setup-open-icon');


function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();    
        closePopUp();
    }
}

function openPopUp() {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}


function closePopUp() {  
    userDialog.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}


openSetung.addEventListener('click',function (evt) {
    evt.preventDefault();
    openPopUp();

});

setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopUp();
});

setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        evt.preventDefault();    
        closePopUp();        
    }
  });


setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {   
        openPopUp();
        
    }
});

})();
