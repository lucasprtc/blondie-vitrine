"use client";

import { useRef } from "react";
import ReviewCard from "../ui/ReviewCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useIsMobile } from "@/app/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const Reviews = [
    {
        description: "New York style pizza. Might be the best of its kind in helsinki. Highly recommend! Pizzas are sold by slices and massive as well.",
        name: "Hiếu Nguyễn",
        degree: -6
    },
    {
        description: "The pizzas were so flavorful. The nyc style slice concept is great. Sitting outside the atmosphere was cozy and summery. There was constantly a line to order.",
        name: "S Heiskanen",
        degree: 6
    },
    {
        description: "Ahhh! ❤️ Everything is very good, but after three visits I gotta say that the Blondie pizza in Blondie pizza is the best, it's divine!",
        name: "Noora Emilia",
        degree: -6
    },
    {
        description: "Excellent, excellent, excellent New York style pizza. The size of these slices is what it should be and the flavors are deep. A refreshing change to the Neapolitan style pizza places that are ”everywhere” in Helsinki.",
        name: "Miikka",
        degree: 6
    },
    {
        description: "10/10 pizza !! You must try the blondie pizza, it’s the perfect balance of mozzarella/ chilli/ garlic and Parmesan.Great atmosphere, chill vibe, can’t go wrong here! One of the best pizzas I’ve eaten :)",
        name: "Carlabella Rebbadj",
        degree: 7
    },
    {
        description: "Pepperoni pizza was pretty pretty good! Thin and crusty base with good sauce, what more can you wish for?",
        name: "Lenni L",
        degree: -8
    },
    {
        description: "Pepperoni pizza was pretty pretty good! Thin and crusty base with good sauce, what more can you wish for?",
        name: "Lenni L",
        degree: -8
    }
];

const ReviewSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile()

    const topReviews = isMobile ? Reviews.slice(0, 2) : Reviews.slice(0, 4);
    const bottomReviews = isMobile ? Reviews.slice(2, 4) : Reviews.slice(4);

    useGSAP(() => {
        ScrollTrigger.refresh();
        const cards = gsap.utils.toArray(".review-card-anim");

        gsap.from(cards, {
            opacity: 0,
            rotation: 0,
            y: 50,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "40% 70%",
                toggleActions: "play none none none",
            }
        });
    }, { scope: containerRef }); 
    
    return (
        <section ref={containerRef} className="mt-10  flex flex-col justify-center items-center h-screen relative overflow-hidden">
            <h2 className="text-2xl lg:text-5xl mb-[5vh]">
                Your Words, <span className="font-secondary">our pride</span>
            </h2>

            <div className="lg:px-20 absolute top-[6vh] md:top-[4vh] left-0 w-full flex justify-between">
                {topReviews.map((review, index) => (
                    <div key={`top-${index}`} style={{ transform: `rotate(${review.degree}deg)` }} className="review-card-anim  ">
                        <ReviewCard 
                            description={review.description} 
                            author={review.name} 
                            rotation={review.degree} 
                        />
                    </div>
                ))}
            </div>

            <div className="md:max-w-[70vw] absolute bottom-[6vh] md:bottom-[8vh] md:left-1/2 md:-translate-x-1/2 w-full flex justify-between">
                {bottomReviews.map((review, index) => (
                    <div key={`bottom-${index}`} style={{ transform: `rotate(${review.degree}deg)` }} className="review-card-anim">
                        <ReviewCard 
                            description={review.description} 
                            author={review.name} 
                            rotation={review.degree} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ReviewSection;