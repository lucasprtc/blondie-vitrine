"use client";

import { useEffect, useState } from "react";
import PizzaCard from "../ui/PizzaCard";
import TextAnimation from "../ui/TextAnimation";

const pizzas = [
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

const MenuSection = () => {
    const [isLgUp, setIsLgUp] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
        setIsLgUp(window.innerWidth >= 1024); // Tailwind lg breakpoint = 1024px
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);
    return (
        <section className="grid-container grid-layout mt-10 lg:mt-[100px]">
            <TextAnimation className="col-span-12 lg:mb-5 title leading-10">
                <h3>Come taste our <span className="font-secondary">Pizza</span></h3>
            </TextAnimation>
            <div className="relative col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-12">
                <div className="hidden lg:block absolute h-full bg-black w-px right-1/2"></div>
                {pizzas.map((p, index) => {
                    const cols = isLgUp ? 2 : 1;
                    const total = pizzas.length;
                    const isLastRow = index >= total - (total % cols === 0 ? cols : total % cols);
                    const isFirstRow = index < (total % cols === 0 ? cols : total % cols);

                    return (
                    <PizzaCard
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        ingredients={p.ingredients}
                        smallPrice={p.smallPrice}
                        largePrice={p.largePrice}
                        variant={!isLgUp ? p.variant : 'left'}
                        noBorder={isLastRow} // On passe cette info au composant
                    />
                    );
                })}
            </div>
        </section>
    );
}

export default MenuSection;