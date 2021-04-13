import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

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

// // use time
// let time = Date.now();
// //   console.log(time);

// Clock
const clock = new THREE.Clock();

//smoothing anim
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 });
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 });

// Animations
const tick = () => {
  // using three builtin time
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  console.log("tick");

  //   // Time example
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime;
  //   //   console.log(deltaTime);

  // update object rotation
  mesh.rotation.y = elapsedTime * Math.PI * 0.2;
  mesh.rotation.x = elapsedTime * Math.PI * 0.2;
  mesh.rotation.z = elapsedTime * Math.PI * 0.2;

  // //movement
  // mesh.position.x = Math.cos(elapsedTime);
  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.z = Math.tan(elapsedTime);

  // camera.lookAt(mesh.position);

  // update render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
