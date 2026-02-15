"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  color: string;
}

export function GradientBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const colors = [
      "from-blue-400/20 to-purple-400/20",
      "from-purple-400/20 to-pink-400/20",
      "from-cyan-400/20 to-blue-400/20",
      "from-pink-400/20 to-orange-400/20",
      "from-teal-400/20 to-cyan-400/20",
      "from-indigo-400/20 to-purple-400/20",
    ];

    const newBubbles: Bubble[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 300 + 150, // 150-450px
      left: Math.random() * 100, // 0-100%
      top: Math.random() * 100, // 0-100%
      delay: Math.random() * 5, // 0-5s
      duration: Math.random() * 10 + 15, // 15-25s
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} blur-3xl opacity-60 dark:opacity-40 animate-float`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
