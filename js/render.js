'use strict';
( function () {

    let similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

    window.renderWizard = function (wizard) {  
        window.wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;    
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardElement; 
    }
    

})();