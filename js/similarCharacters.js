(function () {
const characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const listSimilarCharacters = document.querySelector('.setup-similar-list');
const setupWizard = document.querySelector('.setup-wizard');

const fireballColorList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const firstNamesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const secondNamesList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const eyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
const coatColorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let character = [];

const cloneSimilarWizard = function (character) {
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
changeWizardColors(setupWizard);})();