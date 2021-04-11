import "./style.css";

// load THREE.js lmao
import * as THREE from "three";

console.log(THREE.PerspectiveCamera);

//create scene
const scene = new THREE.Scene();

//create red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};
// sizes.width = Screen.width;
// sizes.height = Screen.height;
//Create the camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
camera.rotation.y = 0.2;
camera.rotation.x = -0.15;
camera.rotation.z = -0.15;
scene.add(camera);

// capture canvas
const canvas = document.querySelector("canvas.webgl");
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

console.log(scene);
console.log(THREE);
console.log(sizes);
