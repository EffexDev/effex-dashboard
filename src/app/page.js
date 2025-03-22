import Card from "./card";
import Greeting from "./Greeting";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full items-center sm:h-screen justify-center py-5">
      <div className="w-[90%] sm:w-[80%]">
        <Greeting />
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center">
            <Card href="https://jordancartledge.com.au "title="Portfolio" content="My web dev portfolio" image="/effexForge.jpg" buttonText="See my work" altText="Jordan Cartledge's Dev profile"/>

            <Card href="https://effexforge.com" title="Effex Forge" image="/effexForge.jpg" content="Building strong online foundations" buttonText="Make your mark" altText="Effex Forge logo"/>

            <Card href="https://scriptjar.jordancartledge.com.au" title="script.jar" content="A template management platform" buttonText="Open the jar" altText="🫙"/>

            <Card href="https://github.com/EffexDev" title="Github" content="My code repo" image="/github.png" buttonText="Merge together" altText="Github logo"/>

            <Card title="Youtube" content="Video watching platform"/>

            <Card title="Youtube" content="Video watching platform" image="/youtube.png" buttonText="Watch videos" altText="Youtube Logo"/>

            </div>
      </div>
    </div>
  );
}
