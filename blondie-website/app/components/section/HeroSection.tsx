

const HeroSection = () => {
    return (
        <section className="px-4 lg:px-0 relative h-lvh lg:h-fit overflow-hidden">
            <div className="grid-layout items-center relative pt-[40%] lg:pt-[10%]">
                <div className="hidden lg:block h-px bg-black col-span-2"></div>
                <h1 className="col-span-5 lg:col-span-8 text-2xl lg:text-5xl lg:text-center text-black font-primary font-medium tracking-[-0.03em] break-normal lg:leading-22">
                The real New York Slice
                <br className="hidden lg:block" />
                exprience in your city
                </h1>
            <div className="hidden lg:block h-px bg-black col-span-2"></div>
                <img src="/food/mushroom.png" alt="" className="absolute max-w-[150px] -bottom-[40%] -right-[15%] -rotate-15 lg:hidden" />
            </div>
            <div className="relative grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 lg:gap-y-1 mt-[40%] lg:mt-[60px]" >
                <h2 className="col-span-5 lg:col-start-5 lg:col-span-6 col-start-3 font-secondary text-xl text-black tracking-[-0.852px]">Inspired by New York slice culture, crafted with local ingredients.</h2>

                <div className="hidden lg:block relative col-span-6 col-start-4">
                    <img src="/picture/homepage-1.png" alt="" className="w-full object-cover z-10 relative" />
                    <img src="/food/pepper.png" alt="" className="z-0 w-full max-w-[220px] absolute -top-[5%] -left-[15%] opacity-60" />
                    <img src="/food/basil.png" alt="" className="z-0 max-w-[175px] w-full -scale-y-100 transform absolute top-[25%] rotate-180 -left-[10%] opacity-60" />
                    <img src="/food/mushroom.png" alt="" className="z-0 max-w-[150px] rotate-35 absolute -top-[5%] -right-[10%] opacity-60" />
                    <img src="/food/origano.png" alt="" className="z-0 max-w-[200px] w-full object-cover -scale-y-100 transform rotate-180 absolute top-[20%] -right-[15%] opacity-60" />
                </div>

                <img src="/food/pepperoni.png" alt="" className="max-w-[150px] absolute -top-[50%] -left-[20%] lg:hidden" />

            </div>
            <img src="/food/origano.png" alt="" className="absolute -right-[5%] -bottom-[15%]" />
        </section>
    );
}

export default HeroSection;