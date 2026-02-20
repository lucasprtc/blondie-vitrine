interface Review {
    description: string,
    author: string
    rotation: number
}

export default function ReviewCard({description, author, rotation}: Review) {
    return (
        <div style={{ transform: `rotate(${rotation}deg)` }} className="pt-[50px] px-4 pb-4 w-[250px] aspect-square bg-[#F7F8DC] flex flex-col justify-between drop-shadow-sm">
            <p className="text-md font-secondary">{description}</p>
            <p className="text-md font-primary">{author}</p>
        </div>
    )
}