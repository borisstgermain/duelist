import Hex from './hex.js';

const SIZE = 18;

export default class Grid {
    constructor(scene, column, row) {
        this.scene_ = scene;
        this.column_ = column;
        this.row_ = row;

        this.generate_();
    }

    generate_() {
        for (let i = 0; i < this.column_; i++) {
            for (let j = 0; j < this.row_; j++) {
                const hex = this.createHex_(i, j);
                this.scene_.add(hex);
            }
        }
    }

    createHex_(xpos, ypos) {
        const color = new THREE.Color(0x00ffff);
        const radiusTop = 10;
        const radiusBottom = 10;
        const height = 1.5;
        const radiusSegments = 6;

        const hex = new Hex({
            radiusTop,
            radiusBottom,
            height,
            radiusSegments,
            color
        }).mesh;

        hex.position.x = SIZE * (xpos - this.column_ / 2);
        hex.position.z = 1.05 * SIZE * (ypos - this.row_ / 2 + (xpos % 2) * 0.5);
        hex.rotation.y = Math.PI/2;

        return hex;
    }
};
