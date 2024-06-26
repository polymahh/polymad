import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

export const RecentProjects = () => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="py-20 flex flex-col items-center">
            <h1 className="heading">👷‍♂️🛠️ recent projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2   py-10 mt-10">
                {projects.map((item, idx) => (
                    <Link
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 lg:min-h-[35rem] h-[30rem]  max-w-[90vw] sm:max-w-[500px]"
                        target="_blank"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        <div
                            className={cn(
                                "rounded-2xl h-full w-full  overflow-hidden bg-background  border  dark:border-white/[0.2]  relative z-20 bg-gradient-to-tr from-gradient-blue-300 to-gradient-blue-200 "
                            )}
                        >
                            <div className="relative z-50 p-2 sm:p-4 flex flex-col justify-around h-full">
                                <div className="relative  bg-background  aspect-video rounded-lg overflow-hidden  ">
                                    <Image
                                        src={item.img}
                                        alt="cover"
                                        fill
                                        className="object-cover object-top overflow-hidden"
                                    />
                                </div>

                                <div className="p-2 sm:p-4  space-y-4">
                                    <h1 className="font-bold  lg:text-2xl md:text-xl text-base line-clamp-1">
                                        {item.title}
                                    </h1>

                                    <p
                                        className="lg:text-xl  lg:font-normal font-light text-sm line-clamp-2"
                                        style={{
                                            color: "#BEC1DD",
                                            margin: "1vh 0",
                                        }}
                                    >
                                        {item.des}
                                    </p>

                                    <div className="flex items-center  justify-between ">
                                        <div className="flex items-center">
                                            {item.iconLists.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{
                                                        transform: `translateX(-${5 * index}px)`,
                                                    }}
                                                >
                                                    <Image src={icon} alt="icon5" className="p-2" fill />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">Live Site</p>
                                            <FaLocationArrow className="ms-3" color="#CBACF9" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
