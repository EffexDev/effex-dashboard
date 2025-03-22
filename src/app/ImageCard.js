import AnimatedButton from "./AnimatedButton";

export default function ImageCard({ title, content, image, altText, buttonText, href }) {
  return (
    <div className="relative flex flex-col flex-1 h-auto p-5 text-xl bg-white/30  shadow-2xl backdrop-blur-sm border border-black/50">
      {/* Image at the top */}
      <img src={image} alt={altText} className="w-full h-40 object-cover " />
      
      {/* Content section */}
      <div className="flex flex-col flex-1 justify-between p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-700">{content}</p>

        {/* Button at the bottom */}
        <div className="mt-4">
          <AnimatedButton href={href}>{buttonText}</AnimatedButton>
        </div>
      </div>
    </div>
  );
}
