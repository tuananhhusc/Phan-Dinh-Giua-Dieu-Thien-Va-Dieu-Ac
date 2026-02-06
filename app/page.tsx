import { Hero } from "@/components/Hero";
import { ReportRenderer } from "@/components/ReportRenderer";
import { TableOfContents } from "@/components/TableOfContents";
import { MobileMenu } from "@/components/MobileMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment selection:bg-crimson/20">
      <Hero />
      <MobileMenu />

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12 relative">
        <aside className="hidden lg:block">
          <TableOfContents />
        </aside>

        <div className="flex-1">
          <ReportRenderer />
        </div>
      </div>

      <footer className="bg-ink text-parchment py-12 text-center font-serif border-t-8 border-crimson">
        <p className="opacity-60 text-sm">© 2026 Nghiên cứu Thần học - Phân định Thiện Ác</p>
        <p className="text-xs mt-2 opacity-40">Ad Majorem Dei Gloriam</p>
      </footer>
    </main>
  );
}
