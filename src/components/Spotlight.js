// src/components/Spotlight.js
import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `
          radial-gradient(
            800px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(29, 78, 216, 0.12),
            transparent 40%
          )
        `,
      }}
    />
  );
}