// import * as THREE from 'three';
global.THREE = require('three');
import OrbitControls from 'three-orbit-controls';

THREE.OrbitControls = OrbitControls(THREE);

class Game {
    constructor() {
        this.scene_ = null;
        this.camera_ = null;
        this.renderer_ = null;
        this.controls_ = null;
        this.isInit_ = false;
    }

    get scene() {
        return this.scene_;
    }

    init() {
        if (!this.isInit_) {
            this.scene_ = new THREE.Scene();
            this.camera_ = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
            this.renderer_ = new THREE.WebGLRenderer();
            this.controls_ = new THREE.OrbitControls(this.camera_, this.renderer_.domElement);

            this.renderer_.setSize(window.innerWidth, window.innerHeight);
            this.renderer_.setClearColor(0xdddddd);
            document.body.appendChild(this.renderer_.domElement);

            this.setCamera_();

            this.isInit_ = true;
        } else {
            throw new Error(`Game is initialization`);
        }
    }

    start() {
        this.render_();
    }

    setCamera_() {
        this.camera_.position.set(20, 20, 300);
        this.camera_.lookAt(new THREE.Vector3());
    }

    render_() {
    	requestAnimationFrame(this.render_.bind(this));
    	this.renderer_.render(this.scene_, this.camera_);
    }
};

export const game = new Game();
