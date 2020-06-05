export default class StarShipGame extends Phaser.Scene
{

    name: string = 'my-game'
    background: Phaser.GameObjects.TileSprite

    constructor()
    {
        super(name);
    }

    preload(){
        this.load.image('background', 'assets/background.png');
    }

    create(){
        this.background = this.add.tileSprite(0, 0, 0, 0, "background");
    }

    update() {
        this.background.tilePositionY -= 0.7;
    }
}