
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 py-4 glass-nav bg-slate-900/90 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg text-background-dark">
                        <Terminal size={24} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-xl font-extrabold tracking-tight text-white">
                        {PROFILE.logo.split('.')[0]}<span className="text-primary">{PROFILE.logo.split('.')[1]}</span>
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors text-white/90"
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        className="text-white hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 space-y-4 shadow-2xl">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block text-lg font-medium text-white hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-primary text-background-dark font-bold py-3 px-6 rounded-lg text-center mt-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
