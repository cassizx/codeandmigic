////dialog
'use strict';
(function () {
    
    let userDialog = document.querySelector('.setup');

    let dialogHandler =  userDialog.querySelector('.upload');
    
    
    dialogHandler.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        

        let startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        

        console.log(evt);
        let  dragget = false;
    
        let onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
    
            dragget = true;
            
    
            let shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };
    
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };
            
            userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
            userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';

           
        };
    
        let onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);   
    
            if (dragget) {    
                let onClickPreventDeault = function (evt) {
                    evt.preventDefault();
                    dialogHandler.removeEventListener('click', onClickPreventDeault); 
                                       
                };
            dialogHandler.addEventListener('click', onClickPreventDeault);
           
            }
        };
    
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    
    });
    

})();