import Card from "./card";
import DeepSeek from "./DeepSeek";
import Greeting from "./Greeting";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden">
      <div>
        <Greeting />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="w-[80vw] flex flex-row gap-4">
            <Card title="Youtube" content="Video watching platform"/>
            <Card title="Youtube" content="Video watching platform"/>
            <Card title="Youtube" content="Video watching platform" image="/youtube.png" buttonText="Watch videos" altText="Youtube Logo"/>
          </div>
          <div className="w-[80vw] flex flex-row gap-4 mt-4">
             <Card title="Youtube" content="Video watching platform"/>
            <Card title="Youtube" content="Video watching platform"/>
            <Card title="Youtube" content="Video watching platform" image="/youtube.png" buttonText="Watch videos" altText="Youtube Logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}
