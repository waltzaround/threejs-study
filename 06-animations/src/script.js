import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// use time
let time = Date.now();
//   console.log(time);

// Animations
const tick = () => {
  // console.log("tick");
  //Time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;
  //   console.log(deltaTime);

  // update object rotation
  mesh.rotation.y += 0.001 * deltaTime;
  //   mesh.rotation.x += 0.001 * deltaTime;
  //   mesh.rotation.z += 0.025;

  // update render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
