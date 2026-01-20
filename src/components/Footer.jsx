import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PROFILE } from '../data';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-background-dark">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="bg-primary/20 p-1 rounded text-primary">
                        <Terminal size={16} />
                    </div>
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {PROFILE.logo.split('.')[0]}<span className="text-primary">{PROFILE.logo.split('.')[1]}</span>
                    </h2>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Ar1fislam" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:ariful.islam.cs191@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
