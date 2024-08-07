import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Image from "next/image";
import GridGlobe from "./ui/GridGlobe";
import MagicButton from "./MagicButton";
import { TbMessage } from "react-icons/tb";
import { useRouter } from "next/navigation";

const Grid = () => {
    const router = useRouter();
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
                                alt="junior prep"
                                fill
                                className="object-cover object-left  w-full h-full"
                            />
                        </div>

                        <a
                            href="https://junior-prep.com"
                            target="_blank"
                            className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:justify-start lg:justify-center"
                        >
                            <div className="font-sans font-extralight md:max-w-32  md:text-base text-sm text-foreground z-10 whitespace-nowrap">
                                🚧 What are you working on?
                            </div>
                            <div className={`font-sans text-xl md:text-3xl max-w-96 font-bold z-10`}>
                                Currently building an open source project
                            </div>
                        </a>
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
                                Let&apos;s create something amazing together!
                            </div>
                            <div className="mt-5 relative self-center">
                                <a href="mailto:otman.elkantaoui@gmail.com">
                                    <MagicButton
                                        title={"Contact me today!"}
                                        icon={<TbMessage />}
                                        position="left"
                                        otherClasses="!bg-[#161A31]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Grid;
