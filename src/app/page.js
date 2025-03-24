import BlurredCard from "./BlurredCard";
import Greeting from "./Greeting";
import Menu from "./MenuBar";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-screen items-center justify-center py-10">
      <div className="w-[90%] sm:w-[80%]">
        <Greeting />
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center">
            <BlurredCard href="https://jordancartledge.com.au "title="Portfolio" content="My web dev portfolio" image="/effexForge.jpg" buttonText="See my work" altText="Jordan Cartledge's Dev profile"/>

            <BlurredCard href="https://effexforge.com" title="Effex Forge" image="/effexForge.jpg" content="Building strong online foundations" buttonText="Make your mark" altText="Effex Forge logo"/>

            <BlurredCard href="https://scriptjar.jordancartledge.com.au" title="script.jar" content="A template management platform" buttonText="Open the jar" altText="🫙"/>

            <BlurredCard href="https://github.com/EffexDev" title="Github" content="My code repositories" image="/github.png" buttonText="Merge together" altText="Github logo"/>

            <BlurredCard href="https://vercel.com/effexdev-projects" title="Vercel" image="/vercel.svg" content="Frontend hosting platform" buttonText="Host a project" altText="Vercel logo"/>

            <BlurredCard href="https://railway.com/dashboard" title="Railway" content="Backend and Database Hosting" image="/railway.svg" buttonText="Create a server" altText="Railway Logo"/>

            </div>
      </div>
    </div>
  );
}
