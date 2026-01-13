"use client";

import { useRef, useEffect } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageWithOverlay from "../ui/Image";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {

    return (
        <section className="relative grid-container grid-layout pt-[60px]">
            <h2 className="col-span-6 font-secondary text-center text-[2.5rem] tracking-[-0.03em] font-medium leading-12">Find us, Grab a slice,<br /> Enjoy the vibes.</h2>
            <img src="/picture/contact-1.png" alt="Contact" className="col-span-4 col-start-2 w-full h-auto mt-4" />
            <div className="col-span-6 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center font-primary">
                    <p className="text-sm font-medium">Vaasankatu 8,<br />00500 Helsinki</p>
                    <button className="underline underline-offset-4">Get direction</button>
                </div>
                <div className="">
                    <div className="w-full flex justify-between items-center font-primary text-sm font-medium">
                        <p className="">Tue-Sat</p>
                        <p className="">11.30-22</p>
                    </div>
                    <div className="w-full flex justify-between items-center font-primary text-sm font-medium">
                        <p className="">Sun</p>
                        <p className="">13-19</p>
                    </div>
                    <div className="w-full flex justify-between items-center font-primary text-sm font-medium">
                        <p className="">Mon</p>
                        <p className="uppercase">closed</p>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center font-primary text-sm font-medium">
                    <p className="">Card Only</p>
                    <p className="">No reservation</p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;