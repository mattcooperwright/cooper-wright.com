interface GeometricShapeProps {
  type: 'circle' | 'square' | 'rectangle' | 'quarterCircle' | 'halfCircle';
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
}

export function GeometricShape({ type, x, y, size, rotation, color }: GeometricShapeProps) {
  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: type === 'rectangle' ? `${size * 0.5}px` : `${size}px`,
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
    backgroundColor: color,
    opacity: 0.8,
  };

  if (type === 'circle') {
    return <div style={{ ...style, borderRadius: '50%' }} />;
  }

  if (type === 'square') {
    return <div style={style} />;
  }

  if (type === 'rectangle') {
    return <div style={style} />;
  }

  if (type === 'quarterCircle') {
    return (
      <div
        style={{
          ...style,
          borderRadius: '0 0 100% 0',
          backgroundColor: color,
        }}
      />
    );
  }

  if (type === 'halfCircle') {
    return (
      <div
        style={{
          ...style,
          borderRadius: '50% 50% 0 0',
          backgroundColor: color,
        }}
      />
    );
  }

  return null;
}