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

        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.currentHex = null;
        this.prevHex = null;
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

            window.addEventListener('mousemove', this.onMouseMove_.bind(this), false);

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
        this.raycaster.setFromCamera(this.mouse, this.camera_);
        const hexs = this.raycaster.intersectObjects(this.scene_.children);
        hexs.forEach((hex) => this.currentHex = hex.object);
        if (this.currentHex != this.prevHex) {
            if (this.currentHex) {
                this.currentHex.material.color.set(0x00ff00);
            }
            if (this.prevHex) {
                this.prevHex.material.color.set(0x00ffff);
            }
            this.prevHex = this.currentHex;
        }

    	requestAnimationFrame(this.render_.bind(this));
    	this.renderer_.render(this.scene_, this.camera_);
    }

    onMouseMove_(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }
};

export const game = new Game();
