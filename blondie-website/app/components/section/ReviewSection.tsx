import InfiniteSLider from "../ui/InfiniteSlider";

const Reviews = [
    {
        description: "Best pizza in town! The crust was perfectly crispy and the toppings were fresh and flavorful. Can't wait to come back for more.",
        name: "John Devis"
    },
    {
        description: "Very good pizza and loved being able to buy it by the slice so you can try several different flavors. Be ready to wait for a table because it’s always busy!",
        name: "Nichole Starkman"
    },
    {
        description: "Best pizza in town! The crust was perfectly crispy and the toppings were fresh and flavorful",
        name: "Walter Holland"
    },
    {
        description: "Best pizza in town! Can't wait to come back for more.",
        name: "Jessica Williams"
    },
    {
        description: "Best pizza in town! The crust was perfectly crispy and the toppings were fresh and flavorful. Can't wait to come back for more.",
        name: "John D."
    },
    {
        description: "Best pizza in town! The crust was perfectly crispy and the toppings were fresh and flavorful. Can't wait to come back for more.",
        name: "John D."
    }
];

const ReviewSection  = () => {
    return (
        <section className="grid-layout pt-[60px]">
            <h3 className="grid-container col-span-6 lg:col-span-12 font-medium text-right tracking-[-0.03em]"><span className="text-3xl">Your Words, </span><span className="font-secondary text-3xl">our pride</span></h3>
            <div className="col-span-6 lg:col-span-12 grid grid-cols-1 gap-6">
                <InfiniteSLider comments={Reviews} />
            </div>
        </section>
    );
}

export default ReviewSection;