import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticleNetwork = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { nodes, edges } = useMemo(() => {
    // Generate fewer nodes on mobile to significantly boost performance
    const numNodes = isMobile ? 15 : 40;
    
    const generatedNodes = Array.from({ length: numNodes }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));

    const generatedEdges = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        // Reduced edge probability on mobile
        const probability = isMobile ? 0.90 : 0.85; 
        if (Math.random() > probability) {
          generatedEdges.push({ id: `${i}-${j}`, from: generatedNodes[i], to: generatedNodes[j] });
        }
      }
    }
    
    return { nodes: generatedNodes, edges: generatedEdges };
  }, [isMobile]);

  return (
    <div className="absolute inset-0 right-0 left-auto w-full md:w-[60%] h-full overflow-hidden opacity-30 pointer-events-none z-0">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      >
        <g stroke="rgba(255, 107, 74, 0.2)" strokeWidth="0.2">
          {edges.map((edge) => (
            <motion.line
              key={edge.id}
              x1={`${edge.from.x}%`}
              y1={`${edge.from.y}%`}
              x2={`${edge.to.x}%`}
              y2={`${edge.to.y}%`}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: Math.random() * 4 + 2, repeat: Infinity }}
            />
          ))}
        </g>
        <g fill="#FF6B4A">
          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size / 5}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  );
};

export default ParticleNetwork;
