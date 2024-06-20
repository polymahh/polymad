import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const dummyContent = [
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur
                    enim ipsum reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat
                    incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute
                    sit ullamco. Qui deserunt non reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa.
                    Aliqua eiusmod in occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa officia
                    sint labore. Tempor consectetur excepteur ut fugiat veniam commodo et labore dolore commodo
                    pariatur.
                </p>
                <p>
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit
                    adipisicing. Proident duis exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum
                    consequat adipisicing officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
                    nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia adipisicing aliquip proident
                    officia sunt.
                </p>
            </>
        ),
        badge: "React",
        image: "/jp-dashboard.webp.png",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim
                    cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
                    consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse
                    adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
                    aliquip duis veniam sunt.
                </p>
                <p>
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt
                    reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        ),
        badge: "Changelog",
        image: "/jp-dashboard.webp.png",
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p>
                    Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim
                    cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
                    consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse
                    adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
                    aliquip duis veniam sunt.
                </p>
            </>
        ),
        badge: "Launch Week",
        image: "/jp-dashboard.webp.png",
    },
];

const Experience = () => {
    return (
        <div className="py-20 w-full">
            <h1 className="heading mb-10">
                My <span className="text-purple">work experience</span>
            </h1>

            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

                            <div className="text-sm  prose prose-sm dark:prose-invert">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>

            {/* <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div> */}
        </div>
    );
};

export default Experience;
