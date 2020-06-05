import Shot from "./Shot";

export default class PlayerShots {

    private shots: Array<Shot>;

    constructor() {
        this.shots = new Array<Shot>();
    }

    add(scene: Phaser.Scene, spriteName: string, coord: Phaser.Math.Vector2) {
        this.shots.push(new Shot(scene, spriteName, coord));
    }

    remove() {
        this.shots.sort((a: Shot, b:Shot) => {
            return b.getY() - a.getY();
        });
        let roll = 0;
        this.shots.forEach((shot: Shot) => {
            if (shot.getY() < 0) {
                roll++;
            }
        }); 

        while(roll > 0) {
            this.shots.shift();
            roll--;
        }
    }

    update() {
        this.shots.forEach((shot: Shot) => {
            shot.update();
        });
        this.remove();
    }
}