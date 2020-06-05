import 'phaser'

const padding: number = 30;

export default class Player {

    private scene: Phaser.Scene;
    private sprite: Phaser.GameObjects.Sprite;
    private speed: number;
    private coord: Phaser.Math.Vector2;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.speed = 3;
        this.coord = new Phaser.Math.Vector2(150, 150);
    }

    preload() {
        this.scene.load.image('player', 'assets/star-ship.png');
    }

    create() {
        this.sprite = this.scene.add.sprite(this.coord.x, this.coord.y, 'player');
    }

    update() {
        const cursorKeys = this.scene.input.keyboard.createCursorKeys();

        if (cursorKeys.right.isDown) {
            this.coord.x += this.speed;
        }
        if (cursorKeys.left.isDown) {
            this.coord.x -= this.speed;
        }
        if (cursorKeys.up.isDown) {
            this.coord.y -= this.speed;
        }
        if (cursorKeys.down.isDown) {
            this.coord.y += this.speed;
        }
        this.testPosition();
        this.setPosition();
    }

    private testPosition() {
        let {width, height} = this.scene.cameras.main;
        if (this.coord.x > width - padding) {
            this.coord.x = width - padding;
        }
        if (this.coord.x < padding) {
            this.coord.x = padding;
        }
        if (this.coord.y > height - padding) {
            this.coord.y = height - padding;
        }
        if (this.coord.y < padding) {
            this.coord.y = padding;
        }
    }

    private setPosition() {
        this.sprite.setPosition(this.coord.x, this.coord.y);
    }
}