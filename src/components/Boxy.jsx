export const Boxy = ({ object }) => {
  const { position = [0, 0, 0], color = "orange", args = [] } = object

  return (
    <mesh position={position} castShadow={true} receiveShadow={true}>
      <boxGeometry args={args} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
