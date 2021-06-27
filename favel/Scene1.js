class Scene1 extends Phaser.Scene {
    constructor() {
      super({key:'inicio'});
    }


    preload ()
    {
        this.load.image('menu', 'assets/menu.png')
        this.load.image('jugar', 'assets/botonjugar.png')
        
        


    }

    create()
    {    
        
        var Portada = this.add.image(960,540, "menu")
        var botonPlay = this.add.image(960,540, "jugar")

        


        
        
        // no anda DIOS

        //this.sound.add('musicamenu');

        



        
        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {

            this.scene.start('Scene2');

        }, this);

        
        

      
    }


}

