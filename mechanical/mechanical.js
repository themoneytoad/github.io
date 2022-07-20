const scene = new THREE.Scene();
const container = document.getElementById("three");
let width = container.offsetWidth;
let height = container.offsetHeight;
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( width, height );
container.appendChild( renderer.domElement);


// cylinder 1
const cylinder1Geometry = new THREE.CylinderGeometry( 0.6, 0.6, 0.2, 6, 1 );
const cylinder1Wireframe = new THREE.WireframeGeometry( cylinder1Geometry );
const cylinder1 = new THREE.LineSegments( cylinder1Wireframe );
cylinder1.material.depthTest = true;
cylinder1.material.opacity = 0.25;
cylinder1.material.transparent = true;
scene.add( cylinder1 );
cylinder1.rotation.x = Math.PI / 2;
cylinder1.position.x = -1;

// cylinder 2
const cylinder2Geometry = new THREE.CylinderGeometry( 1.1, 1.1, 0.2, 6, 1 );
const cylinder2Wireframe = new THREE.WireframeGeometry( cylinder2Geometry );
const cylinder2 = new THREE.LineSegments( cylinder2Wireframe );
cylinder2.material.depthTest = true;
cylinder2.material.opacity = 0.25;
cylinder2.material.transparent = true;
scene.add( cylinder2 );
cylinder2.rotation.x = Math.PI / 2;
cylinder2.position.x = 1.3;
cylinder2.position.y = -0.1;

// cylinder 3
const cylinder3Geometry = new THREE.CylinderGeometry( 0.4, 0.4, 0.2, 6, 1 );
const cylinder3Wireframe = new THREE.WireframeGeometry( cylinder3Geometry );
const cylinder3 = new THREE.LineSegments( cylinder3Wireframe );
cylinder3.material.depthTest = true;
cylinder3.material.opacity = 0.25;
cylinder3.material.transparent = true;
scene.add( cylinder3 );
cylinder3.rotation.x = Math.PI / 2;
cylinder3.position.x = -0.1;
cylinder3.position.y = -0.5;

camera.position.z = 2;
camera.position.y = -0.3;

function animate() {
    requestAnimationFrame( animate );

    cylinder1.rotation.y -= 0.0006;
    cylinder2.rotation.y -= 0.0003;
    cylinder3.rotation.y += 0.0012;

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
