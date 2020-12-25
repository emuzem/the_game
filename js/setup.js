const setup = document.querySelector('.setup');
const charactersBlock = document.querySelector('.setup-similar');
charactersBlock.classList.remove('hidden');
const characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const listSimilarCharacters = document.querySelector('.setup-similar-list');
const setupOpenElem = document.querySelector('.setup-open');
const setupHideElem = document.querySelector('.setup-close');
const usernameInput = document.querySelector('.setup-user-name');
const setupWizard = document.querySelector('.setup-wizard');

//массивы с данными
let fireballColorList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
let firstNamesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let secondNamesList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let eyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
let coatColorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let character = [];

//показ и скрытие блока настроек
function showBlock (){
    setup.classList.remove('hidden');
    document.addEventListener('keydown', hideBlockByEscape);
    setupHideElem.addEventListener('focus', () => {
        setupHideElem.addEventListener('keydown', hideBlockByEnter);
    });
}
function hideBlock (){
    setup.classList.add('hidden');
    document.removeEventListener('keydown', hideBlockByEscape);
    setup.style.left = defaultStatus;
    setup.style.top = defaultStatus;
}
function hideBlockByEnter(ev){
        if (ev.which === 13) {
            hideBlock();
        }
}
function hideBlockByEscape(ev){
    if (ev.which === 27){
        hideBlock();
    }
}
setupOpenElem.addEventListener('click', showBlock);
setupHideElem.addEventListener('click', hideBlock);
setupOpenElem.addEventListener('keydown', (ev) => {
        if (ev.code === 'Enter'){
            showBlock();
        }
    });
usernameInput.addEventListener('focus', () => {
    document.removeEventListener('keydown', hideBlockByEscape);
})
usernameInput.addEventListener('blur', ()=> {
    document.addEventListener('keydown', hideBlockByEscape);
})


//заполнение персонажей данными
cloneSimilarWizard = function (character) {
    let clone = characterTemplate.cloneNode(true);
    clone.querySelector('.setup-similar-label').textContent = character.name;
    clone.querySelector('.wizard-coat').style.fill = character.coatColor;
    clone.querySelector('.wizard-eyes').style.fill = character.eyesColor;
    return clone;
}
    //отрисовка элементов по шаблону
let docElement = document.createDocumentFragment();

for(let i = 0; i<4; i++){
    character[i] = {
        name: firstNamesList[getRandomIntInclusive(0, 6)] + ' ' + secondNamesList[getRandomIntInclusive(0, 7)],
        coatColor: coatColorList[getRandomIntInclusive(0, 5)],
        eyesColor: eyesColorList[getRandomIntInclusive(0, 4)]
    }
   docElement.appendChild(cloneSimilarWizard(character[i]));
}
listSimilarCharacters.appendChild(docElement);
//changing colors on setup window
function changeWizardColors(wizard){
    let coat =  wizard.querySelector('.wizard-coat');
    coat.addEventListener('click', ()=> {
        coat.style.fill = coatColorList[getRandomIntInclusive(0, 5)];
    });
    let eyes = wizard.querySelector('.wizard-eyes');
    eyes.addEventListener('click', ()=> {
        eyes.style.fill = eyesColorList[getRandomIntInclusive(0, 4)];
    });
    let fireball = document.querySelector('.setup-fireball-wrap');
    fireball.addEventListener('click', () => {
        fireball.style.background = fireballColorList[getRandomIntInclusive(0, 4)];
    });
}
changeWizardColors(setupWizard);

//работа с формой, пост на сервер
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
                'multipart' : 'form-data',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(data => data.json()
        ).then(json => console.log(json)
        ).catch(() => console.log('failure'));
    });
}

const draggableIcon = setup.querySelector('.upload');

draggableIcon.addEventListener('mousedown', (evDown)=> {
    evDown.preventDefault();
    console.log('hello');
    let startCoordinates = {
        x: evDown.clientX,
        y: evDown.clientY
    };
    let drag = false;
    const onMouseMove = function (evMove) {
        drag = true;
        evMove.preventDefault();
        const shift = {
            x: startCoordinates.x - evMove.clientX,
            y: startCoordinates.y - evMove.clientY
        };
        startCoordinates = {
            x: evMove.clientX,
            y: evMove.clientY
        };
        setup.style.left = (setup.offsetLeft - shift.x) + 'px';
        setup.style.top = (setup.offsetTop - shift.y) + 'px';
    };

    const onMouseUp = (evUp) => {
        evUp.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        if(drag){
            const onClickPreventDefault = (evt) => {
                evt.preventDefault();
                draggableIcon.removeEventListener('click', onClickPreventDefault);
            };
            draggableIcon.addEventListener('click', onClickPreventDefault);
        }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

