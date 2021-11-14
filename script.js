let currentColor = 'black';
let canDraw = false;
let mouseY = 0;
let mouseX = 0;
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

//Events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClick);
});

screen.addEventListener('mousedown', mouseDownE);
screen.addEventListener('mousemove', mouseMoveE);
screen.addEventListener('mouseup', mouseUpE);
document.querySelector('.clear').addEventListener('click', cls);


//Functions
function colorClick (e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
    
}

function mouseDownE(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
        
}

function mouseMoveE(e) {
    if(canDraw){
        draw(e.pageX, e.pageY)    
    }
}

function mouseUpE() {
    canDraw = false;

}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    mouseX = pointX;
    mouseY = pointY;
}

function cls() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}