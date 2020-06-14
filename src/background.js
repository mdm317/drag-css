const body = document.querySelector('body');

function getRandom(){
    const number = Math.floor(Math.random()*5);
    return number;
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}
function init(){
    const imageNumber = getRandom();
    paintImage(imageNumber);
}

init();