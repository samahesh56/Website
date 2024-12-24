// components/NetworkAnimation.tsx
'use client';
import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx?: number;
  vy?: number;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const NetworkAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number | null>(null);

const createNode = (x: number, y: number) => `
  <circle 
    cx="${x}" 
    cy="${y}" 
    r="2"
    fill="#60A5FA">
    <animate
      attributeName="r"
      values="2;3;2"
      dur="3s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="fill-opacity"
      values="0.3;1;0.3"
      dur="3s"
      repeatCount="indefinite"
    />
  </circle>
`;


  const createConnection = (x1: number, y1: number, x2: number, y2: number) => `
    <line 
      x1="${x1}" 
      y1="${y1}" 
      x2="${x2}" 
      y2="${y2}" 
      stroke="#60A5FA" 
      stroke-width="0.5" 
      stroke-opacity="0.3"
    />
  `;

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes: Node[] = [];
    const width = 600;
    const height = 600;
    
    // Create random nodes with velocity
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5, // Random velocity
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      if (!svgRef.current) return;

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx!;
        node.y += node.vy!;

        // Bounce off walls
        if (node.x <= 0 || node.x >= width) node.vx! *= -1;
        if (node.y <= 0 || node.y >= height) node.vy! *= -1;
      });

      // Create connections
      const connections: Connection[] = [];
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 100) {
            connections.push({
              x1: node.x,
              y1: node.y,
              x2: otherNode.x,
              y2: otherNode.y
            });
          }
        });
      });

      // Render
      const connectionsHTML = connections
        .map(conn => createConnection(conn.x1, conn.y1, conn.x2, conn.y2))
        .join('');
      const nodesHTML = nodes
        .map(node => createNode(node.x, node.y))
        .join('');
      
      svgRef.current.innerHTML = connectionsHTML + nodesHTML;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-40">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 600 600"
        style={{
          filter: 'blur(0.5px)',
          transform: 'scale(1.1)',
        }}
      />
    </div>
  );
};

export default NetworkAnimation;