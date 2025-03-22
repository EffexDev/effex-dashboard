import AnimatedButton from "./AnimatedButton";

export default function Card({title, content, image, altText, buttonText, href}) {
    return (
        <div className="relative flex flex-col justify-evenly p-5 text-xl border border-gray-700 shadow-black h-50 flex-1 w-full rounded-2xl appearance-none bg-transparent text-left   hover:bg-gray-100">
            <img src={image} alt={altText} className="max-w-10" />
            <h1>{title}</h1>
            <p>{content}</p>
            <AnimatedButton href={href}>{buttonText}</AnimatedButton>
        </div>
    );
}
