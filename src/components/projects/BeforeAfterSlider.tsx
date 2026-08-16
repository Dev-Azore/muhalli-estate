'use client';

import { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE (Demolition / Site)',
  afterLabel = 'AFTER (Delivered Build)',
  height = '420px',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: isDragging ? 'ew-resize' : 'col-resize',
        userSelect: 'none',
        border: '1px solid var(--color-graphite-border)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(196, 154, 26, 0.92)',
          color: 'var(--color-graphite-deep)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.7rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          padding: '0.35rem 0.75rem',
          borderRadius: '2px',
          zIndex: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        {afterLabel}
      </span>

      {/* Before Image (Foreground Clipped) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${sliderPosition}%`,
          overflow: 'hidden',
          zIndex: 3,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            // We set width equal to the container width so the image doesn't squish
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
            maxWidth: 'none',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'rgba(15, 15, 20, 0.88)',
            color: 'var(--color-cream)',
            border: '1px solid var(--color-graphite-border)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            padding: '0.35rem 0.75rem',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          {beforeLabel}
        </span>
      </div>

      {/* Vertical Slider Handle Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPosition}%`,
          width: '3px',
          background: 'var(--color-gold)',
          transform: 'translateX(-50%)',
          zIndex: 10,
          boxShadow: '0 0 10px rgba(196, 154, 26, 0.8)',
          pointerEvents: 'none',
        }}
      >
        {/* Handle Button Circle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--color-gold)',
            color: 'var(--color-graphite-deep)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.6)',
            fontSize: '1rem',
            fontWeight: 700,
          }}
        >
          ↔
        </div>
      </div>
    </div>
  );
}
