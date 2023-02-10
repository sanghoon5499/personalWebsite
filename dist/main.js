import './style.css';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from '/three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from '/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from '/three/examples/jsm/geometries/TextGeometry.js';

// Setup
var enterTextCreated = false
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

//0 10 -1.6
//0, 5+deskHeight, 5.8
camera.position.setX(0);
camera.position.setY(5+deskHeight)
camera.position.setZ(5.8);
camera.rotation.x = -0.08;

renderer.render(scene, camera);



// Maya assets (monitor, keyboard, mouse)
const loader = new GLTFLoader();
var monitorMesh = null;
loader.load( 'monitor7.glb', handle_load);
function handle_load(gltf) {
  monitorMesh = gltf.scene.children[0];
  
  monitorMesh.scale.set(monitorMesh.scale.x * 0.65, monitorMesh.scale.y * 0.65, monitorMesh.scale.z * 0.65);
  monitorMesh.position.x = 0;
  monitorMesh.position.y = 5.1;
  monitorMesh.position.z = 0.3;
  monitorMesh.rotation.z = 3.1415;
  monitorMesh.side = THREE.DoubleSide;
  monitorMesh.castShadow = true;

  scene.add(monitorMesh);
}

loader.load( 'keyboard4.glb', handle_load2);
var keyboardMesh = null;
function handle_load2(gltf) {
  keyboardMesh = gltf.scene.children[0];
  
  keyboardMesh.scale.set(keyboardMesh.scale.x * 0.37, keyboardMesh.scale.y * 0.37, keyboardMesh.scale.z * 0.37);
  keyboardMesh.position.x = -0.4;
  keyboardMesh.position.y = 5.27;
  keyboardMesh.position.z = 0.55;
  keyboardMesh.rotation.z = 3.1415; 
  keyboardMesh.rotation.x = 1.62;
  keyboardMesh.side = THREE.DoubleSide;
  keyboardMesh.castShadow = true;

  scene.add(keyboardMesh);
}

loader.load( 'mouse2.glb', handle_load3);
var mouseMesh = null;
function handle_load3(gltf) {
  mouseMesh = gltf.scene.children[0];
  
  mouseMesh.scale.set(mouseMesh.scale.x * 0.45, mouseMesh.scale.y * 0.45, mouseMesh.scale.z * 0.45);
  mouseMesh.position.x = 1.8;
  mouseMesh.position.y = 5.2;
  mouseMesh.position.z = 2.1;
  mouseMesh.rotation.z = 3.1415;
  mouseMesh.side = THREE.DoubleSide;
  mouseMesh.castShadow = true;

  scene.add(mouseMesh);
}

var githubMesh = null
loader.load( 'github3.glb', handle_load4);
function handle_load4(gltf) {
  githubMesh = gltf.scene.children[0];
  
  githubMesh.scale.set(githubMesh.scale.x * 1.55, githubMesh.scale.y * 1.55, githubMesh.scale.z * 1.55);
  githubMesh.position.x = -12;
  githubMesh.position.y = 5.5;
  githubMesh.position.z = -22.2;
  githubMesh.rotation.z = 3.1415;
  githubMesh.side = THREE.DoubleSide;
  githubMesh.castShadow = true;
  githubMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );

  scene.add(githubMesh);
}

var linkedinMesh = null
loader.load( 'linkedin3.glb', handle_load5);
function handle_load5(gltf) {
  linkedinMesh = gltf.scene.children[0];
  
  linkedinMesh.scale.set(linkedinMesh.scale.x * 1.5, linkedinMesh.scale.y * 1.5, linkedinMesh.scale.z * 1.5);
  linkedinMesh.position.x = -4.5;
  linkedinMesh.position.y = 5.5;
  linkedinMesh.position.z = -24;
  linkedinMesh.rotation.z = 3.1415;
  linkedinMesh.side = THREE.DoubleSide;
  linkedinMesh.castShadow = true;
  linkedinMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );

  scene.add(linkedinMesh);
}

