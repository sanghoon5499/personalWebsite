import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from '/Users/sangh/Documents/GitHub/personalWebsite/FontLoader.js';
import { TextGeometry } from '/Users/sangh/Documents/GitHub/personalWebsite/TextGeometry.js';

// Setup

const scene = new THREE.Scene();
var deskHeight = 2;
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

camera.position.setZ(5.8);
camera.position.setY(5+ deskHeight) // 5+ deskheight
camera.position.setX(0);
camera.rotation.x = -0.08;

renderer.render(scene, camera);



// Maya assets (monitor, keyboard, mouse)
const loader = new GLTFLoader();
var monitorMesh = null;
loader.load( 'monitor5.glb', handle_load);
function handle_load(gltf) {
  monitorMesh = gltf.scene.children[0];
  
  monitorMesh.scale.set(monitorMesh.scale.x * 0.55, monitorMesh.scale.y * 0.55, monitorMesh.scale.z * 0.55);
  monitorMesh.position.x = 0;
  monitorMesh.position.y = 5.1;
  monitorMesh.position.z = 1;
  monitorMesh.rotation.z = 3.1415;
  monitorMesh.side = THREE.DoubleSide;
  monitorMesh.castShadow = true;

  scene.add(monitorMesh);
}

loader.load( 'keyboard1.glb', handle_load2);
var keyboardMesh = null;
function handle_load2(gltf) {
  keyboardMesh = gltf.scene.children[0];
  
  keyboardMesh.scale.set(keyboardMesh.scale.x * 0.42, keyboardMesh.scale.y * 0.42, keyboardMesh.scale.z * 0.42);
  keyboardMesh.position.x = -0.4;
  keyboardMesh.position.y = 5.37;
  keyboardMesh.position.z = 0.2;
  keyboardMesh.rotation.z = 3.1415; 
  keyboardMesh.rotation.x = 1.62;
  keyboardMesh.side = THREE.DoubleSide;

  scene.add(keyboardMesh);
}

loader.load( 'mouse1.glb', handle_load3);
var mouseMesh = null;
function handle_load3(gltf) {
  mouseMesh = gltf.scene.children[0];
  
  mouseMesh.scale.set(mouseMesh.scale.x * 0.55, mouseMesh.scale.y * 0.55, mouseMesh.scale.z * 0.55);
  mouseMesh.position.x = 2;
  mouseMesh.position.y = 5.2;
  mouseMesh.position.z = 2.1;
  mouseMesh.rotation.z = 3.1415;
  mouseMesh.side = THREE.DoubleSide;

  scene.add(mouseMesh);
}


loader.load( 'github.glb', handle_load4);
function handle_load4(gltf) {
  const githubMesh = gltf.scene.children[0];
  
  githubMesh.scale.set(githubMesh.scale.x * 1.55, githubMesh.scale.y * 1.55, githubMesh.scale.z * 1.55);
  githubMesh.position.x = -14;
  githubMesh.position.y = 4;
  githubMesh.position.z = -25;
  githubMesh.rotation.z = 3.1415;
  githubMesh.side = THREE.DoubleSide;
  githubMesh.castShadow = true;
  githubMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );
  githubMesh.userData.name = "GITHUB"

  scene.add(githubMesh);
}

loader.load( 'linkedin.glb', handle_load5);
function handle_load5(gltf) {
  const linkedinMesh = gltf.scene.children[0];
  
  linkedinMesh.scale.set(linkedinMesh.scale.x * 1.5, linkedinMesh.scale.y * 1.5, linkedinMesh.scale.z * 1.5);
  linkedinMesh.position.x = -4.5;
  linkedinMesh.position.y = 4.4;//5.1
  linkedinMesh.position.z = -25;
  linkedinMesh.rotation.z = 3.1415;
  linkedinMesh.side = THREE.DoubleSide;
  linkedinMesh.castShadow = true;
  linkedinMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );
  linkedinMesh.userData.name = "LINKEDIN"

  scene.add(linkedinMesh);
}

