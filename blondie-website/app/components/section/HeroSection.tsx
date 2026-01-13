

const HeroSection = () => {
    return (
        <section className="grid-container relative h-lvh overflow-hidden">
            <div className="grid-layout relative pt-[40%]">
                <h1 className="col-span-5 text-2xl text-black font-primary font-medium tracking-[-1.137px] break-normal">The real New York Slice exprience<br />in your city</h1>
                <img src="/food/mushroom.png" alt="" className="absolute max-w-[150px] -bottom-[40%] -right-[15%] -rotate-15" />
            </div>
            <div className="grid-layout relative mt-[40%]" >
                <h2 className="col-span-5 col-start-3 font-secondary text-xl text-black tracking-[-0.852px]">Inspired by New York slice culture, crafted with local ingredients.</h2>
                <img src="/food/pepperoni.png" alt="" className="max-w-[150px] absolute -top-[50%] -left-[20%]" />
            </div>
            <img src="/food/origano.png" alt="" className="absolute -right-[5%] -bottom-[15%]" />
        </section>
    );
}

export default HeroSection;