import React from 'react';
import { motion } from 'framer-motion';

const ParticleNetwork = () => {
  // Generate random points for the network
  const numNodes = 40;
  const nodes = Array.from({ length: numNodes }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }));

  const edges = [];
  for (let i = 0; i < numNodes; i++) {
    for (let j = i + 1; j < numNodes; j++) {
      if (Math.random() > 0.85) {
        edges.push({ id: `${i}-${j}`, from: nodes[i], to: nodes[j] });
      }
    }
  }

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
