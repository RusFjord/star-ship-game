import Player from './Player';

export default class StarShipGame extends Phaser.Scene
{

    name: string = 'my-game';
    background: Phaser.GameObjects.TileSprite;
    player: Player;

    constructor()
    {
        super(name);
        this.player = new Player(this);
    }

    preload(){
        this.load.image('background', 'assets/background.png');
        this.player.preload();
    }

    create(){
        this.background = this.add.tileSprite(0, 0, 0, 0, "background").setScale(2);
        this.player.create();
    }

    update() {
        this.background.tilePositionY -= 0.7;
        this.player.update();
    }
}