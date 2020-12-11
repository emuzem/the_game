const setup = document.querySelector('.setup');
setup.classList.remove('hidden');
const charactersBlock = document.querySelector('.setup-similar');
charactersBlock.classList.remove('hidden');
const characterTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
const listSimilarCharacters = document.querySelector('.setup-similar-list');

//массивы с данными
let firstNamesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let secondNamesList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let eyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
let coatColorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let character = [];

//заполнение персонажей данными

cloneSimilarWizard = function (character) {
    let clone = characterTemplate.cloneNode(true);
    clone.querySelector('.setup-similar-label').textContent = character.name;
    clone.querySelector('.wizard-coat').style.fill = character.coatColor;
    clone.querySelector('.wizard-eyes').style.fill = character.eyesColor;
    return clone;
}

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

