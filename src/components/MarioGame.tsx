
import React, { useEffect, useRef } from 'react';

export const MarioGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const marioRef = useRef({
    x: 50,
    y: 200,
    velocityY: 0,
    isJumping: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mario = marioRef.current;
    const gravity = 0.5;
    const jumpForce = -10;
    let animationFrameId: number;

    const drawMario = () => {
      if (!ctx) return;
      ctx.fillStyle = 'red';
      ctx.fillRect(mario.x, mario.y, 30, 50);
    };

    const drawGround = () => {
      if (!ctx) return;
      ctx.fillStyle = '#5c4033';
      ctx.fillRect(0, 250, canvas.width, 50);
    };

    const updateGame = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply gravity
      mario.velocityY += gravity;
      mario.y += mario.velocityY;
      
      // Ground collision
      if (mario.y > 200) {
        mario.y = 200;
        mario.velocityY = 0;
        mario.isJumping = false;
      }
      
      drawGround();
      drawMario();
      
      animationFrameId = requestAnimationFrame(updateGame);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !mario.isJumping) {
        mario.velocityY = jumpForce;
        mario.isJumping = true;
      }
      if (e.code === 'ArrowLeft') {
        mario.x -= 5;
      }
      if (e.code === 'ArrowRight') {
        mario.x += 5;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    updateGame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#87CEEB] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={800}
        height={300}
        className="border border-[#A0A0A0]"
      />
    </div>
  );
};
