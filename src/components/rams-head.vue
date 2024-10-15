<template>
  <div id="rams-head-container" ref="ramContainer" @mousemove="onMouseMove"></div>
</template>

<script lang="ts">
import * as THREE from 'three';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader.js';

export default {
  data: () => {
    return {
      name: 'rams-head',
      camera: null as THREE.PerspectiveCamera | null,
      mouse: new THREE.Vector2(),
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2,
      model: null as THREE.Mesh | null,
      renderer: null as THREE.WebGLRenderer | null,
    };
  },

  mounted() {
    this.initScene();
    window.addEventListener('resize', this.onWindowResize, false);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false);
  },

  methods: {
    initScene() {
      const w = (this.$refs.ramContainer as HTMLElement).clientWidth;
      const h = (this.$refs.ramContainer as HTMLElement).clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
      camera.position.z = 75;
      this.camera = camera; // Store the camera in the component's data

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(w, h);
      (this.$refs.ramContainer as HTMLElement).appendChild(renderer.domElement);

      // Step 1: Prepare Particle Geometry and Material
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 500; // Number of particles
      const posArray = new Float32Array(particlesCount * 3); // Multiply by 3 for x, y, z coordinates for each particle

      // Populate position array with random positions for each particle
      for (let i = 0; i < particlesCount * 3; i++) {
        // Random positions around the model
        posArray[i] = (Math.random() - 0.5) * 500; // Adjust the 500 value to spread out the particles more or less
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      // Material for the particles
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5, // Size of each particle
        color: 'white', // Color of the particles
      });

      // Step 2: Create Points and Add to Scene
      const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleMesh);

      // Directional light 1 with a warm color
      const directionalLight1 = new THREE.DirectionalLight(0xffaa33, 0.6); // Warm light
      directionalLight1.position.set(1, 1, -1);
      scene.add(directionalLight1);

      // Directional light 2 with a cool color
      const directionalLight2 = new THREE.DirectionalLight(0x33aaff, 0.6); // Cool light
      directionalLight2.position.set(-1, -1, 1);
      scene.add(directionalLight2);

      // Point light with a vibrant color
      const pointLight = new THREE.PointLight(0xff00ff, 1, 100); // Vibrant color, 100 is the distance
      pointLight.position.set(0, 20, 20);
      scene.add(pointLight);

      const group = new THREE.Group(); // Create a group
      scene.add(group);

      const loader = new STLLoader();
      loader.load('src/assets/VRRam.stl', (geometry: THREE.BufferGeometry) => {
        console.log("STL load Success");
        const material = new THREE.MeshPhongMaterial({
          color: 0x7BAFD4,
          specular: 0x111111,
          shininess: 500
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2; // Adjust the model's initial rotation
        this.model = mesh;
        group.add(mesh);


      });

      const animate = () => {
        requestAnimationFrame(animate);
        this.updateModelRotation(); // Update model rotation based on mouse movement
        renderer.render(scene, camera);
        particleMesh.rotation.y += 0.001;
      };

      animate();
    },

    onMouseMove(event: MouseEvent) {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    },

    updateModelRotation() {
      if (this.model && this.model.parent) {
        // Assuming the model's parent is the group
        const group = this.model.parent;

        // Use the group to apply rotation based on mouse movement
        const maxRotationX = Math.PI / 9;
        const maxRotationY = Math.PI / 9;

        group.rotation.y = maxRotationY * this.mouse.x;
        group.rotation.x = -maxRotationX * this.mouse.y;
      }
    },

    onWindowResize() {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;
      if (this.camera) {
        this.camera.aspect = (this.$refs.ramContainer as HTMLElement).clientWidth / (this.$refs.ramContainer as HTMLElement).clientHeight;
        this.camera.updateProjectionMatrix();
      }
      if (this.renderer) {
        this.renderer.setSize((this.$refs.ramContainer as HTMLElement).clientWidth, (this.$refs.ramContainer as HTMLElement).clientHeight);
      }
    }
  }
};
</script>

<style>
#rams-head-container {
  width: 100%;
  height: 100vh;
  min-height: 100px;
  //min-width: 200px;
}
</style>