var mailMesh = null
loader.load( 'mail6.glb', handle_load6);
function handle_load6(gltf) {
  mailMesh = gltf.scene.children[0];
  
  mailMesh.scale.set(mailMesh.scale.x * 1.5, mailMesh.scale.y * 1.5, mailMesh.scale.z * 1.5);
  mailMesh.position.x = 4.5;
  mailMesh.position.y = 5.5;
  mailMesh.position.z = -23.2;
  mailMesh.rotation.z = 3.1415;
  mailMesh.side = THREE.DoubleSide;
  mailMesh.castShadow = true;
  mailMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );

  scene.add(mailMesh);
}

var arrowMesh = null
loader.load( 'arrow1.glb', handle_load7);
function handle_load7(gltf) {
  arrowMesh = gltf.scene.children[0];
  
  arrowMesh.scale.set(arrowMesh.scale.x * 2, arrowMesh.scale.y * 4, arrowMesh.scale.z * 2);
  //
  arrowMesh.position.x = 13;
  arrowMesh.position.y = 5.5;
  arrowMesh.position.z = -24;
  arrowMesh.rotation.z = 0;
  arrowMesh.side = THREE.DoubleSide;
  arrowMesh.castShadow = true;
  arrowMesh.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );

  scene.add(arrowMesh);
}

var arrowMesh2 = null
loader.load( 'arrow3.glb', handle_load8);
function handle_load8(gltf) {
  arrowMesh2 = gltf.scene.children[0];
  
  arrowMesh2.scale.set(arrowMesh2.scale.x * 1, arrowMesh2.scale.y * 2, arrowMesh2.scale.z * 1);
  //
  arrowMesh2.position.x = 34.4;
  arrowMesh2.position.y = 5;
  arrowMesh2.position.z = 15;
  arrowMesh2.rotation.z = -3.1415/2;
  arrowMesh2.side = THREE.DoubleSide;
  arrowMesh2.castShadow = true;
  arrowMesh2.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );
  arrowMesh.material.color.setHex(0xFFFFFF);

  scene.add(arrowMesh2);
}




// Text
// https://www.youtube.com/watch?v=l7K9AMnesJQ
// try: https://en.threejs-university.com/2021/08/04/creating-text-with-three-js-json-fonts/
// /Users/sangh/Documents/GitHub/personalWebsite/Quicksand.json


const fontLoader = new FontLoader();
// Quicksand Light_Regular        node_modules/three/examples/fonts/helvetiker_regular.typeface.json
// Source-Code-Pro-ExtraLight_Regular.json
// Quicksand-Light_Regular.json
fontLoader.load('Quicksand-Light_Regular.json', (droidFont) => {
  const textGeometry = new TextGeometry('Sanghoon Choi', {
    height: 0.01, size: 3, font: droidFont,
  });
  const textMaterial = new THREE.MeshNormalMaterial();
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.x = -15;
  textMesh.position.y = 15;
  textMesh.position.z = -20;
  scene.add(textMesh);
});



// monitor text
var npmInit = null
var variant = null
var twoDim = null
var threeDim = null
var npmRunDev = null
var enterToContinue = null
var runningAt = null

var npmInitText = ''
var variantText = ''
var twoDimText = ''
var threeDimText = ''
var npmRunDevText = ''
var enterToContinueText = ''
var runningAtText = ''

var npmInitMesh = null
var variantMesh = null
var twoDimMesh = null
var threeDimMesh = null
var npmRunDevMesh = null
var enterToContinueMesh = null
var runningAtMesh = null

var continueMaterial = null
var textMaterial = null


