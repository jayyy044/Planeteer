import { useMemo } from "react";

export function CircularSoundBar({
  volumeLevels = [],
  barCount = 48,
  isActive = false,
  size = 280,
  sensitivity = 1,
}) {
  const bars = useMemo(() => {
    return Array(barCount)
      .fill(0)
      .map((_, index) => {
        // Map the 12 volume levels to the bar count
        const volumeIndex = Math.floor((index / barCount) * volumeLevels.length);
        const level = volumeLevels[volumeIndex] || 0;
        
        // Apply sensitivity multiplier
        const amplifiedLevel = Math.min(1, level * sensitivity);
        const angle = (index / barCount) * 360;

        return {
          index,
          level: amplifiedLevel,
          angle,
        };
      });
  }, [volumeLevels, barCount, sensitivity]);

  const centerX = size / 2;
  const centerY = size / 2;
  const innerRadius = size * 0.32;
  const minBarLength = 8; // Minimum tick length when idle
  const maxBarLength = size * 0.18; // Max spike length

  return (
    <div
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Outer circle outline */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth={1}
        />
        
        {/* Bars/ticks radiating outward */}
        {bars.map(({ index, level, angle }) => {
          // Convert angle to radians (offset by -90 to start from top)
          const radians = ((angle - 90) * Math.PI) / 180;
          
          // Calculate bar length based on audio level
          const barLength = minBarLength + (maxBarLength - minBarLength) * level;
          
          // Start point (on the circle edge)
          const x1 = centerX + innerRadius * Math.cos(radians);
          const y1 = centerY + innerRadius * Math.sin(radians);
          
          // End point (extending outward)
          const x2 = centerX + (innerRadius + barLength) * Math.cos(radians);
          const y2 = centerY + (innerRadius + barLength) * Math.sin(radians);

          // Color based on level - gray when idle, blue/purple gradient when active
          const hue = 220 + level * 60; // Goes from blue (220) to purple (280)
          const saturation = 10 + level * 70; // More saturated when louder
          const lightness = 70 - level * 30; // Darker when louder
          const color = isActive && level > 0.05 
            ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
            : "#d1d5db"; // gray-300

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={3}
              strokeLinecap="round"
              style={{
                transition: "all 50ms ease-out",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}