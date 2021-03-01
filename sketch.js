var database
var player
var form
var game
var gameState = 0
var playerCount
var allPlayers

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    
}



