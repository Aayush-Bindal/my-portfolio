"use client";

import { useEffect, useState } from "react";

type AutoplayVideoProps = {
  src: string;
  className?: string;
};

export function AutoplayVideo({ src, className }: AutoplayVideoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <video src={src} autoPlay loop muted playsInline className={className} />;
}
