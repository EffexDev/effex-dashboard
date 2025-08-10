export default function Avatar(image) {
    return (
        <div className="bg-blue-500 h-10 w-10 rounded-full p-1">
            <img src={image} className="w-9 h-9"/>
        </div>
    )
}