loader.load( 'mail2.glb', handle_load6);
function handle_load6(gltf) {
  const mailMesh = gltf.scene.children[0];
  
  mailMesh.scale.set(mailMesh.scale.x * 1.5, mailMesh.scale.y * 1.5, mailMesh.scale.z * 1.5);
  mailMesh.position.x = 4.5;
  mailMesh.position.y = 4.4;//5.1
  mailMesh.position.z = -26.2;
  mailMesh.rotation.z = 3.1415;
  mailMesh.side = THREE.DoubleSide;
  mailMesh.castShadow = true;
  mailMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );
  mailMesh.userData.name = "MAIL"

  scene.add(mailMesh);
}




// Text
// try: https://en.threejs-university.com/2021/08/04/creating-text-with-three-js-json-fonts/
// /Users/sangh/Documents/GitHub/personalWebsite/Quicksand.json

// var font = '';
// var text = 'three.js', bevelEnabled = true, font = undefined, fontName = 'optimer', fontWeight = 'bold'; // normal bold

// var fontLoader = new THREE.FontLoader();

// loadFont();

// function loadFont() {
//   fontLoader = new FontLoader();
//   fontLoader.load('/Users/sangh/Documents/GitHub/personalWebsite/Quicksand.json', function (response) {
//     font = response;
//   })

//   createText();
// }
// function createText() {
//   textGeo = new TextGeometry( text, {

//     font: font,

//     size: 10,
//     height: 10,
//     curveSegments: 1,

//     bevelThickness: 1,
//     bevelSize: 1,
//     bevelEnabled: false

//   } );

//   textMesh = new THREE.Mesh( textGeo, materials );

//   textMesh.position.x = centerOffset;
//   textMesh.position.y = hover;
//   textMesh.position.z = 0;

//   scene.add( textMesh1 );
// }


// Lights/Lighting

//scene.add(directionalLight, directionalLight2, directionalLight3, directionalLight4);

const generalLighting1 = new THREE.PointLight(0xFFF4d9, 0.2);
generalLighting1.position.set(20, 30, -5);
generalLighting1.castShadow = true;
generalLighting1.shadow.camera.near = 0.1;
generalLighting1.shadow.camera.far = 100;
const pointLightHelper1 = new THREE.PointLightHelper(generalLighting1);

const generalLighting2 = new THREE.PointLight(0xFFFFFF, 0.5);
generalLighting2.position.set(-35, 30, -50);
//generalLighting2.castShadow = true;
generalLighting2.shadow.camera.near = 0.1;
generalLighting2.shadow.camera.far = 100;
const pointLightHelper2 = new THREE.PointLightHelper(generalLighting2);

const deskLighting = new THREE.PointLight(0xFFFFFF, 0.25);
deskLighting.position.set(0, 6 + deskHeight, 20);
//deskLighting.castShadow = true;
deskLighting.shadow.camera.near = 0.1;
deskLighting.shadow.camera.far = 10;
const pointLightHelper3 = new THREE.PointLightHelper(deskLighting);

const mainLight = new THREE.HemisphereLight( 0xD3D3D3, 0x080820, 1 );

const projectsLight = new THREE.PointLight(0xFFFFFF, 0.3);
projectsLight.position.set(80, 30, -20);
projectsLight.castShadow = true;
projectsLight.shadow.camera.near = 0.1;
projectsLight.shadow.camera.far = 60;
const projectsLightHelper = new THREE.PointLightHelper(projectsLight);


//, pointLightHelper1, pointLightHelper2, pointLightHelper3
scene.add(mainLight, generalLighting1, generalLighting2, deskLighting, projectsLight);
scene.add(pointLightHelper1, pointLightHelper2, pointLightHelper3, projectsLightHelper);





// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(500, 50);
gridHelper.position.y = 2;
scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

// Background
scene.background = new THREE.Color(0xffecf2);



// 1st phase elements
const wallL = new THREE.Mesh(new THREE.BoxGeometry(10, 15, 0.2), new THREE.MeshLambertMaterial({color: 0xFAF9F6}));
const wallR = new THREE.Mesh(new THREE.BoxGeometry(10, 15, 0.2), new THREE.MeshLambertMaterial({color: 0xFAF9F6}));
const floor = new THREE.Mesh(new THREE.BoxGeometry(800, 1, 400), new THREE.MeshPhongMaterial({color: 0xFFB347}));
const desk = new THREE.Mesh(new THREE.BoxGeometry(15, 0.2, 10), new THREE.MeshLambertMaterial({color: 0xDEB887}));
const screen = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 2.7), new THREE.MeshBasicMaterial({color: 0x000000}));

