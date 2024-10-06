import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, extend, useFrame } from '@react-three/fiber'; // Add useFrame import
import * as THREE from 'three';
import group18 from '../photos24/count.png'; // Your texture

// Extend Three.js elements
extend({ MeshBasicMaterial: THREE.MeshBasicMaterial, CylinderGeometry: THREE.CylinderGeometry });

const RotatingCylinder = ({ maxValue }) => {
  const cylinderRef = useRef();
  const [combinedTexture, setCombinedTexture] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const screenWidth = window.innerWidth;

  // Load the PNG image texture
  const pngTexture = useLoader(THREE.TextureLoader, group18);

  // Function to create a canvas texture that combines the image and text
  const createCombinedTexture = (number, image) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas size (same size as the PNG image)
    canvas.width = 318;
    canvas.height = 318;

    // Draw the PNG image on the canvas
    context.drawImage(image.image, 0, 0, canvas.width, canvas.height);

    // Add the text on top of the image
    context.font = '72px Arial';
    context.fillStyle = 'rgba(255, 255, 255, 0.8)';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(number.toString() + '+', canvas.width / 2, canvas.height / 2);

    // Convert canvas to a texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.rotation = Math.PI / 2;
    texture.center.set(0.5, 0.5);

    return texture;
  };

  useEffect(() => {
    if (pngTexture) {
      const newTexture = createCombinedTexture(currentNumber, pngTexture);
      setCombinedTexture(newTexture);
    }
    return () => {
      // Clean up WebGL resources here
      if (cylinderRef.current) {
        cylinderRef.current.geometry.dispose();
        cylinderRef.current.material.dispose();
      }}
  }, [currentNumber, pngTexture]);

  useFrame(() => {
    // if (currentNumber < maxValue && isRotating && cylinderRef.current) {
    //   setCurrentNumber((prev) => Math.min(prev + 20000, maxValue));
    // }

    if ((currentNumber < maxValue) && cylinderRef.current) {
      
      setCurrentNumber(prev => Math.min(prev + 1000, maxValue)) // Increment the number by 1 per frame
      cylinderRef.current.rotation.z += 0.2 // Rotate about the Y-axis
    }

    if (currentNumber >= maxValue && isRotating) {
      
      
      cylinderRef.current.rotation.z += 0.2; // Continue rotating
        
        if (Math.abs(cylinderRef.current.rotation.z % Math.PI*2) < 0.1) { // Adjust condition as needed
          
          setIsRotating(false); // Stop rotating after the extra rotation
        }
      
    }
  });

  return (
    <mesh ref={cylinderRef} rotation={[Math.PI / 2, 0, 0]}>
      {screenWidth > 768 ? <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} /> : <cylinderGeometry args={[1.7, 1.7, 0.1, 32]} />} 
      {/* <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} /> */}
      <meshBasicMaterial attachArray="material" />
      <meshBasicMaterial map={combinedTexture} attachArray="material" />
      <meshBasicMaterial map={combinedTexture} attachArray="material" />
      {/* <meshBasicMaterial color={'#888888'} attachArray="material" /> */}
    </mesh>
  );
};

function Drop3D() {
  return (
    <div
      className="drop3d-container"
      style={{
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: '100%',
        // height: '100vh', // Ensure full viewport height
      }}
    >
      <Canvas style={{width: '200px', height: '200px', padding: 0}} camera={{ fov: 45, position: [3, 3, 6] }}>
        <ambientLight intensity={0.5} />  
        <pointLight position={[10, 10, 10]} />
        <RotatingCylinder maxValue={40000} />
      </Canvas>
    </div>
  );
}

export default Drop3D;
