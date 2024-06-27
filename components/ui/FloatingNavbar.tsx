"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    // set true for the initial state so that nav bar is visible in the hero section
    const [visible, setVisible] = useState(true);
    const [isTop, setIsTop] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.01) {
                // also set true for the initial state
                setVisible(true);
                setIsTop(true);
            } else {
                setIsTop(false);
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    const scrollTo = (elementId: string) => {
        window.scrollTo({
            top: document.getElementById(elementId)?.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                    width: "414px",
                }}
                animate={{
                    y: visible ? 0 : -100,
                    width: isTop ? "414px" : "310px",
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit  sm:W-[414px] py-4  z-[5000] fixed top-10 inset-x-0 mx-auto px-4 sm:px-10 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 transition-all ",
                    className
                )}
                style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    // backgroundColor: "rgba(17, 25, 40, 0.75)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
            >
                <motion.div
                    initial={{
                        opacity: 1,
                    }}
                    animate={{
                        opacity: isTop ? 1 : 0,
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 0.2,
                    }}
                    onClick={() => scrollTo("about")}
                    className={cn(
                        "hidden sm:block relative h-16 aspect-square rounded-full overflow-hidden  trasition-all",
                        isTop ? "visible mr-10" : "invisible mr-0"
                    )}
                >
                    <Image
                        src={"/ai.webp"}
                        alt="about"
                        sizes="64px"
                        fill
                        className="object-cover object-top antialiased"
                    />
                </motion.div>
                {navItems.map((navItem: any, idx: number) =>
                    navItem.name === "Contact" ? (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                        >
                            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
                        </Link>
                    ) : (
                        <button
                            key={`link=${idx}`}
                            onClick={() => scrollTo(navItem.link)}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                        >
                            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
                        </button>
                    )
                )}
            </motion.div>
        </AnimatePresence>
    );
};
