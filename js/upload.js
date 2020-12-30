(function () {
    const URL = 'https://js.dump.academy/code-and-magick';
window.upload = function (data, onSuccess) {
   const xhr = new XMLHttpRequest();
   xhr.responseType = 'json';

   xhr.addEventListener('load',()=>{
       onSuccess(xhr.response);
    });

   xhr.open('POST', URL);
   xhr.send(data);
}
})();