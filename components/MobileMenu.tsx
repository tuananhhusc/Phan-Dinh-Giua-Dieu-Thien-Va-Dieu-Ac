"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp, BookOpen } from "lucide-react";
import { reportData, Section } from "@/lib/reportData";
import { cn } from "@/lib/utils";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
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
            { rootMargin: "-20% 0px -60% 0px" }
        );

        reportData.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Floating Action Bar */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 lg:hidden"
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-crimson text-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 font-serif font-bold uppercase tracking-wide hover:bg-crimson/90 active:scale-95 transition-all"
                >
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm">Mục lục</span>
                </button>

                <button
                    onClick={scrollToTop}
                    className="bg-parchment text-ink border-2 border-gold/40 shadow-lg rounded-full p-3 hover:bg-white active:scale-95 transition-all"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
            </motion.div>

            {/* Backdrop & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm lg:hidden"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 bg-parchment rounded-t-2xl shadow-2xl border-t-4 border-crimson max-h-[80vh] flex flex-col lg:hidden"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gold/20 shrink-0">
                                <h3 className="font-serif text-xl font-bold text-crimson">Mục Lục</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-ink/60 hover:text-crimson hover:bg-crimson/10 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Drawer Content */}
                            <div className="overflow-y-auto p-4 space-y-2 pb-24">
                                {reportData.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={cn(
                                            "w-full text-left py-3 px-4 rounded-lg transition-colors font-serif text-[1.05rem]",
                                            activeId === section.id
                                                ? "bg-crimson/10 text-crimson font-bold border-l-4 border-crimson"
                                                : "text-ink/80 hover:bg-stone-100"
                                        )}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
