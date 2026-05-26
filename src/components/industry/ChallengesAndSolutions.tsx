import { motion } from "framer-motion";
import { Check, X, Sparkles, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChallengesAndSolutionsProps {
  challenges: string[];
  solutions: string[];
  industryId: string;
  isInline?: boolean;
}

interface ThemeConfig {
  solutionBg: string;
  solutionBorder: string;
  solutionGlow: string;
  solutionBadge: string;
  accentText: string;
  iconBg: string;
}

const themeMap: Record<string, ThemeConfig> = {
  "real-estate": {
    solutionBg: "from-teal/8 via-teal/2 to-transparent",
    solutionBorder: "border-teal/20 hover:border-teal/40 hover:shadow-teal/5",
    solutionGlow: "shadow-teal/10",
    solutionBadge: "bg-teal text-white shadow-teal/25",
    accentText: "text-teal",
    iconBg: "bg-teal/10",
  },
  "coaching": {
    solutionBg: "from-purple/8 via-purple/2 to-transparent",
    solutionBorder: "border-purple/20 hover:border-purple/40 hover:shadow-purple/5",
    solutionGlow: "shadow-purple/10",
    solutionBadge: "bg-purple text-white shadow-purple/25",
    accentText: "text-purple",
    iconBg: "bg-purple/10",
  },
  "automobile": {
    solutionBg: "from-primary/8 via-primary/2 to-transparent",
    solutionBorder: "border-primary/20 hover:border-primary/40 hover:shadow-primary/5",
    solutionGlow: "shadow-primary/10",
    solutionBadge: "bg-primary text-white shadow-primary/25",
    accentText: "text-primary",
    iconBg: "bg-primary/10",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function ChallengesAndSolutions({ 
  challenges, 
  solutions, 
  industryId,
  isInline = false 
}: ChallengesAndSolutionsProps) {
  const theme = themeMap[industryId] || {
    solutionBg: "from-primary/8 via-primary/2 to-transparent",
    solutionBorder: "border-primary/20 hover:border-primary/40",
    solutionGlow: "shadow-primary/10",
    solutionBadge: "bg-primary text-white",
    accentText: "text-primary",
    iconBg: "bg-primary/10",
  };

  const gridContent = (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* CHALLENGES */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group/card bg-card p-6 sm:p-8 rounded-3xl border border-destructive/10 bg-gradient-to-b from-destructive/[0.04] via-transparent to-transparent shadow-xl relative overflow-hidden transition-all duration-300 hover:border-destructive/20 hover:shadow-destructive/5"
      >
        {/* Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 blur-3xl rounded-full transition-opacity opacity-70 group-hover/card:opacity-100" />
        
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center border border-destructive/20 text-destructive shadow-sm">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-semibold text-destructive uppercase tracking-wider block">Pain Points</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Common Challenges</h3>
          </div>
        </div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 relative z-10"
        >
          {challenges.map((challenge, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border/60 hover:bg-destructive/[0.03] hover:border-destructive/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-destructive">
                <X className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-muted-foreground text-sm sm:text-base font-medium leading-relaxed">
                {challenge}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* SOLUTIONS */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "group/card bg-card p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden transition-all duration-300",
          theme.solutionBorder,
          `bg-gradient-to-b ${theme.solutionBg}`
        )}
      >
        {/* Ambient Active Theme Glow */}
        <div className={cn("absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full transition-opacity opacity-70 group-hover/card:opacity-100 bg-current", theme.accentText)} style={{ opacity: 0.05 }} />

        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm", theme.iconBg, theme.solutionBorder.split(" ")[0], theme.accentText)}>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className={cn("text-xs font-semibold uppercase tracking-wider block", theme.accentText)}>The Smart Way</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">How AiLeadX Helps</h3>
          </div>
        </div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 relative z-10"
        >
          {solutions.map((solution, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className={cn(
                "flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/80 hover:-translate-y-0.5 transition-all duration-200 shadow-sm",
                `hover:${theme.solutionBg.split(" ")[0]} hover:${theme.solutionBorder.split(" ")[0]}/30`
              )}
            >
              <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-md", theme.solutionBadge)}>
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-foreground text-sm sm:text-base font-semibold leading-relaxed">
                {solution}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );

  if (isInline) {
    return gridContent;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Problem vs. Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how shifting from outdated, manual workflows to AiLeadX automated CRM elevates your daily operations.
          </p>
        </motion.div>
        {gridContent}
      </div>
    </section>
  );
}
