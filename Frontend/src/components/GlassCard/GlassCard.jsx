import React from 'react';
import './GlassCard.css';

const GlassCard = ({ 
  children, 
  className = '',
  blurAmount = 5,
  bgOpacity = 0.0,
  contentBgOpacity = 0,
  borderOpacity = 0.025,
  noiseOpacity = 0.08,
  borderRadius = 18,
  ...props 
}) => {

  return (
    <div
      className={`glass-card-wrapper ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
      {...props}
    >
      {/* Glassmorphic backdrop */}
      <div 
        className="glass-card-backdrop"
        style={{
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
          borderRadius: `${borderRadius}px`
        }}
      ></div>

      {/* Border effect */}
      <div 
        className="glass-card-border-glow"
        style={{
          borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
          borderRadius: `${borderRadius}px`
        }}
      ></div>

      {/* Noise texture overlay */}
      <div 
        className="glass-card-noise"
        style={{ opacity: noiseOpacity }}
      ></div>

      {/* Content container */}
      <div 
        className="glass-card-content"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${contentBgOpacity})`,
          borderRadius: `${borderRadius}px`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
