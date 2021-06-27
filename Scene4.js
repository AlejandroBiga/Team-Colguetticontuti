class Scene4 extends Phaser.Scene {
    constructor() {
      super('credits');
    }
    //si algun dia se llega a ver esto
    preload ()
    {
        this.load.image('credits', 'assets/credits.png')

    }

    create()
    {
        var Creditos = this.add.image(970, 450, "credits")

    }











}