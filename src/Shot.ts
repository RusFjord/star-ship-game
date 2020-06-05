export default class Shot {

    private scene: Phaser.Scene;
    private sprite: Phaser.GameObjects.Sprite;
    private coord: Phaser.Math.Vector2;
    private speed: number = 3;

    constructor(scene: Phaser.Scene, spriteName: string, coord: Phaser.Math.Vector2) {
        this.scene = scene;
        this.sprite = this.scene.add.sprite(coord.x, coord.y, spriteName);
        this.coord = coord;
    }

    update() {
        this.coord.y -= this.speed;
        this.setPosition();
    }

    getY(): number {
        return this.coord.y;
    }

    private setPosition() {
        this.sprite.setPosition(this.coord.x, this.coord.y);
    }
}