import { ContentBlock, reportData, citations } from "@/lib/reportData";
import { CitationLink } from "./CitationTooltip";

function BlockRenderer({ block }: { block: ContentBlock }) {
    if (block.type === 'paragraph') {
        return (
            <p className="text-[1.15rem] leading-[1.8] mb-8 font-body text-ink/90 text-justify tracking-wide">
                {block.content}
                {block.citationRefs?.map((id) => (
                    <CitationLink key={id} id={id} />
                ))}
            </p>
        );
    }

    if (block.type === 'subtitle') {
        return (
            <h3 className="text-xl md:text-2xl font-bold font-serif text-crimson mt-10 mb-6 italic border-b border-crimson/10 pb-2">
                {block.content}
            </h3>
        );
    }

    if (block.type === 'blockquote') {
        return (
            <blockquote className="border-l-[6px] border-crimson/80 pl-8 py-4 my-10 bg-stone-100/60 text-[1.1rem] italic text-ink/80 rounded-r-lg shadow-sm">
                "{block.content}"
                {block.citationRefs?.map((id) => (
                    <CitationLink key={id} id={id} />
                ))}
            </blockquote>
        );
    }

    if (block.type === 'list') {
        return (
            <ul className="list-disc pl-8 space-y-4 mb-8 text-[1.1rem] leading-relaxed font-body text-ink/90 marker:text-crimson">
                {block.items?.map((item, idx) => (
                    <li key={idx} className="pl-2">
                        {item}
                        {block.citationRefs?.map((id) => (
                            <CitationLink key={id} id={id} />
                        ))}
                    </li>
                ))}
            </ul>
        );
    }

    if (block.type === 'table_row') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gold/30 py-4 last:border-0 hover:bg-stone-50 transition-colors text-[1.05rem]">
                {block.cols?.map((col, idx) => (
                    <div key={idx} className={`p-2 ${idx === 0 ? 'font-bold text-crimson font-serif' : ''}`}>
                        {col}
                    </div>
                ))}
            </div>
        )
    }

    return null;
}

export function ReportRenderer() {
    return (
        <article className="max-w-4xl mx-auto pb-24 px-2 md:px-0">
            {reportData.map((section) => (
                <section key={section.id} id={section.id} className="mb-20 scroll-mt-28">
                    {section.level === 1 ? (
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-crimson mb-10 border-b-4 border-double border-gold/40 pb-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {section.title}
                        </h2>
                    ) : (
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-8 mt-14 flex items-center gap-4">
                            <span className="w-3 h-3 rotate-45 bg-crimson shadow-sm"></span>
                            {section.title}
                        </h2>
                    )}

                    <div className="prose prose-xl prose-stone max-w-none font-body">
                        {section.blocks.map((block, idx) => (
                            <BlockRenderer key={idx} block={block} />
                        ))}
                    </div>
                </section>
            ))}

            <section id="references" className="border-t-8 border-double border-crimson/20 pt-16 mt-24 bg-stone-50/50 p-8 rounded-xl">
                <h2 className="text-3xl font-serif font-bold text-crimson mb-8 text-center uppercase tracking-widest">Tài liệu tham khảo</h2>
                <div className="space-y-4 font-body text-[1rem] leading-relaxed text-ink/80">
                    {citations.map((cite) => (
                        <div key={cite.id} id={`ref-${cite.number}`} className="flex gap-4 group">
                            <span className="font-bold text-crimson font-serif min-w-[2rem] text-right">{cite.number}.</span>
                            <div className="flex-1 -indent-8 pl-8">
                                <a href={cite.url} target="_blank" rel="noopener noreferrer" className="hover:text-crimson hover:underline decoration-gold/50 underline-offset-4 transition-colors">
                                    {cite.source}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}
