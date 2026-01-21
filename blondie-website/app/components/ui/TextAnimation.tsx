"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  text?: string; // Maintenant optionnel
  children?: ReactNode; // Pour accepter des éléments enfants
  className?: string;
  delay?: number;
  duration?: number;
  start?: string; // Position de déclenchement (ex: "top 80%")
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

    // Animation GSAP avec ScrollTrigger
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
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
          // markers: true, // Décommenter pour debug
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
