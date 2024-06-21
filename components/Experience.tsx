"use client";
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { TracingBeam } from "./ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];

const dummyContent = [
    {
        title: "3WM Maroc ",
        description: (
            <>
                <p>
                    Working as a Frontend developer creating and integrating new pages and new features with html CSS
                    and JavaScript/jQuery
                </p>
                <h3 className="my-4 font-semibold">What i did:</h3>
                <ul className="list-disc pl-4">
                    <li>Developing new pages and optimizing existing code by refactoring and debugging.</li>
                    <li>
                        Quickly learning new and old technologies to adapt to the company&apos;s needs (jQuery,
                        bootstrap, twig...)
                    </li>
                    <li>Working closely with the team to ensure the timely achievement of company objectives.</li>
                </ul>
            </>
        ),
        badge: "Freelance  - 2023-02 / 2023-05",
        // image: "/3wm-desktop.webp",
    },
    {
        title: "Prifina - Liberty. Equality. Data.",
        description: (
            <>
                <p>
                    Data mine is an open-source project to create a public facing directory website for Prifina dynamic
                    data to easily find all types of data objects and attributes available for developers to create all
                    kinds data apps.
                </p>
                <h3>What i did:</h3>
                <ul>
                    <li>
                        Worked with a UI/UX designer to code the frontend of the project following Figma designs using
                        Next.js and Chakra UI.
                    </li>
                    <li>
                        Connected the website to the Prifina Notion database and made the website statically generated
                        with a revalidation of 24 hours.
                    </li>
                    <li>
                        This method makes the website very fast and also does not hit the API limit set by the Notion
                        database, basically fetching the data once every day.
                    </li>
                    <li>Coded the sorting logic by search, categories, or status from scratch.</li>
                </ul>
            </>
        ),
        badge: "2022-11 / 2023-02 - Internship",
        image: "/datamine-desktop.webp",
    },
    {
        title: "seocomponent.com ",
        description: (
            <>
                <p>
                    seocomponent.com is a collection of all types of technical SEO elements for websites so developers
                    spend more time designing and building websites
                </p>
                <h3>What i did:</h3>
                <ul>
                    <li>
                        Built new schema generators for various types of pages e.g.: Article, Event, Recipe, Job Posting
                        and many more
                    </li>
                    <li>
                        Optimized the code by creating new reusable components and tools so to make creation of new
                        generators easier
                    </li>
                    <li>Establishing a new context to share states between components seamlessly</li>
                </ul>
            </>
        ),
        badge: "2022-09 / 2022-11 - Freelance",
        image: "/seocomponent-desktop.webp",
    },
];

const Experience = () => {
    return (
        <div className="p-10 mb-48 static ">
            <StickyScroll content={content} />
        </div>
    );
    // return (
    //     <div className="py-20 w-full">
    //         <h1 className="heading mb-10">👷‍♂️💼 work experience</h1>

    //         <TracingBeam className="pl-6">
    //             <div className="max-w-2xl  antialiased pt-4 relative">
    //                 {dummyContent.map((item, index) => (
    //                     <div key={`content-${index}`} className=" py-6">
    //                         <h2 className="bg-purple/20 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
    //                             {item.badge}
    //                         </h2>

    //                         <p className={twMerge("text-xl mb-4 pl-4")}>{item.title}</p>

    //                         <div className="text-sm pl-4 prose prose-sm dark:prose-invert">
    //                             {item.description}
    //                             {item?.image && (
    //                                 <Image
    //                                     src={item.image}
    //                                     alt="blog thumbnail"
    //                                     height="1000"
    //                                     width="1000"
    //                                     className="rounded-lg mt-10 object-cover"
    //                                 />
    //                             )}
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </TracingBeam>
    //     </div>
    // );
};

export default Experience;
