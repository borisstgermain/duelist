'use strict';

import {game} from './game.js';

game.init();

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
const box = new THREE.Mesh(geometry, material)
game.scene.add(box);

game.start();
