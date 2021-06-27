

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000} ,
            debug: true
        }
    },
    
    scene: [Scene1, Scene2, Scene3]
};



var game = new Phaser.Game(config );


var playing = false;
var startButton;

var menu;
var cameras;
var cursors;
var anims;
var botonjugar;
var plataform;
var player;
var bola1;
var bola2;
var nivel1;
var nivel2;
var credits;
var setBounds;
var inflador;
var music;



var pinches;
var plataforma;
var ganaste;
var perdiste;
var cambiaEscena; false
var comenzarjuego; true
