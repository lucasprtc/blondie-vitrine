"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextAnimation from "../ui/TextAnimation";

interface Pizza {
    id: string;
    image: string;
    title: string;
    ingredients: string;
    smallPrice: number;
    largePrice: number;
    variant: string;
}

const pizzas: Pizza[] = [
    {
        id: 'House pie',
        image: '/menu/housePie.jpg',
        title: 'House pie',
        ingredients: 'Tomato, mozzarella, pepperoni.',
        smallPrice: 5,
        largePrice: 9,
        variant: 'left'
    },
    {
        id: 'pepperoni',
        image: '/menu/pepperonie.jpg',
        title: 'pepperoni',
        ingredients: 'Tomato, mozzarella, provolone, pepperoni, parmesan.',
        smallPrice: 6,
        largePrice: 11,
        variant: 'right'
    },
    {
        id: 'blondie',
        image: '/menu/blondie.jpg',
        title: 'blondie',
        ingredients: 'Mozzarella, calabrian chili, garlic, aleppo pepper, maldon.',
        smallPrice: 7,
        largePrice: 13,
        variant: 'left'
    },
    {
        id: 'mushroom',
        image: '/menu/mushroom.jpg',
        title: 'mushroom',
        ingredients: 'Mozzarella, parmesan, gorgonzola, pecorino.',
        smallPrice: 8,
        largePrice: 14,
        variant: 'right'
    },
    {
        id: 'rossa',
        image: '/menu/rossa.jpg',
        title: 'rossa',
        ingredients: 'Tomato, garlic, oregano, black pepper sourdough bread crumbs.',
        smallPrice: 6,
        largePrice: 12,
        variant: 'left'
    },
    {
        id: 'special',
        image: '/menu/special.jpg',
        title: 'special',
        ingredients: 'Seasonal ingredients.',
        smallPrice: 7,
        largePrice: 13,
        variant: 'right'
    }
];


const MenuItem = ({ pizza }: { pizza: Pizza }) => {
    const container = useRef<HTMLDivElement>(null);
    const mainWrapperRef = useRef<HTMLDivElement>(null);
    const pizzaImgRef = useRef<HTMLImageElement>(null);
    const imgOriginalPos = useRef<DOMRect | null>(null);

    useEffect(() => {
        if (pizzaImgRef.current) {
            imgOriginalPos.current = pizzaImgRef.current.getBoundingClientRect();
        }
    }, []);

    const { contextSafe } = useGSAP({ scope: mainWrapperRef  });

    const onEnter = contextSafe(() => {
        gsap.set(mainWrapperRef.current, { zIndex: 50 });

        gsap.to(".ingredient-img", {
            y: 0,
            opacity: 0.5,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.05,
            overwrite: true
        });
    });

    const onLeave = contextSafe(() => {
        gsap.set(mainWrapperRef.current, { zIndex: 1 });

        gsap.to(".ingredient-img.from-top", { y: -150, opacity: 0, duration: 0.4, ease: "power2.in", overwrite: true });
        gsap.to(".ingredient-img:not(.from-top)", { y: 150, opacity: 0, duration: 0.4, ease: "power2.in", overwrite: true });

        gsap.to(pizzaImgRef.current, {
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            overwrite: true
        });
    });

    const onMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
        if (!container.current || !pizzaImgRef.current || !imgOriginalPos.current) return;

        const imgPos = imgOriginalPos.current;
        const relativeX = e.clientX;

        gsap.to(pizzaImgRef.current, {
            x: relativeX - imgPos.x - imgPos.width / 2,
            scale: 3,
            duration: 0.4,
            ease: "power2.out",
            overwrite: true
        });
    });

    return (
        <div ref={mainWrapperRef} className="h-[150px] w-full relative border-b border-black last:border-b-0">
            <div className="h-full absolute top-0 left-0 w-full z-20"
                ref={container}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onMouseMove={onMouseMove}
            ></div>
            <div 
                className="group w-full flex justify-between h-full py-6 relative cursor-pointer z-0"

            >
                <div className="absolute w-full h-full top-0 left-0">
                    <div className="relative overflow-hidden w-full h-full">
                        <img src="/food/pepper.png" alt="" className="ingredient-img from-top absolute z-0 w-[180px] -top-[50px] -left-10 opacity-0 translate-y-[-150px]" />
                        <img src="/food/basil.png" alt="" className="ingredient-img absolute z-0 w-[220px] -bottom-[50%] left-[30%] opacity-0 translate-y-[150px]" />
                        <img src="/food/pepperoni.png" alt="" className="ingredient-img from-top absolute z-0 w-[170px] -top-[60%] left-[60%] opacity-0 translate-y-[-150px]" />
                        <img src="/food/origano.png" alt="" className="ingredient-img absolute z-0 w-[150px] -bottom-[50%] -right-[2%] opacity-0 translate-y-[150px]" />
                    </div>
                </div>

                <div className="flex flex-col justify-between z-10">
                    <h3 className="text-xl md:text-3xl uppercase font-primary">{pizza.title}</h3>
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4 font-secondary text-base md:text-lg">
                        <p>{pizza.ingredients}</p>
                        <p className="font-bold">{pizza.smallPrice}€ | {pizza.largePrice}€</p>
                    </div>
                </div>
                <img
                    ref={pizzaImgRef}
                    src={pizza.image}
                    alt={pizza.title}
                    className="z-10 object-contain absolute right-0 h-[100px]"
                />
            </div>
        </div>
    );
};

const MenuSection = () => {
    return (
        <section id="menu" className="grid-container grid-layout mt-10 lg:mt-[100px] lg:pb-[100px] px-4 overflow-hidden">
            <TextAnimation className="col-span-12 lg:mb-5 title leading-10">
                <h3 className="">Come taste our <span className="font-secondary italic">Pizza</span></h3>
            </TextAnimation>
            
            <div className="col-span-12 flex flex-col border-t border-black">
                {pizzas.map((pizza) => (
                    <MenuItem key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;