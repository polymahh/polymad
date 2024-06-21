"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Stack = () => {
    return (
        <section id="testimonials" className="py-20 relative">
            <div className="w-full h-full absolute left-0 -top-24 min-h-[500px]">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full  " />
            </div>
            {/* <h1 className="heading mx-auto w-fit">🛠️ Frameworks & Tools</h1> */}

            <div className="flex flex-col items-center lg:mt-6">
                <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className=" h-[20vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>
        </section>
    );
};

export default Stack;
