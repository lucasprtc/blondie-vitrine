"use client";

import { useRef } from "react";
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
        image: '/pizzas/pepperonie.png',
        title: 'House pie',
        ingredients: 'Tomato, mozzarella, pepperoni.',
        smallPrice: 5,
        largePrice: 9,
        variant: 'left'
    },
    {
        id: 'pepperoni',
        image: '/pizzas/pepperonie.png',
        title: 'pepperoni',
        ingredients: 'Tomato, mozzarella, provolone, pepperoni, parmesan.',
        smallPrice: 6,
        largePrice: 11,
        variant: 'right'
    },
    {
        id: 'blondie',
        image: '/pizzas/pepperonie.png',
        title: 'blondie',
        ingredients: 'Mozzarella, calabrian chili, garlic, aleppo pepper, maldon.',
        smallPrice: 7,
        largePrice: 13,
        variant: 'left'
    },
    {
        id: 'mushroom',
        image: '/pizzas/pepperonie.png',
        title: 'mushroom',
        ingredients: 'Mozzarella, parmesan, gorgonzola, pecorino.',
        smallPrice: 8,
        largePrice: 14,
        variant: 'right'
    },
    {
        id: 'rossa',
        image: '/pizzas/pepperonie.png',
        title: 'rossa',
        ingredients: 'Tomato, garlic, oregano, black pepper sourdough bread crumbs.',
        smallPrice: 6,
        largePrice: 12,
        variant: 'left'
    },
    {
        id: 'special',
        image: '/pizzas/pepperonie.png',
        title: 'special',
        ingredients: 'Seasonal ingredients.',
        smallPrice: 7,
        largePrice: 13,
        variant: 'right'
    }
];


const MenuItem = ({ pizza }: { pizza: Pizza }) => {
    const container = useRef<HTMLDivElement>(null);
    
    const { contextSafe } = useGSAP({ scope: container });

    const onEnter = contextSafe(() => {
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
        gsap.to(".ingredient-img.from-top", { y: -150, opacity: 0, duration: 0.4, ease: "power2.in", overwrite: true });
        gsap.to(".ingredient-img:not(.from-top)", { y: 150, opacity: 0, duration: 0.4, ease: "power2.in", overwrite: true });
    });

    return (
        <div 
            ref={container}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="group w-full flex justify-between h-[150px] py-6 relative overflow-hidden cursor-pointer border-b border-black last:border-b-0"
        >
            <img src="/food/pepper.png" alt="" className="ingredient-img from-top absolute z-0 w-[180px] -top-[50px] -left-[40px] opacity-0 translate-y-[-150px]" />
            <img src="/food/basil.png" alt="" className="ingredient-img absolute z-0 w-[220px] -bottom-[50%] left-[30%] opacity-0 translate-y-[150px]" />
            <img src="/food/pepperoni.png" alt="" className="ingredient-img from-top absolute z-0 w-[170px] -top-[60%] left-[60%] opacity-0 translate-y-[-150px]" />
            <img src="/food/origano.png" alt="" className="ingredient-img absolute z-0 w-[150px] -bottom-[50%] -right-[2%] opacity-0 translate-y-[150px]" />

            <div className="flex flex-col justify-between z-10">
                <h3 className="text-3xl uppercase font-primary">{pizza.title}</h3>
                <div className="flex gap-4 font-secondary text-lg">
                    <p>{pizza.ingredients}</p>
                    <p className="font-bold">{pizza.smallPrice}€ | {pizza.largePrice}€</p>
                </div>
            </div>
            <img src={pizza.image} alt={pizza.title} className="z-10 object-contain" />
        </div>
    );
};

const MenuSection = () => {
    return (
        <section id="menu" className="grid-container grid-layout mt-10 lg:mt-[100px] px-4">
            <TextAnimation className="col-span-12 lg:mb-5 title leading-10">
                <h3 className="text-4xl">Come taste our <span className="font-secondary italic">Pizza</span></h3>
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