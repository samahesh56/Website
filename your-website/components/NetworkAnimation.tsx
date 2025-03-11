'use client';
import { useEffect, useRef, useState } from 'react';

const NetworkAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [deviceTier, setDeviceTier] = useState('high'); // 'low', 'medium', 'high'

  useEffect(() => {
    // Detect device capability based on screen size and memory
    const detectDeviceCapability = () => {
      // Properly access deviceMemory with type checking
      interface ExtendedNavigator extends Navigator {
        deviceMemory?: number;
      }
      
      const extendedNavigator = navigator as ExtendedNavigator;
      const memory = extendedNavigator.deviceMemory || 4; // Default to 4GB if not available
      const width = window.innerWidth;
      
      if (memory <= 2 || width < 768) return 'low';
      if (memory <= 4 || width < 1200) return 'medium';
      return 'high';
    };

    setDeviceTier(detectDeviceCapability());

    if (!svgRef.current || !containerRef.current) return;

    const nodes: {x: number, y: number, vx?: number, vy?: number}[] = [];
    let width = 0;
    let height = 0;

    const updateDimensions = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = window.innerHeight;

      const svg = svgRef.current;
      if (svg) {
        svg.setAttribute('width', width.toString());
        svg.setAttribute('height', height.toString());
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      }

      // Scale node count based on device capability
      nodes.length = 0;
      const nodeCounts = {
        low: 20,    // Fewer nodes for low-end devices
        medium: 40, // Medium for average devices
        high: 60    // Original count for high-end devices
      };
      
      const nodeCount = nodeCounts[deviceTier as keyof typeof nodeCounts];
      const gridSize = Math.floor(Math.sqrt(nodeCount));
      const cellWidth = width / gridSize;
      const cellHeight = height / gridSize;

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (nodes.length >= nodeCount) break;
          
          const offsetX = (Math.random() - 0.5) * cellWidth * 0.9;
          const offsetY = (Math.random() - 0.5) * cellHeight * 0.9;

          nodes.push({
            x: (i + 0.5) * cellWidth + offsetX,
            y: (j + 0.5) * cellHeight + offsetY,
            vx: (Math.random() - 0.5) * 0.4,  // Reduced velocity
            vy: (Math.random() - 0.5) * 0.4,  // Reduced velocity
          });
        }
      }
    };

    // Throttled animation based on device capability
    let lastRenderTime = 0;
    const throttleIntervals = {
      low: 100,     // 10fps for low-end devices
      medium: 50,   // 20fps for medium devices
      high: 16.67   // 60fps for high-end devices
    };

    const animate = (timestamp: number) => {
      if (!svgRef.current) return;
      
      const throttleInterval = throttleIntervals[deviceTier as keyof typeof throttleIntervals];
      
      // Skip frames based on device capability
      if (timestamp - lastRenderTime < throttleInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastRenderTime = timestamp;

      // Update node positions with less frequent updates
      nodes.forEach(node => {
        node.x += node.vx!;
        node.y += node.vy!;

        // Bounce off walls with energy loss
        if (node.x <= 0 || node.x >= width) {
          node.vx! *= -0.95;
          node.x = node.x <= 0 ? 0 : width;
        }
        if (node.y <= 0 || node.y >= height) {
          node.vy! *= -0.95;
          node.y = node.y <= 0 ? 0 : height;
        }

        // Less frequent random velocity changes
        if (Math.random() < 0.005) {
          node.vx! += (Math.random() - 0.5) * 0.1;
          node.vy! += (Math.random() - 0.5) * 0.1;
        }
      });

      // Reduce connection distance for lower-end devices
      const connectionDistances = {
        low: 80,
        medium: 120,
        high: 150
      };
      const maxDistance = connectionDistances[deviceTier as keyof typeof connectionDistances];

      // Create connections more efficiently
      const connections: {x1: number, y1: number, x2: number, y2: number}[] = [];
      // More efficient connection generation with reduced iterations
      const connectionSampleRate = deviceTier === 'low' ? 2 : deviceTier === 'medium' ? 1.5 : 1;
      
      for (let i = 0; i < nodes.length; i += connectionSampleRate) {
        const nodeI = nodes[Math.floor(i)];
        for (let j = i + 1; j < nodes.length; j += connectionSampleRate) {
          const nodeJ = nodes[Math.floor(j)];
          const dx = nodeI.x - nodeJ.x;
          const dy = nodeI.y - nodeJ.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            connections.push({
              x1: nodeI.x,
              y1: nodeI.y,
              x2: nodeJ.x,
              y2: nodeJ.y,
            });
          }
        }
      }

      // Batch SVG updates into a single operation for better performance
      const connectionsHTML = connections
        .map(conn => {
          const distance = Math.hypot(conn.x2 - conn.x1, conn.y2 - conn.y1);
          const opacity = Math.max(0.15, 0.5 - distance / 200);
          return `<line x1="${conn.x1}" y1="${conn.y1}" x2="${conn.x2}" y2="${conn.y2}" stroke="#60A5FA" stroke-width="0.8" stroke-opacity="${opacity}"/>`;
        })
        .join('');
      
      // Reduce the number of nodes rendered on lower-end devices
      const nodesToRender = deviceTier === 'low' ? nodes.filter((_, i) => i % 2 === 0) : nodes;
      
      const nodesHTML = nodesToRender
        .map(node => {
          return `<circle cx="${node.x}" cy="${node.y}" r="2.5" fill="#60A5FA"><animate attributeName="r" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite"/><animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/></circle>`;
        })
        .join('');

      // Set innerHTML once instead of multiple DOM operations
      svgRef.current.innerHTML = connectionsHTML + nodesHTML;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    updateDimensions();
    
    // Start animation with a short delay to allow the page to load more completely
    setTimeout(() => {
      animate(0);
    }, 200);

    // Add resize listener with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateDimensions();
        setDeviceTier(detectDeviceCapability());
      }, 250);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [deviceTier]);

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 w-full h-full overflow-hidden"
    >
      <div className="relative w-full h-full opacity-40">
        <svg
          ref={svgRef}
          className="w-full h-full"
          style={{
            filter: 'blur(0.5px)',
            transform: 'scale(1.1)',
          }}
        />
      </div>
    </div>
  );
};

export default NetworkAnimation;