'use client';

import { type JSX, useCallback, useEffect, useRef, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  startDelay?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  startDelay = 0,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements);
  const [displayText, setDisplayText] = useState(children);
  const isAnimatingRef = useRef(false);
  const hasTriggeredRef = useRef(false);
  const text = children;

  const scramble = useCallback(async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimatingRef.current = false;
        onScrambleComplete?.();
      }
    }, speed * 1000);
  }, [characterSet, duration, onScrambleComplete, speed, text]);

  useEffect(() => {
    if (!trigger) {
      hasTriggeredRef.current = false;
      return;
    }

    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    const timeoutId = window.setTimeout(() => {
      scramble();
    }, Math.max(startDelay, 0) * 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [trigger, scramble, startDelay]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
