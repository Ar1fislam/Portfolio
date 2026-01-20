import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".timeline-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
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
        <section id="experience" className="py-24 px-6" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Experience Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Briefcase size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
                        </div>

                        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-3 space-y-12">
                            {EXPERIENCE_DATA.map((item, idx) => (
                                <div key={idx} className="timeline-item relative pl-10">
                                    <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.period}</span>
                                        <h3 className="text-xl font-bold dark:text-white">{item.role}</h3>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.company}</p>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm pt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <GraduationCap size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
                        </div>

                        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-3 space-y-12">
                            {EDUCATION_DATA.map((item, idx) => (
                                <div key={idx} className="timeline-item relative pl-10">
                                    <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.period}</span>
                                        <h3 className="text-xl font-bold dark:text-white">{item.degree}</h3>
                                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.school}</p>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm pt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
