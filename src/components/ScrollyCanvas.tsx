"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameCount = 120;

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const indexStr = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
        loadedImages.push(img);
      }
      imagesRef.current = loadedImages;

      if (loadedImages[0] && canvasRef.current) {
        renderFrame(0);
      }
    };

    loadImages();

    const handleResize = () => {
      if (imagesRef.current.length > 0) {
        const currentIndex = Math.floor(scrollYProgress.get() * (frameCount - 1));
        renderFrame(currentIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img || !img.complete) return;

    // Fast rendering technique: ensure native canvas resolution matches display
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesRef.current.length > 0) {
      const frameIndex = Math.floor(latest * (frameCount - 1));
      renderFrame(frameIndex);
    }
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
