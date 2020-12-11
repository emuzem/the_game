'use strict'

window.renderStatistics = function (ctx, names, times) {
    //the shadow
    ctx.beginPath();
    ctx.moveTo(300, 70);
    ctx.quadraticCurveTo(190, 80, 230, 140);
    ctx.quadraticCurveTo(150, 170, 230, 210);
    ctx.bezierCurveTo(200, 235, 280, 290, 330, 240);
    ctx.quadraticCurveTo(400, 290, 450, 244);
    ctx.quadraticCurveTo(550, 240, 500, 180);
    ctx.quadraticCurveTo(570, 140, 480, 100);
    ctx.quadraticCurveTo(450, 50, 390, 70);
    ctx.quadraticCurveTo(350, 20, 300, 70);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fill();

    //the white figure
    ctx.beginPath();
    ctx.moveTo(290, 60);
    ctx.quadraticCurveTo(180, 70, 220, 130);
    ctx.quadraticCurveTo(140, 160, 220, 200);
    ctx.bezierCurveTo(190, 225, 270, 280, 320, 230);
    ctx.quadraticCurveTo(390, 280, 440, 234);
    ctx.quadraticCurveTo(540, 230, 490, 170);
    ctx.quadraticCurveTo(560, 130, 470, 90);
    ctx.quadraticCurveTo(440, 40, 380, 60);
    ctx.quadraticCurveTo(340, 10, 290, 60);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();

    //text
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.strokeText('Ура, вы победили!', 270, 80);
    ctx.strokeText('Список результатов:', 265, 100);

    //statistics
    var MAX_COLUMN_HEIGHT = 65;
    var theBiggestColumn = times[0];
    //положение первой точки, которое будет увеличиваться
    var paramX = 250;
    //finding the biggest column
    console.log(times);
    for(let i = 0; i < 4; i++){
        if (times[i] > theBiggestColumn){
            theBiggestColumn = times[i];
            console.log(theBiggestColumn);
        }
    }

    for(let i = 0; i < 4; i++){
        //initializing colors of another columns
        var bluerand = getRandomIntInclusive(120, 250);
        var blue = `rgba(0, 0, ${bluerand}, 0)`;
        ctx.fillStyle = `rgba(0, 0, ${getRandomIntInclusive(150, 250)}, 1)`;
        if (names[i] == "Вы") {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }
        //calculating the sizes
        var percent = (times[i]*100)/theBiggestColumn;
        console.log(percent);
        var height = -(MAX_COLUMN_HEIGHT*percent)/100;
        console.log(height);
        //drawing columns
        ctx.font = '16px PT Mono';
        ctx.fillRect(paramX, (120 + MAX_COLUMN_HEIGHT), 40, height);
        ctx.strokeText(names[i], paramX, (120 + MAX_COLUMN_HEIGHT + 20));
        //adding the numbers of result above the columns
        ctx.font= "12px PT Mono";
        ctx.strokeText(`${Math.floor(times[i])}`, (paramX+5), (115 + MAX_COLUMN_HEIGHT + height));
        //сдвиг по оси х
        paramX += 60;
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}