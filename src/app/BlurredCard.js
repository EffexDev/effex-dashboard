import AnimatedButton from "./AnimatedButton";

export default function BlurredCard({title, content, image, altText, buttonText, href}) {
    return (
        <div className="relative flex flex-col h-50 flex-1 justify-evenly p-5 text-xl bg-white/30  shadow-2xl backdrop-blur-sm border border-black/50">
            <img src={image} alt={altText} className="max-w-10 absolute top-4 right-4 rounded-lg" />
            <h1>{title}</h1>
            <p>{content}</p>
            <AnimatedButton href={href}>{buttonText}</AnimatedButton>
        </div>
    );
}
