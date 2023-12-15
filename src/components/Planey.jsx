import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const Planey = () => {
  const refPlane = useRef();

  // on each frame: rotate box
  useFrame(() => {
    // refPlane.current.rotation.y += 0.01;
    refPlane.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={refPlane} rotation-x={Math.PI / 2} receiveShadow={true} >
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial
        color={"purple"}
        wireframe="true"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};