// 2nd phase elements
const arrow = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshPhongMaterial({color: 0xFFFFFF}))

// 3rd phase elements
const projectsWall = new THREE.Mesh(new THREE.BoxGeometry(80, 1, 40), new THREE.MeshPhongMaterial({color: 0xFFB347}));

// 1st phase positions

wallL.position.z = -2; wallL.position.x = -5; wallL.position.y = 6 + deskHeight;
wallR.position.z = -2; wallR.position.x = 5; wallR.position.y = 6 + deskHeight;
floor.position.z = -10; floor.position.x = 0; floor.position.y = 2;
floor.receiveShadow = true;
desk.position.z = 3.75; desk.position.x = 0; desk.position.y = 3 + deskHeight;
screen.position.z = 0.32; screen.position.x = 0; screen.position.y = 5.6 + deskHeight;
screen.userData.name = 'SCREEN'


// 2nd phase positions

arrow.position.z = -25; arrow.position.x = 14; arrow.position.y = 4;
arrow.receiveShadow = true;
arrow.castShadow = true;
arrow.userData.name = 'ARROW'

// 3rd phase positions
projectsWall.position.z = -30; projectsWall.position.x = 0; projectsWall.position.y = 50;
projectsWall.receiveShadow = true;

scene.add(wallL, wallR, floor);
scene.add(desk, screen);
scene.add(arrow);




// Interaction
const raycaster = new THREE.Raycaster();
const mousePosition = new THREE.Vector2();

window.addEventListener('mouseover', event => {
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePosition, camera);
  const found = raycaster.intersectObjects(scene.children);
  if (found.length > 0 && found[0].object.userData.name == "GITHUB") {
    animateGithub();
    console.log("GITHUB")
  }
})

window.addEventListener('click', event => {
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePosition, camera);
  const found = raycaster.intersectObjects(scene.children);
  if (found.length > 0 && found[0].object.userData.name == "GITHUB") {
    console.log("akjsdkajsdlkajslkdjalsjdlaksjdlaksjdlkajsdlkajsldkjalskdjlkj")
    animateOpening();
  }

  if (found.length > 0 && found[0].object.userData.name == "ARROW") {
    animateMoveCameraToNewArea();
  }

  // if (found.length > 0) {
  //   found[0].object.material.color.setHex(0xFFFFFF);
  // }
})



// Custom Animations

function animateMoveCameraToNewArea() {
  requestAnimationFrame(animateMoveCameraToNewArea);

  console.log(camera.rotation.z);

  if (camera.rotation.x < 1.5) {
    camera.rotation.x += 0.001;
  }
  



  renderer.render(scene, camera);
}

function animateGithub() {
  github.rotation.y += 0.001
}

// change camera speed depending on screen size
// change animation speed depending on screen size
function animateOpening() {
  requestAnimationFrame(animateOpening);

  // move camera to y=5.5
  if (camera.position.y < 5.5) {
    camera.position.y += 0.01;
  }
  if (camera.position.z > -1.5) {
    camera.position.z -= 0.01;
  }

  if (wallL.rotation.y < 2.5) {
    wallL.position.z += 0.01;
    wallL.rotation.y += 0.01;
  } else {
    wallL.position.y -= 0.1;
  }
  if (wallR.rotation.y > -2.5) {
    wallR.position.z += 0.01;
    wallR.rotation.y -= 0.01;
  } else {
    wallR.position.y -= 0.1;
  }



  // move monitor, keyboard, mouse, and desk
  if (monitorMesh.position.y > -4){
    monitorMesh.position.y -= 0.015;
    screen.position.y -= 0.015;

    keyboardMesh.position.y -= 0.015;
    mouseMesh.position.y -= 0.015;
    desk.position.y -= 0.015;
  }
  
  

  renderer.render(scene, camera);
}



// Main animation Loop

function animate() {
  requestAnimationFrame(animate);

  // line 207 for controls
  controls.update();

  renderer.render(scene, camera);
}

animate();
