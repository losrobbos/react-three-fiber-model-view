import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Planey } from "./Planey";
import { Lightey } from "./Lightey";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const Scene = () => {
  const { scene: model } = useGLTF("./models/Robot.glb");
  // const { scene: model } = useGLTF("./models/HeroCharacter.glb");
  const refModel = useRef(model);

  useEffect(() => {
    // shrink model on load...
    refModel.current.scale.set(2, 2, 2);
  }, []);

  return (
    <div className="scene">
      {/* <Canvas camera={{ position: [1, 0.5, 4] }} shadows={true} > */}
      <Canvas shadows={true}>
        {/* PLANE mesh object */}
        <Planey />
        {/* Lighting */}
        <Lightey />
        <primitive ref={refModel} object={model} />
        {/* enable navigation in the scene with mouse */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};
