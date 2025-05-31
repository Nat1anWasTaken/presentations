"use client";

import { Slide } from "@/slides";

interface PresentationCardProps {
  slide: Slide;
}

export function PresentationCard({ slide }: PresentationCardProps) {
  const { title, href } = slide;
  let { description } = slide;

  if (!(description && description.length > 0)) {
    description = "No description available.";
  }

  return (
    <div
      className={
        "bg-gray-800 \
         grid grid-cols-[2fr_1fr] \
         border-2 border-gray-700 rounded-md \
         w-xs h-32\
         hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out \
         cursor-pointer \
         overflow-hidden object-cover"
      }
      onClick={(() => (window.location.href = href)) as React.MouseEventHandler}
    >
      <div className={"pl-4 py-4 pr-0"}>
        <p className={"text-white text-xl"}>{title}</p>
        <p className={"text-gray-400"}>{description}</p>
      </div>
      <iframe className={"h-full w-full pointer-events-none"} src={href} />
    </div>
  );
}
