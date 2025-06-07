'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Html, Environment } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

const Lights = () => {
  const ledStrip = useRef<THREE.PointLight>(null!);
  
  useFrame(({ clock }) => {
    ledStrip.current.intensity = Math.sin(clock.elapsedTime * 5) * 0.3 + 0.7;
  });

  return (
    <>
      <ambientLight intensity={1.5} color={0xffffff} />
      <pointLight
        position={[0, 3, 2]}
        intensity={3}
        color={0xfff4e6}
        castShadow
        distance={8}
        decay={1.5}
      />
      <pointLight
        ref={ledStrip}
        position={[0, 1.5, -0.5]}
        intensity={1}
        color={0xff0000}
        decay={2}
      />
      <Environment preset="sunset" background blur={0.8} />
    </>
  );
};

const Cabin = () => {
  const doorRef = useRef<THREE.Mesh>(null!);
  const [open, setOpen] = useState(true); // Inicia abierto
  const { camera } = useThree();
  const ledRefs = useRef<THREE.Mesh[]>([]);
  
  // Dimensiones
  const width = 2, depth = 1.5, height = 3.2, wallThickness = 0.08;
  const doorWidth = 0.6;

  // Texturas
  const [metalTexture, normalMap] = useTexture([
    '/textures/metal_plate_clean_2k.jpg',
    '/textures/metal_plate_nor_gl_2k.png'
  ]);

  // Materiales
  const materials = useMemo(() => ({
    exterior: new THREE.MeshStandardMaterial({
      map: metalTexture,
      normalMap: normalMap,
      metalness: 0.97,
      roughness: 0.1,
      envMapIntensity: 1.2
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0x88aaff,
      transmission: 0.95,
      opacity: 0.8,
      transparent: true,
      roughness: 0.02,
      thickness: 0.2
    }),
    led: new THREE.MeshStandardMaterial({
      emissive: new THREE.Color(1, 0.2, 0.1),
      emissiveIntensity: 5,
      toneMapped: false
    })
  }), [metalTexture, normalMap]);

  // Animación inicial automática
  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    
    // Efecto LED inicial
    const initialIntensity = Math.min(time * 5, 3);
    ledRefs.current.forEach(led => {
      if (led.material) {
        (led.material as THREE.MeshStandardMaterial).emissiveIntensity = initialIntensity;
      }
    });

    // Animación suave de apertura
    doorRef.current.rotation.y = THREE.MathUtils.lerp(
      doorRef.current.rotation.y,
      open ? -Math.PI / 1.8 : 0,
      0.1
    );

    // Movimiento de cámara cinemático
    camera.position.lerp(
      new THREE.Vector3(
        Math.sin(time * 0.3) * 4 + 2,
        Math.cos(time * 0.2) * 1 + 3,
        Math.cos(time * 0.3) * 4 + 3
      ),
      0.05
    );
    camera.lookAt(0, height * 0.4, 0);
  });

  // Sistema de LEDs inicial
  const createLEDSystem = () => {
    const leds = [];
    const count = 16;
    const verticalSpacing = (height - 0.5) / count;

    for (let i = 0; i < count; i++) {
      leds.push(
        <mesh
          key={`led-${i}`}
          ref={ref => ref && ledRefs.current.push(ref)}
          position={[-width/2 + 0.05, 0.25 + i * verticalSpacing, -depth/2 + 0.01]}
          material={materials.led}
        >
          <sphereGeometry args={[0.03, 16, 16]} />
        </mesh>
      );
      leds.push(
        <mesh
          key={`led-mirror-${i}`}
          ref={ref => ref && ledRefs.current.push(ref)}
          position={[width/2 - 0.05, 0.25 + i * verticalSpacing, -depth/2 + 0.01]}
          material={materials.led}
        >
          <sphereGeometry args={[0.03, 16, 16]} />
        </mesh>
      );
    }
    return leds;
  };

  return (
    <group>
      {/* Estructura principal */}
      <mesh position={[0, height/2, 0]} geometry={new THREE.BoxGeometry(width, height, depth)} material={materials.exterior} />

      {/* Puerta con animación inicial */}
      <mesh ref={doorRef} position={[0, height * 0.45, depth/2 + 0.01]}>
        <boxGeometry args={[doorWidth, height * 0.85, wallThickness]} />
        <meshStandardMaterial {...materials.exterior} />
        <mesh position={[doorWidth/2 - 0.1, 0, -0.02]}>
          <cylinderGeometry args={[0.04, 0.04, 0.06, 32]} />
          <meshStandardMaterial color={0x444444} metalness={0.9} roughness={0.2} />
        </mesh>
      </mesh>

      {/* Ventana holográfica */}
      <mesh position={[0, height * 0.45, depth/2 + 0.02]} material={materials.glass}>
        <boxGeometry args={[doorWidth * 0.85, height * 0.4, wallThickness * 0.3]} />
      </mesh>

      {/* Sistema de LEDs inicializado */}
      {createLEDSystem()}
    </group>
  );
};

const QuantumCabinScene = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas
        shadows
        camera={{ position: [5, 4, 7], fov: 50 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
        }}
      >
        <color attach="background" args={['#030303']} />
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />
        <Lights />
        <OrbitControls
          enableDamping
          dampingFactor={0.03}
          minDistance={4}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={0.8}
        />
        <Cabin />
      </Canvas>
    </div>
  );
};

export default dynamic(() => Promise.resolve(QuantumCabinScene), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="animate-pulse text-3xl text-red-500 font-bold">
        ACTIVANDO SISTEMAS...
      </div>
    </div>
  )
});