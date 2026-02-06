import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                parchment: '#F9F5EB',
                ink: '#2D2D2D',
                crimson: '#8B0000',
                gold: '#C5A059',
            },
            fontFamily: {
                serif: ['var(--font-cormorant)', 'serif'],
                body: ['var(--font-merriweather)', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;
