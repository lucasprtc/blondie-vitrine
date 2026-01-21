import InfiniteSLider from "../ui/InfiniteSlider";
import TextAnimation from "../ui/TextAnimation";

const Reviews = [
    {
        description: "New York style pizza. Might be the best of its kind in helsinki. Highly recommend! Pizzas are sold by slices and massive as well.",
        name: "Hiếu Nguyễn"
    },
    {
        description: "The pizzas were so flavorful. The nyc style slice concept is great. Sitting outside the atmosphere was cozy and summery. There was constantly a line to order.",
        name: "S Heiskanen"
    },
    {
        description: "Ahhh! ❤️ Everything is very good, but after three visits I gotta say that the Blondie pizza in Blondie pizza is the best, it's divine!",
        name: "Noora Emilia"
    },
    {
        description: "Excellent, excellent, excellent New York style pizza. The size of these slices is what it should be and the flavors are deep. A refreshing change to the Neapolitan style pizza places that are ”everywhere” in Helsinki.",
        name: "Miikka"
    },
    {
        description: "10/10 pizza !! You must try the blondie pizza, it’s the perfect balance of mozzarella/ chilli/ garlic and Parmesan.Great atmosphere, chill vibe, can’t go wrong here! One of the best pizzas I’ve eaten :)",
        name: "Carlabella Rebbadj"
    },
    {
        description: "Pepperoni pizza was pretty pretty good! Thin and crusty base with good sauce, what more can you wish for?",
        name: "Lenni L"
    },
    {
        description: "Best (maybe one of the only) pizza slice restaurants in town. Each one I had has been amazing, highly recommend.",
        name: "Ryan Graysmark"
    },
    {
        description: "I've tasted so many pizzas but this was by far the best pizza I've ever tasted. The Service was so amaizing, so if you're near I recommend to try.",
        name: "Vaino Valtonen"
    }
];

const ReviewSection  = () => {
    return (
        <section className="grid-layout pt-[60px]">
            <TextAnimation className="grid-container col-span-6 lg:col-span-12 title">
                <h3 className="">Your Words, <span className="font-secondary">our pride</span></h3>
            </TextAnimation>
            <div className="col-span-6 lg:col-span-12 grid grid-cols-1 gap-6">
                <InfiniteSLider comments={Reviews} />
            </div>
        </section>
    );
}

export default ReviewSection;