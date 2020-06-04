import 'phaser';

export default class StarShipGame extends Phaser.Scene
{

    name: string = 'my-game'

    constructor()
    {
        super(name);
    }

    preload(){
    }

    create(){
        
    }

    update() {

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 1024,
    height: 768,
    scene: StarShipGame
};

const game = new Phaser.Game(config);
