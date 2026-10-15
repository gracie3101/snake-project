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
    frameRate (5) ;
    foodX = newFoodCoordinate () ;
      foodY = newFoodCoordinate () ;
}

function draw () {
    background (0)
    square (headX, headY, GRID_SIZE) ;
    circle (foodX, foodY, GRID_SIZE / 2) ;
    if(gameOver) {
      headX += GRID_SIZE * xDirection;
      headY += GRID_SIZE * yDirection;
    textSize(50)
    fill(255,0,0)
    textAlign(CENTER,CENTER)
    text("GAME_OVER", width / 2, height / 2)
    }
}

function newFoodCoordinate () {
      let numberOfCells = (width - GRID_SIZE * 2) / GRID_SIZE;
    let gridCell = floor(random(numberOfCells));
    return gridCell * GRID_SIZE + GRID_SIZE / 2;
}

function isGameOver () {
   return headX === 0 || headX === width - GRID_SIZE || headyY === 0 || headY === height - GRID_SIZE ;
}

function keyPressed () {
   if (key === LEFT_ARROW) {
    xDirection = -1 ;
    yDirection = 0 ;
    }
    else if (key === RIGHT_ARROW) {
    xDirection = 1 ;
    yDirection = 0 ;
   }
   else if (key === UP_ARROW) {
    xDirection = 0 ;
    yDirection = -1 ;
   }
   elseif (key === DOWN_ARROW) {
    xDirection = 0 ;
    yDirection = 1 ;
   }
   
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


}

