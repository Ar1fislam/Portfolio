import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EDUCATION_DATA } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
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
        <section id="education" className="py-24 px-6" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <GraduationCap size={28} />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center">Education</h2>
                </div>

                <div className="max-w-3xl mx-auto relative border-l-2 border-slate-200 dark:border-white/10 ml-3 md:ml-0 space-y-12">
                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="timeline-item relative pl-10 md:ml-6">
                            <div className="absolute -left-[9px] md:-left-[35px] top-1.5 size-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-colors shadow-sm">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.period}</span>
                                <h3 className="text-xl font-bold dark:text-white mt-1">{item.degree}</h3>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.school}</p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm pt-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
