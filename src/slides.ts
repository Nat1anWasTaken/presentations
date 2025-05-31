"use client";

export type Slide = {
  title: string;
  description?: string;
  href: string;
};

export const slides: Slide[] = [
  {
    title: "Slidev",
    description: "A powerful presentation framework",
    href: "/slides/slidev",
  },
];
