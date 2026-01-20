import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_DATA } from '../data';
import { User, Heart, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="py-24 px-6 bg-slate-50/50 dark:bg-black/20" ref={containerRef}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8 about-text">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">{ABOUT_DATA.headline}</h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                    </div>

                    <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        {ABOUT_DATA.paragraphs.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>

                    {/* Features/Personality Grid */}
                    <div className="pt-6 grid grid-cols-3 gap-6 features-grid">
                        <div className="feature-card text-center space-y-2 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-white/5">
                            <div className="mx-auto w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                <User size={20} />
                            </div>
                            <p className="font-bold text-sm dark:text-white">Full Stack</p>
                        </div>
                        <div className="feature-card text-center space-y-2 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-white/5">
                            <div className="mx-auto w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center">
                                <Heart size={20} />
                            </div>
                            <p className="font-bold text-sm dark:text-white">Passionate</p>
                        </div>
                        <div className="feature-card text-center space-y-2 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-white/5">
                            <div className="mx-auto w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                <Palette size={20} />
                            </div>
                            <p className="font-bold text-sm dark:text-white">Creative</p>
                        </div>
                    </div>
                </div>

                {/* Images Collage */}
                <div className="relative h-[600px] hidden lg:block">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                        <img src={ABOUT_DATA.images[0]} alt="Coding" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 z-20 -rotate-3 transition-transform hover:rotate-0 duration-500">
                        <img src={ABOUT_DATA.images[2]} alt="Hobbies" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-1/2 left-1/4 size-32 bg-primary/20 blur-3xl rounded-full -z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default About;
