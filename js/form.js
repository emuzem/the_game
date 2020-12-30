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
        fetch('http://localhost:3000/requests', {
            method: 'POST',
            headers: {
                'multipart': 'form-data',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(data => data.json()
        ).then(json => console.log(json)
        ).then(()=>setup.classList.add('hidden')
        ).catch(() => console.log('failure'));
    });
}