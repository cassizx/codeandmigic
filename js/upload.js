'use strict';
(function () {
    let URL = 'https://js.dump.academy/code-and-magick';

    window.upload = function (data, onSuccess) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            onSuccess(xhr.responseType);
        });

        xhr.open('POST', URL);
        xhr.send(data);
    };
})();