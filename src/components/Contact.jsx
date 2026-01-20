import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT_DATA } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".contact-form", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="py-24 px-6" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div className="space-y-10">
                        <div className="space-y-4 contact-item">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{CONTACT_DATA.headline}</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                                {CONTACT_DATA.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group contact-item">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Me</p>
                                    <p className="text-lg font-semibold dark:text-white">{CONTACT_DATA.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group contact-item">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Me</p>
                                    <p className="text-lg font-semibold dark:text-white">{CONTACT_DATA.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group contact-item">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</p>
                                    <p className="text-lg font-semibold dark:text-white">{CONTACT_DATA.whatsapp}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 contact-form">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold dark:text-slate-300">Your Name</label>
                                    <input className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary p-4 dark:text-white transition-all outline-none" placeholder="Name" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold dark:text-slate-300">Email Address</label>
                                    <input className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary p-4 dark:text-white transition-all outline-none" placeholder="Name@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold dark:text-slate-300">Message</label>
                                <textarea className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary p-4 dark:text-white transition-all outline-none resize-none" placeholder="Tell me about your project..." rows="5"></textarea>
                            </div>
                            <button className="w-full bg-primary text-background-dark font-black py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 transform active:scale-95" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
