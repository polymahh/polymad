import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Image from "next/image";
import GridGlobe from "./ui/GridGlobe";
import MagicButton from "./MagicButton";
import { TbMessage } from "react-icons/tb";
import Link from "next/link";
import { socialMedia } from "@/data";
import { Icons } from "./icons";

const Grid = () => {
    return (
        <section id="about" className="mb-20">
            <div
                className="grid grid-cols-1  md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto"
                style={{ gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))" }}
            >
                {/* first item in the grid */}
                <div
                    className=" relative overflow-hidden rounded-3xl border bg-background  border-border group/bento shadow-sm hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-3 md:col-span-6 row-span-4 min-h-[40vh] lg:min-h-[60vh]"
                    style={{
                        background: "rgb(4,7,29)",
                        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                >
                    <div className={`h-full relative `}>
                        <Image
                            src="/junior-prep.webp"
                            alt="/b1.svg"
                            fill
                            className="object-cover object-top scale-150  w-full h-full blur-sm opacity-30 brightness-50"
                        />
                        <div className="aspect-[4/3] w-[80%] left-[50%] translate-x-[-50%] top-[40%] lg:top-[65%] absolute">
                            <Image
                                src="/jp-dashboard.webp.png"
                                alt="/b1.svg"
                                fill
                                className="object-cover object-left  w-full h-full"
                            />
                        </div>

                        <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:justify-start lg:justify-center">
                            <div className="font-sans font-extralight md:max-w-32  md:text-base text-sm text-foreground z-10 whitespace-nowrap">
                                🚧 What are you working on?
                            </div>
                            <div className={`font-sans text-xl md:text-3xl max-w-96 font-bold z-10`}>
                                Currently building an open source project
                            </div>
                        </div>
                    </div>
                </div>
                {/* second item in the grid */}
                <div
                    className="row-span-1 relative overflow-hidden rounded-3xl border bg-background  border-border group/bento shadow-sm hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2"
                    style={{
                        background: "rgb(4,7,29)",
                        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                >
                    <div className={`h-full `}>
                        <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full  min-h-40 flex flex-col px-5 p-5 lg:p-10">
                            <div className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}>
                                <span>🕒</span> I&apos;m very flexible with time zone communications
                            </div>
                            <GridGlobe />
                        </div>
                    </div>
                </div>
                {/* third item in the grid */}
                <div
                    className="row-span-1 relative overflow-hidden rounded-3xl border bg-background  border-border group/bento shadow-sm hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2"
                    style={{
                        background: "rgb(4,7,29)",
                        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                >
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                    <div className={`h-full `}>
                        <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center max-w-full  text-center">
                            <div className={`font-sans text-center text-lg lg:text-3xl font-bold z-10`}>
                                Do you want to start a project together?
                            </div>
                            <div className="mt-5 relative self-center">
                                <MagicButton
                                    title={"let's get in touch"}
                                    icon={<TbMessage />}
                                    position="left"
                                    handleClick={() => console.log()}
                                    otherClasses="!bg-[#161A31]"
                                />
                            </div>
                            <div className="flex items-center md:gap-3 gap-6 mx-auto mt-6">
                                {socialMedia.map((item) => {
                                    const Icon = Icons[item.name as keyof typeof Icons];
                                    return (
                                        <Link
                                            href={item.link}
                                            target="_blank"
                                            key={item.name}
                                            className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg text-white saturate-180 bg-opacity-75 bg-black-200/50 rounded-lg border border-black-300"
                                        >
                                            {Icon ? <Icon /> : null}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Grid;
