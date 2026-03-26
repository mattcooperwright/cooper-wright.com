import { BrowserRouter, Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { GeometricShape } from './components/GeometricShape';
import { Menu } from './components/Menu';
import { IAmSittingInARoom } from './pages/IAmSittingInARoom';

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'rectangle' | 'quarterCircle' | 'halfCircle';
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
}

const COLORS = [
  '#FF6B35', // Coral
  '#004E89', // Deep blue
  '#F7B801', // Golden yellow
  '#1A535C', // Dark teal
  '#FF0054', // Hot pink
  '#6A4C93', // Purple
];

/**
 * The original design moved into a sub-component
 * so it only shows up on the "/" path.
 */
function HomePage() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const numberOfShapes = Math.floor(Math.random() * 5) + 6;
      const newShapes: Shape[] = [];

      for (let i = 0; i < numberOfShapes; i++) {
        const types: Shape['type'][] = ['circle', 'square', 'rectangle', 'quarterCircle', 'halfCircle'];
        newShapes.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 500 + 300,
          rotation: Math.random() * 360,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <GeometricShape key={shape.id} {...shape} />
        ))}
      </div>

      {/* Main content - business card layout */}
      <div className="relative z-10 flex items-center justify-start h-full px-16 md:px-24 lg:px-32">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-tight mb-8 whitespace-nowrap" style={{ fontWeight: 400 }}>
            Matt Cooper-Wright
          </h1>
          <div className="text-[clamp(1.2rem,2.5vw,2.5rem)] leading-tight tracking-wide mb-2" style={{ fontWeight: 400 }}>
            Executive Design Director
          </div>
          <div className="text-[clamp(1.2rem,2.5vw,2.5rem)] leading-tight tracking-wide" style={{ fontWeight: 400 }}>
            IDEO
          </div>
        </div>
      </div>

      {/* Menu - Shared across the home page */}
      <Menu />
    </div>
  );
}

/**
 * The Main App component handling the Routing logic
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The main landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Sitting in a Room – integrated from subfolder */}
        <Route path="/sitting-in-a-room" element={<IAmSittingInARoom />} />

        {/* 404 catch-all */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}