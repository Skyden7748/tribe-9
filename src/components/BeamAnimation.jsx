import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BeamAnimation.css"; // Ensure this CSS file is linked

export const BeamAnimation = ({ beams, children, className }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  return (
    <div ref={parentRef} className={`background-container ${className}`}>
      {beams.map((beam, idx) => (
        <AnimatedBeam key={idx} beamOptions={beam} containerRef={containerRef} />
      ))}
      {children}
      <div ref={containerRef} className="collision-container"></div>
    </div>
  );
};

const AnimatedBeam = ({ beamOptions, containerRef }) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          setCollision(true);
        }
      }
    };

    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (collision) {
      setTimeout(() => setCollision(false), 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        ref={beamRef}
        initial={{ translateY: "-200px", translateX: beamOptions.initialX }}
        animate={{ translateY: "1800px", translateX: beamOptions.translateX }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          ease: "linear",
          delay: beamOptions.delay || 0,
        }}
        className={`beam ${beamOptions.className}`}
      />
      <AnimatePresence>
        {collision && <Explosion />}
      </AnimatePresence>
    </>
  );
};

const Explosion = () => {
  const particles = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    directionX: Math.random() * 80 - 40,
    directionY: Math.random() * -50 - 10,
  }));

  return (
    <div className="explosion">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="blur-effect"
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{ x: 0, y: 0 }}
          animate={{ x: particle.directionX, y: particle.directionY, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};
