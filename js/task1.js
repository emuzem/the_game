var fireballSize = 22;
var getFireballSpeed = function(left) {
    return left == true ? 5 : 2;
}
var wizardWidth = 70;
var wizardHeight = 1.337*wizardWidth;
var getWizardHeight = function (wizardWidth){
    return 1.337*wizardWidth;
}

function getWizardX (width){
    return (width - wizardWidth)/2;
}

function getWizardY(height){
    return ((height - wizardHeight)*2)/3;
}