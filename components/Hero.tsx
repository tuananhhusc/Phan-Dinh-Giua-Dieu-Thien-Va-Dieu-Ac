import { ComponentProps } from "react";

export function Hero({ className, ...props }: ComponentProps<"header">) {
    return (
        <header className={`py-12 md:py-20 px-4 text-center border-b-4 border-gold/30 bg-gradient-to-b from-parchment to-stone-100 ${className}`} {...props}>
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-serif text-crimson font-bold tracking-tight drop-shadow-sm uppercase py-4 border-y-2 border-gold/40">
                    Phân định giữa điều thiện và điều ác
                </h1>
                <div className="w-24 h-1 bg-crimson mx-auto rounded-full opacity-60"></div>
                <p className="text-xl md:text-2xl font-serif text-ink/80 italic">
                    Khảo sát Thần học & Kinh Thánh
                </p>
            </div>
        </header>
    );
}
