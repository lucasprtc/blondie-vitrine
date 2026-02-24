interface Review {
    description: string,
    author: string
    rotation: number
}

export default function ReviewCard({description, author, rotation}: Review) {
    return (
        <div className="pt-[25px] pt-[50px] px-4 pb-4 w-[200px] md:w-[250px] aspect-square h-fit bg-[#F7F8DC] flex flex-col justify-between drop-shadow-sm">
            <p className="text-md font-secondary">{description}</p>
            <p className="text-md font-primary">{author}</p>
        </div>
    )
}