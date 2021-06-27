class Scene2 extends Phaser.Scene {
    constructor() {
      super({key:'Scene2' }); // active: true});
    }

    preload ()
    {
        this.load.image('nivel1', 'assets/nivel1.png');
        this.load.image('plataforma', 'assets/plataforma.png');
        this.load.image('bola2', 'assets/bola2.png');
        this.load.image('powerup', 'assets/powerup');
        this.load.image('pinches', 'assets/pinches.png');
        this.load.image('perdiste', 'assets/perdiste.png');
        this.load.image('ganaste', 'assets/ganaste.png');
        this.load.image('inflador', 'assets/inflador.png');
        this.load.image("bola1", "assets/bola1.png");
        


    }
    
    create()
    {

        

        this.add.image(5, 540, "nivel1");
      

        plataform = this.physics.add.staticGroup();

        plataform.create(970, 1000, 'plataforma').setScale(1.5).refreshBody();

        player = this.physics.add.sprite (93, 92, 'bola1');
      
        //para que la pelota se mantenga en al aire 
        player.setBounce(0.9);
        player.setBounceY (1)

      
          
        // player.setCollideWorldBounds(true); (sale del cuadrado PERO NO LO SIGUE 
         
        
        
    
        //animaciones maybe.. (necesitamos que haga la animacion cuando pega el collider del player y plataforma )

        
        cursors = this.input.keyboard.createCursorKeys();


        pinches = this.physics.add.staticGroup();

        pinches.create(400, 850, 'pinches');
        pinches.create(1000, 850, 'pinches');
        pinches.create(1500, 850, 'pinches');
        pinches.create(2000, 850, 'pinches');



            //ojala 
        inflador = this.physics.add.staticGroup();

        inflador.create(970, 300, 'inflador');
        inflador.create(1600, 500, 'inflador');


        
        // colisión                                 //otra coma da otra acción
        this.physics.add.collider(player, plataform); 
        this.physics.add.collider(player, inflador);
        this.physics.add.collider(player, pinches);

        //no funciona tampoco nose porque
        this.physics.add.overlap(player, inflador, this.collectIflador, null, this);

        }
        // fijate esto anda a saber 
        collectIflador(_player, inflador){
            inflador.disableBody(true, true)
        }
        pinchaso(player, pinches){
            this.physics.pause();
            player.setTint(0xff0000);
            gameOver = true;
        }

       update ()
{
    // esto son los movimientos

    if (cursors.left.isDown)
    {
        player.setVelocityX(-300);

        
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(300);

        
    }
    else
    {
        player.setVelocityX(0);

        
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-1000);
    
    }
    

    
    }

    

    
     








}

