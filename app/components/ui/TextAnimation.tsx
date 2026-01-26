"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  start?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  start = "top 70%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const isMobile = window.innerWidth < 720;
    const yValue = isMobile ? 20 : 50;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: yValue,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'back.out(0.8)',
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Nettoyage
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, start]);

  return (
    <div ref={containerRef} className={className}>
      {children || text}
    </div>
  );
};

export default AnimatedText;