function createText() {
  fontLoader.load('Quicksand-Light_Regular.json', (fontStyle) => {

  });
  fontLoader.load('Source-Code-Pro-ExtraLight_Regular.json', (fontStyle) => {
    const textCursor = new TextGeometry('|', {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    npmInit = new TextGeometry(npmInitText, {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    variant = new TextGeometry(variantText, {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    twoDim = new TextGeometry(twoDimText, {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    threeDim = new TextGeometry(threeDimText, {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    npmRunDev = new TextGeometry(npmRunDevText, {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    runningAt = new TextGeometry(runningAtText, {
      height: 0.01, size: 0.15, font: fontStyle,
    });
    enterToContinue = new TextGeometry(enterToContinueText, {
      height: 0.01, size: 0.10, font: fontStyle,
    });
  
    const extrusion = 0.35; // distance from text to monitor (0.35 is technically the distance from origin)
    textMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF});


    npmInitMesh = new THREE.Mesh(npmInit, textMaterial);
    npmInitMesh.position.x = -2;
    npmInitMesh.position.y = 8.8;
    npmInitMesh.position.z = extrusion;
  
    variantMesh = new THREE.Mesh(variant, textMaterial);
    variantMesh.position.x = -2;
    variantMesh.position.y = 8.5;
    variantMesh.position.z = extrusion;
  
    threeDimMesh = new THREE.Mesh(threeDim, textMaterial);
    threeDimMesh.position.x = -2;
    threeDimMesh.position.y = 8.2;
    threeDimMesh.position.z = extrusion;

    twoDimMesh = new THREE.Mesh(twoDim, textMaterial);
    twoDimMesh.position.x = -2;
    twoDimMesh.position.y = 7.9;
    twoDimMesh.position.z = extrusion;
  
    npmRunDevMesh = new THREE.Mesh(npmRunDev, textMaterial);
    npmRunDevMesh.position.x = -2;
    npmRunDevMesh.position.y = 7.6;
    npmRunDevMesh.position.z = extrusion;

    runningAtMesh = new THREE.Mesh(runningAt, textMaterial);
    runningAtMesh.position.x = -2;
    runningAtMesh.position.y = 7.3;
    runningAtMesh.position.z = extrusion;
  
    continueMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
    enterToContinueMesh = new THREE.Mesh(enterToContinue, continueMaterial);
    enterToContinueMesh.position.x = -1.1;
    enterToContinueMesh.position.y = 6.3;
    enterToContinueMesh.position.z = extrusion;
  
    scene.add(npmInitMesh, variantMesh, twoDimMesh, threeDimMesh, npmRunDevMesh, enterToContinueMesh, runningAtMesh);
  });
};

function refreshText() {
  scene.remove(npmInitMesh, variantMesh, twoDimMesh, threeDimMesh, npmRunDevMesh, enterToContinueMesh, runningAtMesh);
  createText();
}


// Lights/Lighting

//scene.add(directionalLight, directionalLight2, directionalLight3, directionalLight4);

const generalLighting1 = new THREE.PointLight(0xFFF4d9, 0.1);
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
deskLighting.position.set(0, 6 + deskHeight, 10);
deskLighting.castShadow = true;
deskLighting.shadow.camera.near = 0.1;
deskLighting.shadow.camera.far = 30;
const pointLightHelper3 = new THREE.PointLightHelper(deskLighting);

const mainLight = new THREE.HemisphereLight( 0xD3D3D3, 0x080820, 1 );

const projectsLight = new THREE.PointLight(0xFFFFFF, 0.3);
projectsLight.position.set(80, 30, -20);
projectsLight.castShadow = true;
projectsLight.shadow.camera.near = 0.1;
projectsLight.shadow.camera.far = 60;
const projectsLightHelper = new THREE.PointLightHelper(projectsLight);

const nameLight = new THREE.PointLight(0xFFFFFF, 0.1);
nameLight.position.set(-20, 60, -90);
//nameLight.castShadow = true;
nameLight.shadow.camera.near = 0.1;
nameLight.shadow.camera.far = 100;
const nameLightHelper = new THREE.PointLightHelper(nameLight);

//, pointLightHelper1, pointLightHelper2, pointLightHelper3
scene.add(mainLight, generalLighting1, generalLighting2, deskLighting, projectsLight, nameLight);
//scene.add(pointLightHelper1, pointLightHelper2, pointLightHelper3, projectsLightHelper, nameLightHelper);





// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(500, 50);
gridHelper.position.y = 2;
//scene.add(gridHelper)

// enable orbit
//const controls = new OrbitControls(camera, renderer.domElement);


// Background
scene.background = new THREE.Color(0xffecf2);



// 1st phase elements
const wallL = new THREE.Mesh(new THREE.BoxGeometry(10, 15, 0.2), new THREE.MeshLambertMaterial({color: 0xFAF9F6}));
const wallR = new THREE.Mesh(new THREE.BoxGeometry(10, 15, 0.2), new THREE.MeshLambertMaterial({color: 0xFAF9F6}));
const floor = new THREE.Mesh(new THREE.BoxGeometry(800, 1, 400), new THREE.MeshPhongMaterial({color: 0xFFB347}));
const desk = new THREE.Mesh(new THREE.BoxGeometry(15, 0.2, 10), new THREE.MeshPhongMaterial({color: 0xDEB887}));
const screen = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 3.2), new THREE.MeshBasicMaterial({color: 0x000000}));

// cubes
const githubSolidMesh = new THREE.Mesh(new THREE.SphereGeometry(1.7, 10, 10), new THREE.MeshBasicMaterial({color: 0xFFFFFF}));
const linkedinSolidMesh = new THREE.Mesh(new THREE.SphereGeometry(1.7, 10, 10), new THREE.MeshBasicMaterial({color: 0xFFFFFF}));
const mailSolidMesh = new THREE.Mesh(new THREE.SphereGeometry(1.7, 16, 10), new THREE.MeshBasicMaterial({color: 0xFFFFFF}));


// 3rd phase elements
const projectsWall = new THREE.Mesh(new THREE.PlaneGeometry(60, 36), new THREE.MeshBasicMaterial({color: 0xFFFFFF}));
// http://jsfiddle.net/prisoner849/7j3am1pw/ <- superimpose an image onto a plane
let displaySize = 14
let displaySize2 = 12
var project1Texture = new THREE.TextureLoader().load('AisoIMG.JPG');
var project2Texture = new THREE.TextureLoader().load('RestaurandIMG.JPG');
var project3Texture = new THREE.TextureLoader().load('EasyLangIMG.JPG');
const project1 = new THREE.Mesh(new THREE.PlaneGeometry(displaySize, displaySize*0.625), new THREE.MeshLambertMaterial({map: project1Texture}));
const project2 = new THREE.Mesh(new THREE.PlaneGeometry(displaySize, displaySize*0.625), new THREE.MeshLambertMaterial({map: project2Texture}));
const project3 = new THREE.Mesh(new THREE.PlaneGeometry(displaySize, displaySize*0.625), new THREE.MeshLambertMaterial({map: project3Texture}));

var project1DescTexture = new THREE.TextureLoader().load('Aiso.JPG');
var project2DescTexture = new THREE.TextureLoader().load('Restaurand.JPG');
var project3DescTexture = new THREE.TextureLoader().load('EasyLang.JPG');
const project1Desc = new THREE.Mesh(new THREE.PlaneGeometry(displaySize2, displaySize2*1.528), new THREE.MeshLambertMaterial({map: project1DescTexture}));
const project2Desc = new THREE.Mesh(new THREE.PlaneGeometry(displaySize2, displaySize2*1.137), new THREE.MeshLambertMaterial({map: project2DescTexture}));
const project3Desc = new THREE.Mesh(new THREE.PlaneGeometry(displaySize2, displaySize2*1.083), new THREE.MeshLambertMaterial({map: project3DescTexture}));

const arrowClickField = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.3), new THREE.MeshBasicMaterial({color: 0x000000, opacity: 0, transparent: true}));
const arrowClickField2 = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.6), new THREE.MeshBasicMaterial({color: 0x000000, opacity: 0, transparent: true}));

// 1st phase positions

wallL.position.z = -2; wallL.position.x = -5; wallL.position.y = 6 + deskHeight;
wallR.position.z = -2; wallR.position.x = 5; wallR.position.y = 6 + deskHeight;
floor.position.z = 140; floor.position.x = 0; floor.position.y = 2;
floor.receiveShadow = true;
desk.position.z = 3.75; desk.position.x = 0; desk.position.y = 3 + deskHeight;
desk.receiveShadow = true;
wallL.receiveShadow = true;
wallR.receiveShadow = true;
screen.position.z = 0.32; screen.position.x = 0; screen.position.y = 5.6 + deskHeight;
screen.userData.name = 'SCREEN'

githubSolidMesh.position.x = -12; githubSolidMesh.position.y = 5.5; githubSolidMesh.position.z = -22.2;
linkedinSolidMesh.position.x = -4.5; linkedinSolidMesh.position.y = 5.1; linkedinSolidMesh.position.z = -24;
mailSolidMesh.position.x = 4.5; mailSolidMesh.position.y = 5.5; mailSolidMesh.position.z = -23.2;
arrowClickField.position.x = 13; arrowClickField.position.y = 5.5; arrowClickField.position.z = -23;
arrowClickField.userData.name = "ARROW"
arrowClickField2.position.x = 34; arrowClickField2.position.y = 5.6; arrowClickField2.position.z = 16;
arrowClickField2.rotation.y = -3.1415/2
arrowClickField2.userData.name = "ARROW2"
githubSolidMesh.userData.name = 'GITHUB'
linkedinSolidMesh.userData.name = 'LINKEDIN'
mailSolidMesh.userData.name = 'MAIL'

// 3rd phase positions
projectsWall.position.z = -2; projectsWall.position.x = 35; projectsWall.position.y = 15;
projectsWall.rotation.y = -3.1415/2;
projectsWall.receiveShadow = true;

project1.position.z = -22; project1.position.x = 34.8; project1.position.y = 27;
project1.rotation.y = -3.1415/2;
project2.position.z = -2; project2.position.x = 34.8; project2.position.y = 27;
project2.rotation.y = -3.1415/2;
project3.position.z = 19; project3.position.x = 34.8; project3.position.y = 27;
project3.rotation.y = -3.1415/2;

project1Desc.position.z = -22; project1Desc.position.x = 34.8; project1Desc.position.y = 12.2;
project1Desc.rotation.y = -3.1415/2;
project2Desc.position.z = -2; project2Desc.position.x = 34.8; project2Desc.position.y = 14.6;
project2Desc.rotation.y = -3.1415/2;
project3Desc.position.z = 19; project3Desc.position.x = 34.8; project3Desc.position.y = 14.9;
project3Desc.rotation.y = -3.1415/2;



scene.add(wallL, wallR, floor);
scene.add(desk, screen);
scene.add(projectsWall, project1, project2, project3, project1Desc, project2Desc, project3Desc);
scene.add(githubSolidMesh, linkedinSolidMesh, mailSolidMesh, arrowClickField, arrowClickField2)




// Interaction
const raycaster = new THREE.Raycaster();
const mousePosition = new THREE.Vector2();

window.addEventListener('mouseover', event => {
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePosition, camera);
  const found = raycaster.intersectObjects(scene.children);
})

window.addEventListener('keydown', logKey);
function logKey(e) {
  if (e.key == "Enter") {
    animateOpening();
  }
  // if (e.key == "a") {
  //   animateMoveCameraToNewArea();
  // }
}

window.addEventListener('click', event => {
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePosition, camera);
  const found = raycaster.intersectObjects(scene.children);
  if (found.length > 0 && found[0].object.userData.name == "ARROW") {
    animateMoveCameraToNewArea();
  }
  if (found.length > 0 && found[0].object.userData.name == "ARROW2") {
    animateMoveCameraToOldArea();
  }


  //window.open(url, '_blank').focus();
  if (found.length > 0 && found[0].object.userData.name == "GITHUB") {
    console.log("clicked github")
    window.open('https://github.com/sanghoon5499', '_blank').focus();
  }
  if (found.length > 0 && found[0].object.userData.name == "LINKEDIN") {
    console.log("clicked linkedin")
    window.open('https://www.linkedin.com/in/sanghoonchoi/', '_blank').focus();
  }
  if (found.length > 0 && found[0].object.userData.name == "MAIL") {
    console.log("clicked linkedin")
    window.open('mailto:sanghoon.choi@uwaterloo.ca', '_blank').focus();
  }
})

// Custom Animations



function animateMoveCameraToNewArea() {
  requestAnimationFrame(animateMoveCameraToNewArea);
  
  if (camera.rotation.y > -1.57) {
    camera.rotation.y -= 0.01;
    camera.position.x += 0.04;
    camera.position.y += 0.05;
  }
  renderer.render(scene, camera);
}

function animateMoveCameraToOldArea() {
  requestAnimationFrame(animateMoveCameraToOldArea);

  if (camera.rotation.y < 0) {
    console.log("wtf")
    camera.rotation.y += 0.01;
    camera.position.x -= 0.04;
    camera.position.y -= 0.05;
  }
  renderer.render(scene, camera);
}



// change camera speed depending on screen size
// change animation speed depending on screen size
function animateOpening() {
  requestAnimationFrame(animateOpening);

  // move camera to y=5.5
  if (camera.position.y < 10) {
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

  if  (camera.rotation.x < 0) {
    camera.rotation.x += 0.001;
  }



  // move monitor, keyboard, mouse, and desk
  // if (monitorMesh.position.y > -4){
  //   const speed = 0.015;

  //   monitorMesh.position.y -= speed;
  //   screen.position.y -= speed;

  //   keyboardMesh.position.y -= speed;
  //   mouseMesh.position.y -= speed;
  //   desk.position.y -= speed;
    
  //   npmInitMesh.position.y -= speed;
  //   variantMesh.position.y -= speed;
  //   twoDimMesh.position.y -= speed;
  //   threeDimMesh.position.y -= speed;
  //   npmRunDevMesh.position.y -= speed;
  //   enterToContinueMesh.position.y -= speed;
  //   runningAtMesh.position.y -= speed;
  // }
  
  //0 10.009999999999936 -1.5099999999999218

  renderer.render(scene, camera);
}


// Main animation Loop
createText();  
var doneNpmInit = false
var doneVariantSelect = false
var doneVariantSelect2 = false
var doneNpmRunDev = false
var counter = 0
var arrayCounter = 0
var arrayCounter2 = 0
var npmInitTextArray = "npm init sanghoonchoi.com"
var npmRunDevTextArray = "npm run dev"
var flipColor = false
var id

function animate() {
  id = requestAnimationFrame(animate);

  // enable orbit
  //controls.update();

  counter += 1;

  // initial screen text typing
  if (arrayCounter < npmInitTextArray.length && counter > 100) {
    if (Math.floor(counter) % 10 == 0) {
      npmInitText += npmInitTextArray[arrayCounter];
      arrayCounter += 1;
      createText();
    }
    
  } else {
    doneNpmInit = true
  }
  
  if (doneNpmInit && !doneVariantSelect) {
    if (Math.floor(counter) % 360 == 0) {
      variantText = "Select a variant: "
      twoDimText = "  2D"
      threeDimText = "  3D"
      createText();
      doneVariantSelect = true
    }
  }

  if (doneVariantSelect && !doneVariantSelect2) {
    if (Math.floor(counter) % 529 == 0) {
      twoDimText = "  2D"
      threeDimText = "> 3D"
      doneVariantSelect2 = true
      createText();
    }
  }

  if (doneVariantSelect2 && !doneNpmRunDev && counter > 800) {
    if (arrayCounter2 < npmRunDevTextArray.length) {
      if (Math.floor(counter) % 10 == 0) {
        npmRunDevText += npmRunDevTextArray[arrayCounter2];
        arrayCounter2 += 1;
        createText();
      }
    } 
    else {
      doneNpmRunDev = true
    }
  }

  if (doneNpmRunDev) {
    if (counter == 1050) {
      runningAtText = "dev server now running"
      createText();
    }
    if (counter == 1250) {
      enterToContinueText = "press [Enter] to continue"
      createText();
    }
  }

  
  if (doneNpmRunDev && counter < 10000) {
    if (Math.floor(counter) % 99 == 0) {
      if (flipColor) {
        continueMaterial.color.setHex(0xFFFFFF);
        flipColor = false
      }
      else {
        continueMaterial.color.setHex(0x888888);
        flipColor = true
      }
    }
  }


  // end of initial animation


  // rotating cubes
  if (counter > 1000) {
    if (githubMesh.rotation.z >= 6.283) {
      githubMesh.rotation.z = 0
    }
    githubMesh.rotation.z += 0.005
  
    if (linkedinMesh.rotation.z >= 6.283) {
      linkedinMesh.rotation.z = 0
    }
    linkedinMesh.rotation.z += 0.005

    if (mailMesh.rotation.z >= 6.283) {
      mailMesh.rotation.z = 0
    }
    mailMesh.rotation.z += 0.005
  }
  







  renderer.render(scene, camera);
}
animate();
