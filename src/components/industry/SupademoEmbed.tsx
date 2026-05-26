import { Play } from "lucide-react";

interface SupademoEmbedProps {
  title: string;
  embedUrl: string;
  description?: string;
}

const PLACEHOLDER_PATTERN = /YOUR_.*_DEMO_ID/;

export function SupademoEmbed({ title, embedUrl, description }: SupademoEmbedProps) {
  const isPlaceholder = PLACEHOLDER_PATTERN.test(embedUrl) || !embedUrl.includes("supademo.com/embed/");

  if (isPlaceholder) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-muted/40 overflow-hidden">
        <div className="aspect-video min-h-[420px] sm:min-h-[520px] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Play className="w-8 h-8 text-primary ml-1" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground max-w-md mb-4">
            {description ??
              "Add your Supademo embed link in src/data/industries.ts (Share → Embed in Supademo)."}
          </p>
          <p className="text-xs text-muted-foreground font-mono bg-card px-3 py-2 rounded-lg border border-border">
            supademoEmbedUrl
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-border bg-muted/30">
        <h3 className="text-lg sm:text-xl font-bold text-foreground">{title}</h3>
        {description ? (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        ) : null}
      </div>
      <div className="relative w-full aspect-[16/10] min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] bg-muted/20">
        <iframe
          src={embedUrl}
          title={title}
          allow="clipboard-write"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
