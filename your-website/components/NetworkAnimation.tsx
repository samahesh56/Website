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
      r="2.5"
      fill="#60A5FA">
      <animate
        attributeName="r"
        values="2.5;3.5;2.5"
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        values="0.4;0.8;0.4"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
  `;

  const createConnection = (x1: number, y1: number, x2: number, y2: number) => {
    const distance = Math.hypot(x2 - x1, y2 - y1);
    const opacity = Math.max(0.15, 0.5 - (distance / 200)); // Increased base opacity
    
    return `
      <line 
        x1="${x1}" 
        y1="${y1}" 
        x2="${x2}" 
        y2="${y2}" 
        stroke="#60A5FA" 
        stroke-width="0.8"
        stroke-opacity="${opacity}"
      />
    `;
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes: Node[] = [];
    const width = 600;
    const height = 600;
    const gridSize = Math.floor(Math.sqrt(40)); // Increased to 40 nodes
    const cellWidth = width / gridSize;
    const cellHeight = height / gridSize;
    
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const offsetX = (Math.random() - 0.5) * cellWidth * 0.9;
        const offsetY = (Math.random() - 0.5) * cellHeight * 0.9;
        
        nodes.push({
          x: (i + 0.5) * cellWidth + offsetX,
          y: (j + 0.5) * cellHeight + offsetY,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6
        });
      }
    }


    const animate = () => {
      if (!svgRef.current) return;

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx!;
        node.y += node.vy!;

        // Bounce off walls with less energy loss
        if (node.x <= 0 || node.x >= width) {
            node.vx! *= -0.95; // Slight energy loss on bounce, but maintains more speed
            node.x = node.x <= 0 ? 0 : width;
        }
        if (node.y <= 0 || node.y >= height) {
            node.vy! *= -0.95;
            node.y = node.y <= 0 ? 0 : height;
        }

        if (Math.random() < 0.02) { // 2% chance each frame
            node.vx! += (Math.random() - 0.5) * 0.2;
            node.vy! += (Math.random() - 0.5) * 0.2;
          }
      });

      // Create connections
      const connections: Connection[] = [];
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 150) { // Increased from 100 to 150
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