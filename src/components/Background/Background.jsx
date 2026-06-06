import './Background.css';

export default function Background() {
  return (
    <div className="global-bg">
      {/* Layered mesh gradient */}
      <div className="global-bg__mesh" />

      {/* Hex grid pattern */}
      <div className="global-bg__grid" />

      {/* Animated aurora orbs */}
      <div className="global-bg__orb global-bg__orb--1" />
      <div className="global-bg__orb global-bg__orb--2" />
      <div className="global-bg__orb global-bg__orb--3" />
      <div className="global-bg__orb global-bg__orb--4" />

      {/* Horizontal scan line */}
      <div className="global-bg__scanline" />

      {/* Corner HUD decorators */}
      <div className="global-bg__corner global-bg__corner--tl" />
      <div className="global-bg__corner global-bg__corner--tr" />
      <div className="global-bg__corner global-bg__corner--bl" />
      <div className="global-bg__corner global-bg__corner--br" />

      {/* Floating data streams */}
      <div className="global-bg__stream global-bg__stream--1" />
      <div className="global-bg__stream global-bg__stream--2" />
    </div>
  );
}
