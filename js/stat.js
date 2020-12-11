'use strict'

window.renderStatistics = function (ctx, names, times){
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
    ctx.font = '16px PT Mono';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.strokeText('Ура, вы победили!', 230, 80);
    ctx.strokeText('Список результатов:', 225, 100);
}