import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
    Frontend: Code,
    Backend: Database,
    "Dev Tools": Wrench
};

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.utils.toArray('.progress-bar').forEach((bar) => {
                gsap.from(bar, {
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 90%",
                    },
                    width: 0,
                    duration: 1.5,
                    ease: "power2.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="py-24 px-6" ref={containerRef}>
            <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Skills & Expertise</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    The tools and technologies I use to bring ideas to life. I focus on modern, type-safe, and scalable stacks.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {SKILLS_DATA.map((category, idx) => {
                    const Icon = iconMap[category.category] || Code;
                    return (
                        <div key={idx} className="skill-card bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-white/5 space-y-8 hover:border-primary/50 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold dark:text-white">{category.category}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.items.map((skill, skIdx) => (
                                    <div key={skIdx} className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                                            <span className="text-primary font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="progress-bar h-full bg-primary"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
