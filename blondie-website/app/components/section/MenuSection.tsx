import PizzaCard from "../ui/PizzaCard";

const pizzas = [
    {
        id: 'pepperoni',
        image: '/pizzas/pepperonie.png',
        title: 'Pepperoni',
        ingredients: 'Tomato, mozzarella, pepperoni.',
        smallPrice: 5,
        largePrice: 9,
        variant: 'right'
    },
    {
        id: 'margherita',
        image: '/pizzas/pepperonie.png',
        title: 'Margherita',
        ingredients: 'Tomato, mozzarella, basil.',
        smallPrice: 6,
        largePrice: 11,
        variant: 'left'
    },
    {
        id: 'bbq-chicken',
        image: '/pizzas/pepperonie.png',
        title: 'BBQ Chicken',
        ingredients: 'BBQ sauce, chicken, red onion, mozzarella.',
        smallPrice: 7,
        largePrice: 13,
        variant: 'right'
    },
    {
        id: 'four-cheese',
        image: '/pizzas/pepperonie.png',
        title: 'Four Cheese',
        ingredients: 'Mozzarella, parmesan, gorgonzola, pecorino.',
        smallPrice: 8,
        largePrice: 14,
        variant: 'left'
    },
    {
        id: 'veggie',
        image: '/pizzas/pepperonie.png',
        title: 'Veggie Delight',
        ingredients: 'Tomato, bell peppers, olives, mushrooms.',
        smallPrice: 6,
        largePrice: 12,
        variant: 'right'
    },
    {
        id: 'hawaiian',
        image: '/pizzas/pepperonie.png',
        title: 'Hawaiian',
        ingredients: 'Tomato, mozzarella, ham, pineapple.',
        smallPrice: 7,
        largePrice: 13,
        variant: 'left'
    }
];

const MenuSection = () => {
    return (
        <section className="grid-container grid-layout">
            <h3 className="col-span-6 font-medium text-xl text-right tracking-[-0.03em]">Come taste our <span className="font-secondary">Pizza</span></h3>
            <div className="col-span-6 grid grid-cols-1 gap-6">
                {pizzas.map((p) => (
                    <PizzaCard
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        ingredients={p.ingredients}
                        smallPrice={p.smallPrice}
                        largePrice={p.largePrice}
                        variant={p.variant}
                    />
                ))}
            </div>
        </section>
    );
}

export default MenuSection;