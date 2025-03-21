export default function Card({title, content, image, altText, buttonText}) {
    return (
        <div className="relative flex flex-col p-5 text-xl border border-gray-700 shadow-black h-50 flex-1 w-full rounded-2xl appearance-none bg-transparent text-left   transition delay-150 duration-300 ease-in-out hover:-translate-y-2  hover:transform-3d hover:bg-gray-100">
            <img src={image} alt={altText} className="max-w-20" />
            <h1>{title}</h1>
            <p>{content}</p>
            <button className="absolute bottom-3 left-3 max-w-[40%] p-2 rounded-4xl text-white bg-black" >{buttonText}</button>
        </div>
    );
}
