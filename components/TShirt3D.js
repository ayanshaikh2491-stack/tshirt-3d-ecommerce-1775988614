import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const TShirt3D = ({ color = 'blue' }) => {
  return (
    <Canvas className="w-full h-64">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2.5, 0.15]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Left Sleeve */}
      <mesh position={[-1.3, 0.3, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.7, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Right Sleeve */}
      <mesh position={[1.3, 0.3, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.7, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Collar */}
      <mesh position={[0, 1.5, 0]}>
        <torusGeometry args={[0.25, 0.08, 16, 100, 3.14]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Canvas>
  );
};

export default TShirt3D;
