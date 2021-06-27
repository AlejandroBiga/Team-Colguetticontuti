class Scene3 extends Phaser.Scene {
    constructor() {
      super('nivel2');
    }

    preload ()
    {
        this.load.image('nivel2', 'assets/nivel2.png')
        this.load.image('plataforma', 'assets/plataforma.png')
        this.load.image('bola1', 'assets/bola1.png')
        this.load.image('bola2', 'assets/bola2.png')
        this.load.image('powerup', 'assets/powerup')
        this.load.image('pinches', 'assets/pinches.png')
        this.load.image('perdiste', 'assets/perdiste.png');
        this.load.image('ganaste', 'assets/ganaste.png');


    }

    create()
    {

        //necesario recargar toda la escena o muere nose porque 

        this.add.image(5, 540, "nivel2");
      

        plataform = this.physics.add.staticGroup();

        plataform.create(970, 1000, 'plataforma').setScale(1.5).refreshBody();

        player = this.physics.add.sprite (93, 92, 'bola1');
      

        player.setBounce(0.9);
        player.setBounceY (1)

        cursors = this.input.keyboard.createCursorKeys();


        pinches = this.physics.add.staticGroup();

        //mas pinches para mas dificiltad ponele
        pinches.create(400, 850, 'pinches');
        pinches.create(1000, 850, 'pinches');
        pinches.create(1500, 850, 'pinches');
        pinches.create(2000, 850, 'pinches');
        pinches.create(3500, 1000, 'pinches');
        pinches.create(4200, 1400, 'pinches');

        //testear y ver un par menos o mas de esto 
        inflador = this.physics.add.staticGroup();
        inflador.create(970, 300, 'inflador');
        inflador.create(1600, 500, 'inflador');
        inflador.create(3000, 700, 'inflador');
        



        
                                      
        this.physics.add.collider(player, plataform); 
        this.physics.add.collider(player, inflador);
        this.physics.add.collider(player, pinches);

    }
    update ()

        //hacer que funcionen en nivel 1 antes de desaparecer las cosas si se puede 
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