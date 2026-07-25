import React, {useLayoutEffect} from 'react';
import {MotionConfig} from 'framer-motion';
import {Navigate, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import {About} from './pages/About';
import {Projects} from './pages/Projects';
import {MainLayout} from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import {SocialLinks} from "./layout/SocialLinks";
import {personalInfo} from "./content/personalInfo";

/*
THESIS: One continuous proof-led story, not three shallow destination pages.
OWN-WORLD: Black technical canvas, cyan/green signals, terminal details, restrained motion.
STORY: Meet Yuval, inspect selected work, understand the builder, then make contact.
FIRST VIEWPORT: Identity, role, strongest CTA, stack, and social proof in one screen.
FORM: Native anchored sections with varied density; user-selected direction, no concept seed.
*/

const Portfolio = () => {
    useLayoutEffect(() => {
        const target = document.getElementById(window.location.hash.slice(1));
        target?.scrollIntoView();
    }, []);

    return (
        <>
        <section id="home" className="scroll-mt-16">
            <Main/>
        </section>

        <section id="projects" className="scroll-mt-24 py-14 md:py-20">
            <Projects/>
        </section>

        <section id="about" className="scroll-mt-24 py-14 md:py-20">
            <About/>
        </section>

        <section
            id="contact"
            className="scroll-mt-24 my-14 md:my-20 mx-2 md:mx-6 rounded-2xl bg-cyan-400 px-6 py-14 md:px-12 md:py-20 text-cyan-950"
        >
            <div className="max-w-3xl">
                <p className="font-mono text-sm font-semibold">Ready when you are.</p>
                <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-[-0.03em]">
                    Let&apos;s build something useful.
                </h2>
                <p className="mt-5 max-w-2xl text-lg text-cyan-950/80">
                    Have a role, project, or engineering problem in mind? Send me a note and let&apos;s talk.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-400"
                    >
                        Email me
                    </a>
                    <div className="[&_a]:text-slate-800 [&_a:hover]:bg-slate-950/10">
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

function App() {
    return (
        <MotionConfig reducedMotion="user">
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Portfolio/>}/>
                    <Route path="/aboutme" element={<Navigate to="/#about" replace/>}/>
                    <Route path="/projects" element={<Navigate to="/#projects" replace/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </MainLayout>
        </MotionConfig>
    );
}

export default App;
