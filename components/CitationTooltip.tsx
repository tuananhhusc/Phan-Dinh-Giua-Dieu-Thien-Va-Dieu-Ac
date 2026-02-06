import { citations } from "@/lib/reportData";
import { Link } from "lucide-react";

interface CitationLinkProps {
    id: number;
}

export function CitationLink({ id }: CitationLinkProps) {
    const citation = citations.find((c) => c.number === id);

    if (!citation) return null;

    return (
        <sup className="ml-1 inline-block align-super text-xs">
            <a
                href={`#ref-${id}`}
                className="text-crimson font-bold hover:underline hover:text-red-700 transition-colors cursor-pointer select-none"
                title={citation.source}
                aria-label={`Citation ${id}: ${citation.source}`}
            >
                [{id}]
            </a>
        </sup>
    );
}
