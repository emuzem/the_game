'use strict'

window.renderStatistics = function (ctx, names, times) {
    //the shadow
    ctx.beginPath();
    ctx.moveTo(260, 70);
    ctx.quadraticCurveTo(150, 80, 190, 140);
    ctx.quadraticCurveTo(110, 170, 190, 210);
    ctx.bezierCurveTo(160, 235, 240, 290, 290, 240);
    ctx.quadraticCurveTo(360, 290, 410, 244);
    ctx.quadraticCurveTo(510, 240, 460, 180);
    ctx.quadraticCurveTo(530, 140, 440, 100);
    ctx.quadraticCurveTo(410, 50, 350, 70);
    ctx.quadraticCurveTo(310, 20, 260, 70);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fill();

    //the white figure
    ctx.beginPath();
    ctx.moveTo(250, 60);
    ctx.quadraticCurveTo(140, 70, 180, 130);
    ctx.quadraticCurveTo(100, 160, 180, 200);
    ctx.bezierCurveTo(150, 225, 230, 280, 280, 230);
    ctx.quadraticCurveTo(350, 280, 400, 234);
    ctx.quadraticCurveTo(500, 230, 450, 170);
    ctx.quadraticCurveTo(520, 130, 430, 90);
    ctx.quadraticCurveTo(400, 40, 340, 60);
    ctx.quadraticCurveTo(300, 10, 250, 60);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();

    //text
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.strokeText('Ура, вы победили!', 230, 80);
    ctx.strokeText('Список результатов:', 225, 100);

    //statistics
    var MAX_COLUMN_HEIGHT = 65;
    var theBiggestColumn = times[0];
    //положение первой точки, которое будет увеличиваться
    var paramX = 210;
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