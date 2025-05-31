"use client";

export type Slide = {
  title: string;
  description?: string;
  href: string;
};

export const slides: Slide[] = [
  {
    title: "Music Presentation 2024/10/24",
    description: "A presentation about music, covering various topics.",
    href: "slides/music-presentations-1024",
  },
  {
    title: "自主學習報告",
    description: "「何謂人工智慧」的簡介",
    href: "slides/self-learning-presentation",
  },
  {
    title: "語境式英文學習 App",
    description: "一個幫助學習者在語境中學習英文的應用程式",
    href: "slides/context-vocabulary-app",
  },
];
