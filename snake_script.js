
// Get the board element from html, which is our play area
// Get context to access the x and y pixel of the area 
const gameArea = document.getElementById('board');
const ctx = gameArea.getContext('2d');

// user button arrow button read
const LEFT_CLICK = "ArrowLeft";
const UP_CLICK = "ArrowUp";
const RIGHT_CLICK = "ArrowRight";
const DOWN_CLICK = "ArrowDown";

// contanins Snake data
const snakeDimensionCoordinate = {
    // Snakes coordinates
    x: 392,
    y: 392,
    // Change in snake x and y coordinate
    dx: 0,
    dy: 0,
    // defining snake length and width
    snakeLength: 2,
    snakeWidth: 8,
    // snake length will increase by this number after eating food
    snakeLengthIncrease: 2,
    // takes a record of the pixels/cells occupied by snakes body
    snakeBody: []
}

const foodCoordinate = {
    x: 300,
    y: 300,
    foodWidth: 8
}

// Make snake game function
const drawGame = () => {    
    clearScreen();
    drawSnake();
}

// clear the game screen
const clearScreen = () => {
    ctx.fillStyle = 'black' // change to screen to black
    ctx.fillRect(0,0,gameArea.clientWidth,gameArea.clientHeight)    
}


const drawSnake = () => {
    for(var i = 0;i<=snakeDimensionCoordinate['snakeLength'];i++){
        ctx.fillStyle = 'white';
        ctx.fillRect(snakeDimensionCoordinate['x']-i,snakeDimensionCoordinate['y'],snakeDimensionCoordinate['snakeWidth'],snakeDimensionCoordinate['snakeWidth']);
    }
};


// handles food displaying 
const drawFood = () => {

    do {
        let pixelIncxt =  Math.floor(Math.random()*400) +1 //get random int between 1-400
       

    } while(pixelIncxt  );


    
}




// compare the coordinates of snake and food 
// if they are equal food will appear on a new position
// snakes lenght will increase by a factor of snakeDimensionCoordinate['snakeLengthIncrease']
// re-render the new snake
const foodEffects = () => {
    if(snakeDimensionCoordinate['x'] === foodCoordinate['x'] && snakeDimensionCoordinate['y'] === foodCoordinate['y']){
        // displayfood() 
        snakeDimensionCoordinate['snakeLength'] += 2
        drawSnake()
    }

        
    
}


drawGame();


// function drawSnake(){
//     let speedSnake = 7; //The interval will be seven times a second.

//     setTimeout(drawGame, 1000/speedSnake)

// }


// reading keys by adding eventlistener
function readKeysClick() {
document.addEventListener('keydown', (e) => {

    if(e.key === LEFT_CLICK && snakeDimensionCoordinate.dx === 0){

    } else if(e.key === UP_CLICK && snakeDimensionCoordinate.dy === 0) {

    } else if(e.key === RIGHT_CLICK && snakeDimensionCoordinate.dx === 0) {
        
    } else if(e.key === DOWN_CLICK && snakeDimensionCoordinate.dy === 0) {
        
    }


})
}


