import React, { useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { PROFILE } from '../data';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        )
            .fromTo(
                imageRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.5"
            );
    }, []);

    return (
        <section className="min-h-[85vh] flex items-center px-6 py-12 pt-28" ref={heroRef}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col gap-8" ref={textRef}>
                    <div className="space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                            {PROFILE.availability}
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1]">
                            Hi, I'm <span className="text-primary">{PROFILE.name}</span>
                        </h1>
                        <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-400">
                            {PROFILE.role}
                        </h2>
                        <p className="max-w-lg text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                            {PROFILE.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="flex items-center gap-2 bg-primary text-background-dark font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-1">
                            <Download size={20} />
                            Download Resume
                        </button>

                        <div className="flex items-center gap-4 px-4 border-l border-slate-200 dark:border-white/10 ml-2">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:alex@johnson.dev" className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 lg:order-2 flex justify-center" ref={imageRef}>
                    <div className="relative w-full max-w-md aspect-square">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
                        <div
                            className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 bg-slate-800 shadow-2xl"
                            style={{
                                backgroundImage: 'url("https://i.ibb.co/23gnKdpn/official-pic-1.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        ></div>

                        {/* Experience Card */}
                        <div className="absolute -bottom-6 -right-6 z-20 bg-background-dark/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl hidden md:flex items-center gap-6">
                            <div className="text-primary">
                                <p className="text-3xl font-black">5+</p>
                                <p className="text-[10px] uppercase tracking-wider font-bold opacity-70">Years Exp.</p>
                            </div>
                            <div className="w-px h-10 bg-white/10"></div>
                            <div className="text-primary">
                                <p className="text-3xl font-black">50+</p>
                                <p className="text-[10px] uppercase tracking-wider font-bold opacity-70">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
