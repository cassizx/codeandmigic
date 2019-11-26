'use strict';
(function () {
        let URL = 'https://js.dump.academy/code-and-magick/data';

        window.load = function (onSuccess, onError) {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                if (xhr.status === 200) {
                    onSuccess(xhr.response);
                } else {
                    onError(' Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
                }
               
            });
            xhr.addEventListener ('error', function () {
                onError('Произошла ошибка соединения');
            });
            xhr.addEventListener ('timeout', function () {
                onError('запрос не успел выпониться за: ' + xhr.timeout + ' мс');
            });
            xhr.timeout = 10000; //10s
            xhr.open('GET', URL);
            xhr.send();
        };  
})();







