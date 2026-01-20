import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className="py-24 px-6 relative" ref={containerRef}>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        A selection of my best work, showcasing my ability to solve complex problems with clean code.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {PROJECTS_DATA.map((project, idx) => (
                        <div
                            key={idx}
                            className="project-card group rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10 duration-500"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                             

                                {/* Floating Tags */}
                                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-background-dark/80 backdrop-blur-md text-primary text-xs font-bold rounded-full border border-white/10 shadow-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-slate-50/50 dark:to-white/5">
                                <div className="absolute -top-6 right-6 size-12 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transform group-hover:-translate-y-2 transition-transform duration-300 z-30">
                                    <ArrowUpRight size={24} strokeWidth={3} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
