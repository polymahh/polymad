"use client";

import React from "react";

import { stack } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Stack = () => {
    return (
        <section id="testimonials" className="py-10 md:py-20 relative">
            <div className="w-full h-full absolute left-0 -top-24 min-h-[500px]">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full  " />
            </div>

            <div className="flex flex-col items-center lg:mt-6">
                <div className=" h-[20vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards items={stack} direction="right" speed="slow" />
                </div>
            </div>
        </section>
    );
};

export default Stack;
