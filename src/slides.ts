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
    href: "music-presentation-2024-10-24",
  },
  {
    title: "Physics Presentation 2024/10/16",
    description: "The physics report for Group 11 on 2024/10/16.",
    href: "physics-report-2024-10-16",
  },
  {
    title: "自主學習報告",
    description: "「何謂人工智慧」的簡介",
    href: "self-learning-presentation",
  },
];
