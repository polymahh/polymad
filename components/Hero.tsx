import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./ui/text-reveal-card";
import { socialMedia } from "@/data";
import { Icons } from "./icons";
import { FileDown, FileText } from "lucide-react";

function Hero() {
    return (
        <div className="pb-20 pt-36 ">
            {/**
             *  UI: Spotlights
             *  Link: https://ui.aceternity.com/components/spotlight
             */}
            <div className="absolute inset-0  overflow-hidden ">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/**
             *  UI: grid
             *  change bg color to bg-black-100 and reduce grid color from
             *  0.2 to 0.03
             */}
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
                    <Link
                        href="https://junior-prep.com"
                        target="_blank"
                        className="text-xs sm:text-sm text-center text-blue-100  bg-fuchsia-700 whitespace-nowrap px-2 sm:px-4 py-1 rounded-full"
                    >
                        👋 checkout my OPEN SOURCE project --&gt;
                    </Link>

                    {/**
                     *  Link: https://ui.aceternity.com/components/text-generate-effect
                     *
                     *  change md:text-6xl, add more responsive code
                     */}
                    <TextGenerateEffect
                        words="Innovative User Experiences for the Modern Web."
                        className="text-center text-4xl md:text-5xl "
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg ">
                        Hi! I&apos;m Othmane a Frontend Developer 👨‍💻 based in Morocco.
                    </p>
                    <a href="/othmane_elkantaoui_2024.pdf" download>
                        <MagicButton
                            title={"Download CV"}
                            icon={<FileDown />}
                            position="right"
                            otherClasses="!bg-[#161A31]"
                        />
                    </a>
                </div>
            </div>

            <div className="flex mt-16  flex-col items-center">
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((item) => {
                        const Icon = Icons[item.name as keyof typeof Icons];
                        return (
                            <Link
                                href={item.link}
                                target="_blank"
                                key={item.name}
                                className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg text-white saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                {Icon ? <Icon /> : null}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Hero;
