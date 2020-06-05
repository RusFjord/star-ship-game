import 'phaser';

import StarShipGame from './StarShipGame';

const config = {
    type: Phaser.CANVAS,
    backgroundColor: '#125555',
    width: 1024,
    height: 768,
    scene: StarShipGame
};

const game = new Phaser.Game(config);
