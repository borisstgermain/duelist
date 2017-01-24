import Hex from './hex.js';

const SIZE = 18;
const COLOR = new THREE.Color(0x00ffff);
const RADIUS_TOP = 10;
const RADIUS_BOTTOM = 10;
const HEIGHT = 1.5;
const RADIUS_SEGMENTS = 6;


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
        const hex = new Hex({
            radiusTop: RADIUS_TOP,
            radiusBottom: RADIUS_BOTTOM,
            height: HEIGHT,
            radiusSegments: RADIUS_SEGMENTS,
            color: COLOR
        }).mesh;

        hex.position.x = SIZE * (xpos - this.column_ / 2);
        hex.position.z = 1.05 * SIZE * (ypos - this.row_ / 2 + (xpos % 2) * 0.5);
        hex.rotation.y = Math.PI/2;

        return hex;
    }
};
