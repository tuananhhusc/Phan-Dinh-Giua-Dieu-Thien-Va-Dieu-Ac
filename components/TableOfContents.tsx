"use client";

import { reportData } from "@/lib/reportData";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function TableOfContents() {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px" } // Adjust to trigger when section is near top
        );

        reportData.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for header/padding
                behavior: "smooth",
            });
            // Fallback for Safari/Manual tracking
            setActiveId(id);
        }
    };

    return (
        <nav className="hidden lg:block w-72 shrink-0 sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto pr-4 border-r border-gold/20">
            <h3 className="font-serif text-lg font-bold text-crimson mb-6 uppercase tracking-wider">
                Mục Lục
            </h3>
            <ul className="space-y-4">
                {reportData.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                                "text-left text-sm transition-all duration-300 border-l-2 pl-4 py-1 hover:border-gold hover:text-crimson w-full",
                                activeId === section.id
                                    ? "border-crimson text-crimson font-bold bg-crimson/5 rounded-r-md"
                                    : "border-transparent text-ink/70"
                            )}
                        >
                            {section.title}
                        </button>
                        {/* Render subsections if any in active tree? For now just H1/H2 listing flattened or nested? 
               The reportData has a flat structure of sections.
               We can indent based on level.
            */}
                    </li>
                ))}
            </ul>
            {/* Mobile drawer implementation would go here or be a separate component */}
        </nav>
    );
}
