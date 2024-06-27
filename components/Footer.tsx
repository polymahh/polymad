import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";

const Footer = () => {
    return (
        <footer className="w-full   z-10" id="contact ">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50 " />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Othmane Elkantaoui <span className="text-purple">Frontend</span> Developer
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <a href="mailto:otman.elkantaoui@gmail.com">
                    <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
                </a>
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
        </footer>
    );
};

export default Footer;
