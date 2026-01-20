export const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const PROFILE = {
    name: "Md Ariful Islam",
    role: "Full Stack Developer",
    logo: "ARIF",
    description: "I build high-performance, accessible, and scalable web applications using React, Next.js, and Node.js. Transforming complex problems into elegant code.",
    availability: "Available for work"
};

export const ABOUT_DATA = {
    headline: "Behind the Code: My Journey",
    paragraphs: [
        "My programming journey began on My university.",
        "I thrive on challenges that require full-stack thinking. Whether it's optimizing database queries or crafting buttery-smooth frontend animations, I enjoy every layer of the stack. My favorite work involves creating intuitive user interfaces that hide complex logic behind a curtain of simplicity.",
        "When I'm not coding, I'm usually exploring the outdoors or expressing creativity through other mediums." 
    ],
    images: [
        "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800"
    ]
};

export const SKILLS_DATA = [
    {
        category: "Frontend",
        icon: "code",
        items: [
            { name: "React / Next.js", level: 50 },
            { name: "Tailwind CSS", level: 90 },
            { name: "TypeScript", level: 80 }
        ]
    },
    {
        category: "Backend",
        icon: "database",
        items: [
            { name: "Node.js / Express", level: 70 },
            { name: "PostgreSQL / Prisma", level: 60 }
        ]
    },
    {
        category: "Dev Tools",
        icon: "wrench",
        items: [
            { name: "Git / GitHub", level: 90    }
        ]
    }
];

export const PROJECTS_DATA = [
    {
        title: "Travel Buddy",
        description: "TravelBuddy is a social-travel web platform that helps travelers create travel plans and find compatible travel buddies.",
        tags: ["Next.js", "Node.js"],
        image: "/public/tb-ss.png",
        year: "2025",
        bg: "bg-emerald-700",
        github: "https://github.com/Ar1fislam/B5A8-frontend",
        live: "https://b5a8-frontend.vercel.app/"
    },
    {
        title: "Demo Project 1",
        description: "This is a demo project used as placeholder content.",
        tags: ["Demo", "Placeholder"],
        image: "https://placehold.co/600x400/7c3aed/ffffff?text=Demo+Project+1",
        year: "Demo",
        bg: "bg-purple-500",
        github: "#",
        live: "#"
    },
    {
        title: "Demo Project 2",
        description: "This is another demo project used as placeholder content.",
        tags: ["Demo", "Placeholder"],
        image: "https://placehold.co/600x400/ea580c/ffffff?text=Demo+Project+2",
        year: "Demo",
        bg: "bg-orange-700",
        github: "#",
        live: "#"
    }
];

export const CONTACT_DATA = {
    headline: "Let's Work Together",
    description: "Interested in starting a project or just want to say hi? I'm always open to discussing new opportunities and challenges.",
    email: "ariful.islam.cs191@gmail.com",
    phone: "+880 1878925285",
    whatsapp: "+8801878925285"
};

export const EXPERIENCE_DATA = [
    {
        role: "Senior Full Stack Developer",
        company: "TechFlow Solutions",
        period: "2021 - Present",
        description: "Leading a team of 5 developers in building scalable enterprise applications using Next.js and Microservices."
    },
    {
        role: "Frontend Developer",
        company: "Creative Pulse Agency",
        period: "2019 - 2021",
        description: "Developed award-winning interactive websites for high-profile clients using React and GSAP."
    }
];

export const EDUCATION_DATA = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        school: "North South University, Dhaka.",
        period: "2019 - 2024",
        description: "Focus on Software Engineering and Artificial Intelligence. Graduated with Honors."
    }
];

