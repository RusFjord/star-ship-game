export default class Shot {

    private scene: Phaser.Scene;
    private sprite: Phaser.GameObjects.Sprite;
    private coord: Phaser.Math.Vector2;

    constructor(scene: Phaser.Scene, spriteName: string, coord: Phaser.Math.Vector2) {
        this.scene = scene;
        this.sprite = this.scene.add.sprite(coord.x, coord.y, spriteName);
        this.coord = coord;
    }

    update() {

    }
}