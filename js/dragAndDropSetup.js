const setup = document.querySelector('.setup');
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