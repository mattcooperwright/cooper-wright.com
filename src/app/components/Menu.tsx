import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export function Menu() {
  const [bgColor, setBgColor] = useState('');

  const COLORS = [
    '#FF6B35',  // Coral
    '#004E89',  // Deep blue
    '#F7B801',  // Golden yellow
    '#1A535C',  // Dark teal
    '#FF0054',  // Hot pink
    '#6A4C93',  // Purple
  ];

  useEffect(() => {
    // Pick random color on mount
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setBgColor(randomColor);
  }, []);

  const menuItems = [
    { label: 'Sitting in a Room', to: '/sitting-in-a-room' },
    { label: 'Making is Thinking', to: '/making-is-thinking' },
    { label: 'More', to: '/' },
    { label: 'Stuff soon', to: '/contact.html' },
  ];

  return (
    <div
      className="fixed top-5 right-5 bottom-5 w-[20%] z-40 overflow-y-auto"
      style={{ backgroundColor: bgColor }}
    >
      <nav className="flex flex-col items-start justify-center h-full px-8">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-white text-2xl block hover:opacity-70 transition-opacity"
                style={{ fontWeight: 400 }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}