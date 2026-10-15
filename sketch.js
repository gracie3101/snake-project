<<<<<<< HEAD
const GRID_SIZE = 20
let headX = 0
let headY = 0
let foodX = 0
let foodY = 0
let xDirection = 1 ;
let yDirection = 0 ;
let numberOfCells 
let gameOver = false

function setup () {
    createCanvas (600,600) ;
    numberOfCells = width / GRID_SIZE ;
    let randomCell = random (numberOfCells) ;
    let randomCellFloor = floor(randomCell) ;
    foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2 ;
    randomCell = random (numberOfCells) ;
    randomCellFloor = floor(randomCell) ;
    foodY = randomCellFloor * GRID_SIZE + GRID_SIZE / 2 ;
    headX += GRID_SIZE;
    frameRate (4) ;
    
}

function keyPressed () {

   if (key === UP_ARROW) {
    xDirection = 0 ;
    yDirection = -1 ;
   }
   if (key === DOWN_ARROW) {
    xDirection = 0 ;
    yDirection = 1 ;
   }
    if (key === LEFT_ARROW) {
    xDirection = -1 ;
    yDirection = 0 ;
    }
    if (key === RIGHT_ARROW) {
    xDirection = 1 ;
    yDirection = 0 ;
 }
 if (!gameOver) {

 }
}

function draw () {
    background (0)
    square (headX, headY, 20) ;
    circle (foodX, foodY, 20) ;
    headX += GRID_SIZE * xDirection ;
    headY += GRID_SIZE * yDirection ;
=======
const GRID_SIZE = 20;

let headX = 0;
let headY = 260;
let xDirection = 1;
let yDirection = 0;
let foodX;
let foodY;

let gameOver = false;

function setup() {
    createCanvas(600, 600);
    frameRate(4);
    let numberOfCells = width / GRID_SIZE;
    let randomXCell = floor(random(numberOfCells));
    let randomYCell = floor(random(numberOfCells));
    foodX = randomXCell * GRID_SIZE + GRID_SIZE / 2;
    foodY = randomYCell * GRID_SIZE + GRID_SIZE / 2;
}

function draw() {
    if (!gameOver) {
        headX += GRID_SIZE * xDir;
        headY += GRID_SIZE * yDir;
        background(0);
        fill(255, 255, 0);
        circle(foodX, foodY, GRID_SIZE);
        fill(0, 255, 0);
        square(headX, headY, GRID_SIZE);
    }
    if (headX === 0 || headX === width - GRID_SIZE
        || headY === 0 || headY === height - GRID_SIZE) {
        gameOver = true;
    }
}

function keyPressed() {
    if (key === LEFT_ARROW) {
        xDirection = -1;
        yDirection = 0;
    }
    else if (key === RIGHT_ARROW) {
        xDir = 1;
        yDir = 0;
    }
    else if (key === UP_ARROW) {
        xDir = 0;
        yDir = -1;
    }
    else if (key === DOWN_ARROW) {
        xDir = 0;
        yDir = 1;
    }
>>>>>>> a04e8976b3814bca0d7c5473c685af878b8387fa
}