import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { IndustryReview } from "@/data/industries";

interface IndustryReviewsSectionProps {
  reviews: IndustryReview[];
  industryTitle: string;
  industrySubtitle?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function IndustryReviewsSection({ reviews, industryTitle, industrySubtitle }: IndustryReviewsSectionProps) {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">{industryTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {industrySubtitle || `See what ${industryTitle.toLowerCase()} professionals across India say about AiLeadX.`}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${review.company}`}
              variants={cardVariants}
              className="bg-card p-6 rounded-2xl border border-border relative flex flex-col animate-float will-change-transform hover:shadow-lg hover:border-primary/20 transition-shadow"
              style={{
                animationDelay: `${index * 0.4}s`,
                animationDuration: "5.5s",
              }}
            >
              <Quote className="w-7 h-7 text-primary/15 absolute top-5 right-5" />

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + i * 0.06, type: "spring", stiffness: 260 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                &quot;{review.quote}&quot;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/80">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0`}
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{review.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
