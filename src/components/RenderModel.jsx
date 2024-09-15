"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]} // Adjust device pixel ratio for high-resolution displays
    >
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
      <Environment preset="dawn" /> {/* Ensure this preset is valid */}
    </Canvas>
  );
};

export default RenderModel;
