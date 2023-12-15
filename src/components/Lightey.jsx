 export const Lightey = () => {
  return (
    <>
      <directionalLight position={[0, 5, 3]} intensity={5} castShadow={true} />
      {/* <ambientLight position={[0,2,1]} intensity={3}/> */}
      {/* <spotLight position={[0, 4, 1]} intensity={30} castShadow={true}/> */}
    </>
  );
};
