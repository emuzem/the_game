'use strict';

(function () {
    window.load = function (onSuccess, onError) {
        const URL = 'https://js.dump.academy/code-and-magick/data'
        window.load = function (onSuccess, onError) {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET', URL);
            xhr.addEventListener('load', () => {
                onSuccess(xhr.response);
                console.log(xhr.response);
            });
            xhr.send();
        }
    }
    window.hello = 'hello';
})();