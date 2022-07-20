const scene = new THREE.Scene();
const container = document.getElementById("three");
const width = container.offsetWidth;
const height = container.offsetHeight;
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
container.appendChild( renderer.domElement);

// sphere
let sphereSize = 0.5;
let sphereEnlarge = true;
const sphereGeometry = new THREE.SphereGeometry( sphereSize, 12, 12 );
const sphereMaterial = new THREE.MeshBasicMaterial( { 
    color: 0xF7F8FB,
    opacity: 0.80,
    transparent: true,
    depthTest: false
 } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// Cube
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeWireframe = new THREE.WireframeGeometry( cubeGeometry );
const cube = new THREE.LineSegments( cubeWireframe );
cube.material.depthTest = false;
cube.material.opacity = 0.25;
cube.material.transparent = true;
scene.add( cube );

camera.position.z = 2;
camera.position.y = -0.3;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    if ( sphereEnlarge ) {
        sphereSize += 0.001;
        if ( sphereSize >= 0.6 ) {
            sphereEnlarge = false;
        }
    }
    else {
        sphereSize -= 0.001;
        if ( sphereSize <= 0.2 ) {
            sphereEnlarge = true;
        }
    }

    sphere.scale.x = sphereSize;
    sphere.scale.y = sphereSize;
    sphere.scale.z = sphereSize;

    renderer.render( scene, camera );
}

animate();
