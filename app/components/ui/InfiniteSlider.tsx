"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type Comment = {
    description: string;
    name: string;
}

interface Comments {
  comments: Comment[];
}

export default function InfiniteSLider({ comments }: Comments) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const scrollVelocityRef = useRef(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth / 2;
    const baseSpeed = 50;

    gsap.set(cardsRef.current, {
      y: 50,
      opacity: 0
    });

    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.6)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tweenRef.current = gsap.to(trackRef.current, {
      x: `-=${totalWidth}`,
      duration: totalWidth / baseSpeed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    const onWheel = (e: WheelEvent) => {
      scrollVelocityRef.current += Math.abs(e.deltaY);
    };

    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
      tweenRef.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const doubledImages = [...comments, ...comments];

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden pt-6 lg:pt-10 relative flex items-center`}
    >
      <div ref={trackRef} className="flex gap-4 lg:gap-6 w-fit items-stretch">
        {doubledImages.map((comment, index) => (
          <div
            ref={(el) => { cardsRef.current[index] = el; }}
            className={`w-[230px] lg:w-[330px] rounded-[10px] flex flex-col justify-between gap-2 pb-3 pt-5 lg:pt-8 px-3 md:py-5 md:px-5 bg-yellowAccent`}
            key={index}
          >
            <svg className="absolute -top-5 size-8" width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 23V13.0035C0 9.59011 0.991499 6.74558 3.05712 4.38869C5.04012 2.0318 7.51887 0.568907 10.4107 0V4.63251C7.02312 5.93286 5.37062 8.53357 5.37062 12.5972H10.4107V23H0ZM16.2771 23V13.0035C16.2771 9.59011 17.2686 6.74558 19.3342 4.38869C21.3172 2.0318 23.796 0.568907 26.6879 0V4.63251C23.3002 5.93286 21.6477 8.53357 21.6477 12.5972H26.6879V23H16.2771Z" fill="#4486BA"/>
            </svg>
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="font-secondary font-medium lg:text-lg text-black leading-5">{comment.description}</p>
            </div>
            <div className="flex flex-row justify-end items-center h-fit">
              <p className="font-primary text-base text-black tracking-[-0.03em]">{comment.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};