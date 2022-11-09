const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ShirtGeometry = new THREE.BoxGeometry( 1, 1, 0.5 );
const ShirtMaterial = new THREE.MeshBasicMaterial( { color: "dodgerblue" } );
const Shirt = new THREE.Mesh( ShirtGeometry, ShirtMaterial );

const HeadGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const HeadMaterial = new THREE.MeshBasicMaterial( { color: "#ffdac4" } );
const Head = new THREE.Mesh( HeadGeometry, HeadMaterial );

scene.add( Shirt );
scene.add( Head );

camera.position.z = 5;
Head.position.y = 1;

function animate() {
	requestAnimationFrame( animate );

    document.onkeydown = function(event){
        console.log(event.keyCode)
        switch (event.keyCode){
            case 39:
                Head.rotation.y += 0.05;
                Shirt.rotation.y += 0.05;
                break;
            case 37:
                Head.rotation.y -= 0.05;
                Shirt.rotation.y -= 0.05;
                break;
            case 38:
                camera.position.y += 0.05;
                camera.rotation.x -= 0.01;
        }
    }

	renderer.render( scene, camera );
}
animate();