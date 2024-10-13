import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import group18 from "../photos24/count.png"; // Your texture

// Extend Three.js elements
extend({
  MeshBasicMaterial: THREE.MeshBasicMaterial,
  CylinderGeometry: THREE.CylinderGeometry,
});

const RotatingCylinder = ({ maxValue, coinText }) => {
  const cylinderRef = useRef();
  const [combinedTexture, setCombinedTexture] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  // Load the PNG image texture
  const pngTexture = useLoader(THREE.TextureLoader, group18);

  // Function to create a canvas texture that combines the image and text
  const createCombinedTexture = (number, image) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set canvas size (same size as the PNG image)
    canvas.width = 318;
    canvas.height = 318;

    // Draw the PNG image on the canvas
    context.drawImage(image.image, 0, 0, canvas.width, canvas.height);

    // Add the number + symbol on the first line and coinText on the second line
    context.font = "44px Arial";
    context.fillStyle = "rgba(255, 255, 255, 0.8)";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Display the number followed by a '+' on the first line
    // context.fillText(`${number}+`, canvas.width / 2, canvas.height / 3);
    context.fillText(
      (number === 50000) ? `${number/1000}+` : `${number/1000}k+` ,
      canvas.width / 2,
      canvas.height / 3
    );

    // Display the coinText slightly below the number at 2/3rd of the height
    context.fillText(coinText, canvas.width / 2, (canvas.height / 3) * 2);

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
      }
    };
  }, [currentNumber, pngTexture]);

  useFrame(() => {
    if (currentNumber < maxValue && cylinderRef.current) {
      setCurrentNumber((prev) => Math.min(prev + 1000, maxValue)); // Faster increment
      cylinderRef.current.rotation.z += 0.2; // Rotate the cylinder while counting
    }

    if (currentNumber >= maxValue && isRotating) {
      setIsRotating(false); // Stop the rotation flag
      cylinderRef.current.rotation.z = 0; // Ensure the rotation stops immediately
    }
  });

  return (
    <mesh ref={cylinderRef} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} />
      <meshBasicMaterial attachArray="material" />
      <meshBasicMaterial map={combinedTexture} attachArray="material" />
      <meshBasicMaterial map={combinedTexture} attachArray="material" />
    </mesh>
  );
};

function Drop3D({ content, maxValue }) {
  return (
    <div
      className="drop3d-container"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Canvas
        style={{ width: "200px", height: "200px", padding: 0 }}
        camera={{ fov: 45, position: [3, 3, 6] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCylinder maxValue={maxValue} coinText={content} />
      </Canvas>
    </div>
  );
}

export default Drop3D;
