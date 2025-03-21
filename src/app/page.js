import Card from "./card";
import { Meteors } from "@/components/magicui/meteors";
export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Meteors in the background */}
      <Meteors number={30} className="absolute inset-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">Google Search</div>
        <div className="w-[80vw] flex flex-row gap-4">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-[80vw] flex flex-row gap-4 mt-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
