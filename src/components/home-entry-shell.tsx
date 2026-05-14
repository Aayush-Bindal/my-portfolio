"use client";

import { HomePageContent } from "@/components/home-page-content";
import { DATA } from "@/data/resume";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";
import { SpiralLoader } from "@/components/ui/spiral-loader";
import { useEffect, useState } from "react";

export function HomeEntryShell() {
  const [entered, setEntered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const waitForWindowLoad = () =>
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
          resolve();
          return;
        }

        const onLoad = () => resolve();
        window.addEventListener("load", onLoad, { once: true });
      });

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });

    const loadCriticalAssets = async () => {
      const imageSources = [
        DATA.avatarUrl,
        ...DATA.work.map((item) => item.logoUrl),
        ...DATA.education.map((item) => item.logoUrl),
        ...DATA.projects.map((item) => item.image).filter(Boolean),
        ...DATA.hackathons.map((item) => item.image).filter(Boolean),
      ];

      const uniqueImageSources = Array.from(new Set(imageSources));

      const fontsReady = "fonts" in document ? document.fonts.ready : Promise.resolve();

      await Promise.all([
        waitForWindowLoad(),
        fontsReady,
        Promise.all(uniqueImageSources.map((src) => preloadImage(src))),
      ]);
    };

    const fallbackTimer = window.setTimeout(() => {
      if (!isCancelled) setIsReady(true);
    }, 12000);

    loadCriticalAssets().finally(() => {
      if (!isCancelled) setIsReady(true);
      window.clearTimeout(fallbackTimer);
    });

    return () => {
      isCancelled = true;
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      {!entered ? <SpiralLoader onEnter={() => setEntered(true)} isReady={isReady} /> : null}
      {entered ? (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <FluidParticlesBackground
            particleCount={900}
            className="h-full w-full bg-transparent"
          />
        </div>
      ) : null}
      <div className="relative z-10">
        <HomePageContent entered={entered} />
      </div>
    </>
  );
}
