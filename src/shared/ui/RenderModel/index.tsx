import { ReactElement, Suspense } from 'react';
import { Environment, RandomizedLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export const RenderModel = ({ children }: { children: ReactElement }) => {
  return (
    <Canvas shadows={false} dpr={[1, 2]}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset='sunset' environmentIntensity={0.6}/>
    </Canvas>
  );
};
