import InfiniteSLider from "../ui/InfiniteSlider";
import TextAnimation from "../ui/TextAnimation";
import ReviewCard from "../ui/ReviewCard";


const Reviews = [
    {
        description: "New York style pizza. Might be the best of its kind in helsinki. Highly recommend! Pizzas are sold by slices and massive as well.",
        name: "Hiếu Nguyễn",
        classname: "top-0 left-[15%] -translate-x-1/2",
        degree: -6
    },
    {
        description: "The pizzas were so flavorful. The nyc style slice concept is great. Sitting outside the atmosphere was cozy and summery. There was constantly a line to order.",
        name: "S Heiskanen",
        classname: "top-0 left-[35%] -translate-x-1/2",
        degree: 6
    },
    {
        description: "Ahhh! ❤️ Everything is very good, but after three visits I gotta say that the Blondie pizza in Blondie pizza is the best, it's divine!",
        name: "Noora Emilia",
        classname: "top-0 left-[65%] -translate-x-1/2",
        degree: -6
    },
    {
        description: "Excellent, excellent, excellent New York style pizza. The size of these slices is what it should be and the flavors are deep. A refreshing change to the Neapolitan style pizza places that are ”everywhere” in Helsinki.",
        name: "Miikka",
        classname: "top-0 left-[85%] -translate-x-1/2",
        degree: 6
    },
    {
        description: "10/10 pizza !! You must try the blondie pizza, it’s the perfect balance of mozzarella/ chilli/ garlic and Parmesan.Great atmosphere, chill vibe, can’t go wrong here! One of the best pizzas I’ve eaten :)",
        name: "Carlabella Rebbadj",
        classname: "bottom-0 left-0",
        degree: 7
    },
    {
        description: "Pepperoni pizza was pretty pretty good! Thin and crusty base with good sauce, what more can you wish for?",
        name: "Lenni L",
        classname: "bottom-0 left-0",
        degree: -8
    },
    {
        description: "Pepperoni pizza was pretty pretty good! Thin and crusty base with good sauce, what more can you wish for?",
        name: "Lenni L",
        classname: "bottom-0 left-0",
        degree: -8
    }
];

const ReviewSection  = () => {
    return (
        <section className="mt-10 lg:mt-[100px] flex justify-center items-center h-dvh relative">
            <h2 className="text-5xl">Your Words, <span className="font-secondary">our pride</span></h2>
            <div className="px-20 absolute top-[6vh] left-0 w-full flex justify-between">
                {Reviews.map((review, index) => (
                    index < 4 && (
                        <ReviewCard key={`card-${index}`} description={review.description} author={review.name} rotation={review.degree}/>
                    )
                ))}
            </div>
            <div className="max-w-[70vw]  absolute bottom-[8vh] left-1/2 -translate-x-1/2 w-full flex justify-between">
                {Reviews.map((review, index) => (
                    index >= 4 && (
                        <ReviewCard key={`card-${index}`} description={review.description} author={review.name} rotation={review.degree}/>
                    )
                ))}
            </div>
        </section>
    );
}

export default ReviewSection;