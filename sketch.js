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

function draw () {
    background (0)
    square (headX, headY, 20) ;
    circle (foodX, foodY, 20) ;
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
    headX += GRID_SIZE * xDirection ;
    headY += GRID_SIZE * yDirection ;
 }
 if (
    headX < 0||
    headY < 0 ||
    headX >= width ||
    headY >=height
 ){
    gameOver = true
 }

if(gameOver) {
    textSize(50)
    fill(255,0,0)
    textAlign(CENTER,CENTER)
    text("GAME_OVER", width / 2, height / 2)
}
}

