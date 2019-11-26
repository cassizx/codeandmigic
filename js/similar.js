'use strict';
( function () {
let wizards = [];

window.sucsessHandler = function (data) {
    wizards = data;
    window.render(wizards);
};

    let URLs = 'https://js.dump.academy/code-and-magick/data';
   // window.load(URLs, successHendler, errorHandler);

})();