"use client";

import { PresentationCard } from "@/components/slide-card";
import { slides } from "@/slides";

export default function Home() {
  return (
    <div
      className={
        "bg-gray-800 w-screen h-screen flex flex-col items-center justify-center gap-2"
      }
    >
      <p className={"text-white text-xl"}>Nathan&apos;s Presentations</p>
      <p className={"text-gray-400"}>A collection of my slidev presentations</p>
      <div className={"flex flex-col gap-2"}>
        {slides.map((slide) => (
          <PresentationCard key={slide.href} slide={slide} />
        ))}
      </div>
    </div>
  );
}
