import {VRInstance} from 'react-vr-web';
import {Module} from 'react-vr-web';
import * as THREE from 'three';

function init(bundle, parent, options) {

  const scene = new THREE.Scene();
  const sphereModule = new SphereModule();

  const vr = new VRInstance(bundle, 'SphereSample', parent, {
    cursorVisibility: 'visible',
    nativeModules: [ sphereModule ],
    scene: scene,
  });

  const sphere = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00}),
    new THREE.Mesh('geometry','material')
  );
  sphere.position.z = -3;
  scene.add(sphere);

  sphereModule.init(sphere);

  vr.render = function(timestamp) {
    const seconds = timestamp / 1000;
    sphere.position.x = 0 + (1 * (Math.cos(seconds)));
    sphere.position.y = 0.2 + (1 * Math.abs(Math.sin(seconds)));
    sphere.rotation.y += 0.05;
  };

  // Begin the animation loop
  vr.start();
  return vr;
}

export default class SphereModule extends Module {
  // CubeModule is a React Native Module, which implements functionality
  // that can be called asynchronously across the React Native brige.

  // Constructor calls super() with one argument: module name.
  constructor() {
    super('SphereModule');
  }

  // Called directly after the module is created.
  init(sphere) {
    this.sphere = sphere;
  }

  // Change the cube material color to the given value.
  // Called remotely by the CubeModule on the React side.
  changeSphereColor(color) {
    // THREE.Color() accepts either a six-digit hex color or a CSS style.
    // e.g. 0xff0000, 'rgb(255,0,0)', 'red'
    this.sphere.material.color = new THREE.Color(color);
  }

}

window.ReactVR = {init};
