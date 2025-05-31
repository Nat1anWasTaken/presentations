import { PresentationCard } from "@/components/presentation-card";

export default function Home() {
  return (
    <div
      className={
        "bg-gray-800 w-screen h-screen flex flex-col items-center justify-center "
      }
    >
      <div className={"flex flex-col gap-2"}>
        <PresentationCard title={"hello world"} description="" />
      </div>
    </div>
  );
}
