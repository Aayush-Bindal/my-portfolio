"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
  trigger?: boolean;
}

export function Typewriter({
  words,
  speed = 100,
  cursor = true,
  cursorChar = "|",
  trigger = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasTriggered, setHasTriggered] = useState(false);

  const currentWord = words[wordIndex] ?? "";

  useEffect(() => {
    if (!trigger) {
      setDisplayText("");
      setWordIndex(0);
      setCharIndex(0);
      setHasTriggered(false);
      return;
    }

    if (hasTriggered) return;

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (wordIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setWordIndex((prev) => prev + 1);
      }, 550);
      return () => clearTimeout(timeout);
    }

    setHasTriggered(true);
  }, [charIndex, currentWord, hasTriggered, speed, trigger, wordIndex, words.length]);

  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <div className="inline-block">
      <span>
        {displayText}
        {cursor && (
          <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  );
}
