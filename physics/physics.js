const scene = new THREE.Scene();
const container = document.getElementById("three");
let width = container.offsetWidth;
let height = container.offsetHeight;
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( width, height );
container.appendChild( renderer.domElement);

// inner3 sphere
const inner3Geometry = new THREE.SphereGeometry( 1.50, 12, 12 );
const inner3Material = new THREE. MeshBasicMaterial ( {
    color: 0x000000,
    opacity: 0.20,
    transparent: true,
    depthTest: true
} );
const inner3 = new THREE.Mesh( inner3Geometry, inner3Material );
scene.add( inner3 );

// inner2 sphere
const inner2Geometry = new THREE.SphereGeometry( 1.80, 12, 12 );
const inner2Material = new THREE. MeshBasicMaterial ( {
    color: 0x000000,
    opacity: 0.20,
    transparent: true,
    depthTest: true
} );
const inner2 = new THREE.Mesh( inner2Geometry, inner2Material );
scene.add( inner2 );

// inner sphere
const innerGeometry = new THREE.SphereGeometry( 1.90, 12, 12 );
const innerMaterial = new THREE. MeshBasicMaterial ( {
    color: 0x000000,
    opacity: 0.20,
    transparent: true,
    depthTest: true
} );
const inner = new THREE.Mesh( innerGeometry, innerMaterial );
scene.add( inner );

// wireframe
const sphereGeometry = new THREE.SphereGeometry( 2, 12, 12 );
const sphereWireframe = new THREE.WireframeGeometry( sphereGeometry );
const sphere = new THREE.LineSegments( sphereWireframe );
sphere.material.depthTest = true;
sphere.material.opacity = 0.25;
sphere.material.transparent = true;
scene.add( sphere );

// orbiter sphere
const orbiterGeometry = new THREE.SphereGeometry( 0.02, 12, 12 );
const orbiterMaterial = new THREE. MeshBasicMaterial ( {
    color: 0xFFFFFF,
    transparent: false,
    depthTest: true
} );
const orbiter = new THREE.Mesh( orbiterGeometry, orbiterMaterial );
scene.add( orbiter );
let orbiterRadius = 2.6;
let orbiterDeg = 0.0;

// orbiter2 sphere
const orbiter2Geometry = new THREE.SphereGeometry( 0.02, 12, 12 );
const orbiter2Material = new THREE. MeshBasicMaterial ( {
    color: 0xFFFFFF,
    transparent: false,
    depthTest: true
} );
const orbiter2 = new THREE.Mesh( orbiter2Geometry, orbiter2Material );
scene.add( orbiter2 );
let orbiter2Radius = 3.2;
let orbiter2Deg = 180;

camera.position.z = 4;
camera.position.y = 0.8;
camera.lookAt(0.0, -0.3, 0.0);

function animate() {
    requestAnimationFrame( animate );

    sphere.rotation.y -= 0.0006;

    orbiterDeg -= 0.013
    orbiter2Deg -= 0.01
    
    orbiter.position.x = orbiterRadius*Math.cos(orbiterDeg);
    orbiter.position.z = orbiterRadius*Math.sin(orbiterDeg);
    orbiter.position.y = Math.sin(orbiterDeg);

    orbiter2.position.x = orbiter2Radius*Math.cos(orbiter2Deg);
    orbiter2.position.z = orbiter2Radius*Math.sin(orbiter2Deg);
    orbiter2.position.y = Math.sin(orbiter2Deg);

    renderer.render( scene, camera );
}

animate();

function resize() {
    width = container.offsetWidth;
    height = container.offsetHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize, false);
