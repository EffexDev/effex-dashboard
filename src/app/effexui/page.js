import ImageCard from "../ImageCard";
import Greeting from "../Greeting";
import Menu from "../MenuBar";
import AnimatedButton from "../AnimatedButton";
import BlurredCard from "../BlurredCard";

export default function Services() {
  return (
    <div className="relative flex flex-col w-full items-center sm:h-screen justify-center pt-10">
      <div className="w-[90%] sm:w-[80%]">
        <Greeting />
        <Menu />
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center">
          <ImageCard href="https://jordancartledge.com.au "title="Portfolio" content="My web dev portfolio" image="/cityScapeDark.jpg" buttonText="See my work" altText="Jordan Cartledge's Dev profile" />

            <BlurredCard href="https://effexforge.com" title="Effex Forge" image="/effexForge.jpg" content="Building strong online foundations" buttonText="Make your mark" altText="Effex Forge logo"/>

            <Menu />

          <AnimatedButton href="https://github.com/effexdev">Test Button</AnimatedButton>
        </div>
      </div>
    </div>
  );
}
