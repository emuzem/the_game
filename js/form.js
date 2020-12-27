const form = document.querySelector('.setup-wizard-form');

postData(form);

function postData (form) {
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(form);

        const obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        fetch('https://js.dump.academy/code-and-magick', {
            method: 'POST',
            headers: {
                'multipart': 'form-data',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(data => data.json()
        ).then(json => console.log(json)
        ).catch(() => console.log('failure'));
    });
}