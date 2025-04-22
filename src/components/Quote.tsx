"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface QuoteProps {
  text: string;
  className?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, className = "" }) => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = quoteRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [text]);

  const chars = [`\u201C`, ...text.split(""), `\u201D`]; // 加上頭尾雙引號

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div
        ref={quoteRef}
        className={`text-4xl font-semibold leading-snug text-center ${className}`}
      >
        {chars.map((char, index) => (
          <span key={index} className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Quote;
