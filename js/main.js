// The import statements look different as they are imported via CDNs here to ensure the Three.js library works properly with codepen.io
// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.6,
  1200
);
camera.position.z = 5; // Set camera position

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
//renderer.setClearColor("#233143"); // Set background colour
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Add renderer to HTML as a canvas element

// Make Canvas Responsive
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight); // Update size
  camera.aspect = window.innerWidth / window.innerHeight; // Update aspect ratio
  camera.updateProjectionMatrix(); // Apply changes
});

// Create box:
const boxGeometry = new THREE.BoxGeometry(2, 2, 2); // Define geometry
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Define material // Simple white box
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial); // Build box
boxMesh.rotation.set(40, 0, 40); // Set box initial rotation
scene.add(boxMesh); // Add box to canvas


const lights = []; // Storage for lights
const lightHelpers = []; // Storage for light helpers
const pointLight = new THREE.PointLight({
  colour: "white",
  intensity: 8,
  dist: 12,
  x: 1,
  y: 3,
  z: 0
});

// Properties for each light
const lightValues = [
  { colour: 0x38e000, intensity: 8, dist: 12, x: 1, y: 0, z: 8 },
  { colour: 0xc56cef, intensity: 6, dist: 12, x: -2, y: 1, z: -10 },
  { colour: 0x000078, intensity: 3, dist: 10, x: 0, y: 10, z: 1 },
  { colour: 0x00ffdd, intensity: 6, dist: 12, x: 0, y: -10, z: -1 },
  { colour: 0x16a7f5, intensity: 6, dist: 12, x: 10, y: 3, z: 0 },
  { colour: 0x000078, intensity: 6, dist: 12, x: -10, y: -1, z: 0 }
];

for (let i = 0; i < 6; i++) {
  // Loop 6 times to add each light to lights array
  // using the lightValues array to input properties
  lights[i] = new THREE.PointLight(
    lightValues[i]["colour"],
    lightValues[i]["intensity"],
    lightValues[i]["dist"]
  );

  lights[i].position.set(
    lightValues[i]["x"],
    lightValues[i]["y"],
    lightValues[i]["z"]
  );

  scene.add(lights[i]);

}


// Rendering Function
const rendering = function () {
  // Rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(rendering);

  // Constantly rotate box
  scene.rotation.z -= 0.005;
  scene.rotation.x -= 0.01;

  renderer.render(scene, camera);
};

rendering();
