import type { Metadata } from "next";
import { Cormorant_Garamond, Merriweather } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phân định giữa điều thiện và điều ác",
  description: "Khảo sát Thần học & Kinh Thánh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${merriweather.variable} bg-parchment text-ink font-body antialiased selection:bg-crimson selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
