"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const workExperience = [
    {
        title: "Junior-Prep",
        description: (
            <>
                <p>
                    I initiated and led the development of junior-prep.com, an open-source platform designed to support
                    junior web developers to practice interview questions, record thier progress and find teams to
                    collaborate with.
                </p>
                <h3 className="my-4 font-semibold">What i did:</h3>
                <ul className="list-disc pl-4">
                    <li>
                        Full-Stack Development: Built a robust application using Next.js and integrated NextAuth for
                        secure user authentication, providing a seamless and performant user experience.
                    </li>
                    <li>
                        Database Management: Implemented and managed the database layer with Prisma, ensuring efficient
                        data modeling and interactions.
                    </li>
                    <li>
                        State Management: Employed React Query for data fetching and state management, optimizing
                        client-server communication and improving application performance.
                    </li>
                </ul>
            </>
        ),
        badge: "Founder  - 2023-12 / Present",
        content: (
            <div className="h-full w-full relative  flex items-center justify-center text-white">
                <Image
                    src="/jp-dashboard.webp.png"
                    fill
                    className="object-cover object-left-top"
                    alt="linear board demo"
                    sizes="100vw, (max-width: 768px) 620px"
                />
            </div>
        ),
    },
    {
        title: "IDURAR",
        description: (
            <>
                <p>
                    I had the opportunity to work on a challenging and impactful project focused on the development and
                    enhancement of an Open Source ERP CRM system
                </p>
                <h3 className="my-4 font-semibold">What i did:</h3>
                <ul className="list-disc pl-4">
                    <li>
                        I was responsible for ensuring that the application was accessible and fully functional across
                        all screen sizes.
                    </li>
                    <li>
                        I spearheaded the creation of a table component with a hook that improved user experience on
                        various screen sizes and gave a decently accessible table for mobile.
                    </li>
                    <li>
                        As a repository maintainer, I actively participated in the code review process, thoroughly
                        assessing and testing community pull requests . This role provided me with a comprehensive
                        understanding of Git and version control.
                    </li>
                </ul>
            </>
        ),
        badge: "Internship  - 2023-07 / 2023-09",
        content: (
            <div className="h-full w-full relative  flex items-center justify-center text-white">
                <Image
                    src="/idurar-desktop.webp"
                    fill
                    className="object-cover object-left-top"
                    alt="linear board demo"
                />
            </div>
        ),
    },
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
        content: (
            <div className="h-full w-full relative  flex items-center justify-center text-white">
                <Image src="/3wm-desktop.webp" fill className="object-cover object-left-top" alt="linear board demo" />
            </div>
        ),
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
                <h3 className="my-4 font-semibold">What i did:</h3>
                <ul className="list-disc pl-4">
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
        badge: "Internship - 2022-11 / 2023-02",
        content: (
            <div className="h-full w-full relative  flex items-center justify-center text-white">
                <Image
                    src="/datamine-desktop.webp"
                    fill
                    className="object-cover object-left-top"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "seocomponent.com ",
        description: (
            <>
                <p>
                    seocomponent.com is a collection of all types of technical SEO elements for websites so developers
                    spend more time designing and building websites
                </p>
                <h3 className="my-4 font-semibold">What i did:</h3>
                <ul className="list-disc pl-4">
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
        badge: "Freelance - 2022-09 / 2022-11",
        content: (
            <div className="h-full w-full relative  flex items-center justify-center text-white">
                <Image
                    src="/seocomponent-desktop.webp"
                    fill
                    className="object-cover object-left-top"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];

const Experience = () => {
    return (
        <div className=" mb-48 static " id="experience">
            <h1 className="heading mb-20">👷‍♂️💼 work experience</h1>
            <StickyScroll content={workExperience} />
        </div>
    );
};

export default Experience;
