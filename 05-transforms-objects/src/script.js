import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Positioning
// mesh.position.x = 0.5;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0, 1, -1);

//scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.25, 0.5);

//Rotation
mesh.rotation.reorder("YXZ");
// mesh.rotation.x = 1.25;
// mesh.rotation.y = 1.25;
// mesh.rotation.z = 0.25;
mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, Math.PI * 0.25);

//quarternion rotation

mesh.position.normalize();
console.log(mesh.position.length());

// Axes helper
// const axesHelper = new THREE.AxesHelper(12);
// scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

console.log(mesh.position.normalize(camera.position));
console.log("distance to camera: " + mesh.position.distanceTo(camera.position));
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

console.log("ohai three.js");
