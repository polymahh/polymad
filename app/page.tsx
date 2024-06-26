"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Stack from "@/components/Stack";

const Home = () => {
    return (
        <main className="relative bg-background flex justify-center items-center flex-col mx-auto sm:px-10 px-2">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <Stack />
                <RecentProjects />
                <Experience />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
