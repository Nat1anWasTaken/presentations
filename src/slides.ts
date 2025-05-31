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
];
