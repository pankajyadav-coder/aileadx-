import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/BrandLogo";

export interface PageBannerProps {
  label?: string;
  title: string;
  accent?: string;
  description?: ReactNode;
  compact?: boolean;
  band?: boolean;
  narrow?: boolean;
  /** Show AiLeadX lockup above the eyebrow (default: true) */
  showLogo?: boolean;
  className?: string;
  children?: ReactNode;
}

export function PageBanner({
  label,
  title,
  accent,
  description,
  compact = false,
  band = false,
  narrow = false,
  showLogo = true,
  className,
  children,
}: PageBannerProps) {
  const TitleTag = band ? ("h2" as const) : ("h1" as const);
  const motionProps = band
    ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      className={cn(
        "page-banner relative overflow-hidden text-center",
        band ? "py-24" : compact ? "pt-32 pb-12" : "pt-32 pb-20",
        className
      )}
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...motionProps} className={cn("mx-auto", narrow ? "max-w-2xl" : "max-w-3xl")}>
          {showLogo ? (
            <div className="flex justify-center mb-6">
              <BrandLogo variant="banner" linkToHome />
            </div>
          ) : null}
          {label ? (
            <span className="page-banner-label font-semibold text-sm uppercase tracking-wider mb-4 block">
              {label}
            </span>
          ) : null}
          <TitleTag
            className={cn(
              "font-bold text-foreground tracking-tight text-balance",
              band
                ? "text-3xl sm:text-4xl mb-6"
                : compact
                  ? "text-4xl sm:text-5xl mb-4"
                  : "text-4xl sm:text-5xl lg:text-6xl mb-6"
            )}
          >
            {title}
            {accent ? (
              <>
                {" "}
                <span className="page-banner-accent">{accent}</span>
              </>
            ) : null}
          </TitleTag>
          {description ? (
            <p
              className={cn(
                "text-foreground/75 leading-relaxed max-w-2xl mx-auto font-medium",
                band ? "text-xl mb-8" : compact ? "text-lg mb-0" : "text-xl mb-8"
              )}
            >
              {description}
            </p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
