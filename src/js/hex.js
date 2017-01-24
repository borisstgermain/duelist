export default class Hex {
    /**
     * @param {{
     *     radiusTop: Number,
     *     radiusBottom: Number,
     *     height: Number,
     *     radiusSegments: Number,
     *     color: THREE.Color
     * }} params
     */
    constructor(params) {
        this.mesh_ = new THREE.Mesh(
            new THREE.CylinderBufferGeometry(params.radiusTop,
                params.radiusBottom, params.height, params.radiusSegments),
            new THREE.MeshBasicMaterial({ color: params.color })
        );
    }

    get mesh() {
        return this.mesh_;
    }
};
