"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface QuoteProps {
  text: string;
  className?: string;
}
const START_QUOTE = "\u201C";
const END_QUOTE = "\u201D";

const Quote: React.FC<QuoteProps> = ({ text, className = "" }) => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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

  const chars = [START_QUOTE, ...text.split(""), END_QUOTE]; // 加上頭尾雙引號

  return (
    <div
      ref={quoteRef}
      className={`text-white text-[48px]  max-w-[720px] text-center ${className}`}
    >
      {chars.map((char, index) => (
        <span key={index} className="letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default Quote;
