const GRID_SIZE = 20

let snakeX = [20];
let snakeY = [260];
let xDirection = 1 ;
let yDirection = 0 ;
let foodX = 0
let foodY = 0
let isSnakeOverFood = () => snakeX === foodX && snakeY === foodY

/**
 * Sets up the canvas and initial game state
 * @param {number} width - The width of the canvas
 * @param {number} height - The height of the canvas
 * @param {number} GRID_SIZE - The size of each grid cell
 * @param {number} headX - The initial x-coordinate of the snake's head
 * @param {number} headY - The initial y-coordinate of the snake's head
 * @param {number} xDirection - The initial x-direction of the snake's movement
 * @param {number} yDirection - The initial y-direction of the snake's movement
 * @param {number} foodX - The initial x-coordinate of the food
 * @param {number} foodY - The initial y-coordinate of the food
 * @param {boolean} gameOver - A flag indicating whether the game is over
 * @param {function} isSnakeOverFood - A function that checks if the snake is over the food
 * @param {function} newFoodCoordinate - A function that generates a new random coordinate for the food
*/

function setup () {
    createCanvas (600,600) ;
    numberOfCells = width / GRID_SIZE ;
    let randomCell = random (numberOfCells) ;
    let randomCellFloor = floor(randomCell) ;
    foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2 ;
    randomCell = random (numberOfCells) ;
    randomCellFloor = floor(randomCell) ;
    foodY = randomCellFloor * GRID_SIZE + GRID_SIZE / 2 ;
    snakeX[0] += GRID_SIZE;
    frameRate (5) ;
    foodX = newFoodCoordinate () ;
      foodY = newFoodCoordinate () ;

}

/**
 * Draws the game elements on the canvas
 * @param {number} headX - The x-coordinate of the snake's head
 * @param {number} headY - The y-coordinate of the snake's head
 * @param {number} foodX - The x-coordinate of the food
 * @param {number} foodY - The y-coordinate of the food
 * @param {boolean} gameOver - A flag indicating whether the game is over
 * @param {function} isSnakeOverFood - A function that checks if the snake is over the food
 * @param {function} newFoodCoordinate - A function that generates a new random coordinate for the food
 * @param {function} keyPressed - A function that handles key presses for controlling the snake's movement
*/ 

function draw () {
    background (0)
    fill(255);
    fill (0,255,0) ;
    circle (foodX, foodY, GRID_SIZE / 2) ;
   
    if (isGameOver () === false) {
      snakeX[0] += GRID_SIZE * xDirection;
      snakeY[0] += GRID_SIZE * yDirection;

    }
    else {
    textSize(50)
    fill(255,0,0)
    textAlign(CENTER,CENTER)
    text("GAME_OVER", width / 2, height / 2) }

    // Draw the snake
    
    function drawSnake () {
      fill (0,255,0) ;
      for (let i = 0; i < snakeX.length; i++) {
        if (i === 0) {
          fill (255,0,0) ;
        }
        else {
          fill (0,255,0) ;
        }
        square (snakeX[i], snakeY[i], GRID_SIZE) ;
      }
    
   }
   }

   // Adds a new segment to the snake's body

   function addSnakeSegment () {
    snakeX.push(snakeX[snakeX.length - 1] - GRID_SIZE * xDirection);
    snakeY.push(snakeY[snakeY.length - 1] - GRID_SIZE * yDirection);
  }
   
  function moveSnake () {
    snakeX.unshift(snakeX[0] + GRID_SIZE * xDirection);
    snakeY.unshift(snakeY[0] + GRID_SIZE *yDirection);
    snakeX.pop() ;
    snakeY.pop() ;
  }

  function randomCoordinate () {
    let margin = GRID_SIZE * 2;
    let gridCell = floor(random(width - margin / GRID_SIZE))
    return gridCell * GRID_SIZE + GRID_SIZE * 1.5 ;
  }

   /**
    * Generates a new random coordinate for the food
    * @param {number} width - The width of the canvas
    * @param {number} GRID_SIZE - The size of each grid cell
    * @returns {boolean} The new x-coordinate for the food
    */

function newFoodCoordinate () {
      let numberOfCells = (width - GRID_SIZE * 2) / GRID_SIZE;
    let gridCell = floor(random(numberOfCells));
    return gridCell * GRID_SIZE + GRID_SIZE / 2;
}

/**
 * Checks if the game is over
 * @returns {boolean} True if the game is over, false otherwise
 */

function isGameOver () {
   if (snakeX[0] <= 0 || snakeX[0] >= width - GRID_SIZE || snakeY[0] <= 0 || snakeY[0] >= height - GRID_SIZE) { ;
return true}
else {return false}
}

/**
 * Handles key presses for controlling the snake's movement
 * @param {string} key - The key that was pressed
 * @param {number} xDirection - The current x-direction of the snake's movement
 * @param {number} yDirection - The current y-direction of the snake's movement
 * @param {number} snakeX - The x-coordinate of the snake
 * @param {number} snakeY - The y-coordinate of the snake
 * @param {boolean} gameOver - A flag indicating whether the game is over
 * @param {function} isSnakeOverFood - A function that checks if the snake is over the food
 * @param {function} newFoodCoordinate - A function that generates a new random coordinate for the food
 */

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
   else if (key === DOWN_ARROW) {
    xDirection = 0 ;
    yDirection = 1 ;
   }

   if (isSnakeOverFood()) {
      foodX = newFoodCoordinate () ;
    foodY = newFoodCoordinate () ;
    addSnakeSegment () ;
   }
}

