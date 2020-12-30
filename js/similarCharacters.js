
const characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const listSimilarCharacters = document.querySelector('.setup-similar-list');
const setupWizard = document.querySelector('.setup-wizard');
window.setup = document.querySelector('.setup');

const fireballColorList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const firstNamesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const secondNamesList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const eyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
const coatColorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

const cloneSimilarWizard = function (name, coat, eyes) {
    let clone = characterTemplate.cloneNode(true);
    clone.querySelector('.setup-similar-label').textContent = name;
    clone.querySelector('.wizard-coat').style.fill = coat;
    clone.querySelector('.wizard-eyes').style.fill = eyes;
    return clone;
}

    const showSimilarWizards = (name, coat, eyes) => {
        let docElement = document.createDocumentFragment();

            docElement.appendChild(cloneSimilarWizard(name, coat, eyes));
        listSimilarCharacters.appendChild(docElement);
    }
         setup.querySelector('.setup-similar').classList.remove('hidden');


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

const getResources = async (url) => {
    const result = await fetch(url);

    if(!result.ok){
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
}

getResources('http://localhost:3000/wizards')
    .then(data => {
        const newData = data.splice(0, 4);
        newData.forEach(el => {
            showSimilarWizards(el.name, el.colorCoat, el.colorEyes)
        });
    });
