import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Real Estate Broker",
    company: "Shree Home Realtors",
    image: "PS",
    industry: "Real Estate",
    quote:
      "AiLeadX helped us stop losing WhatsApp and portal leads. Our follow-ups are automatic now, and site visits booked from the CRM went up sharply in just two months.",
    rating: 5,
  },
  {
    name: "Rajesh Malhotra",
    role: "Property Consultant",
    company: "Metro Property Hub",
    image: "RM",
    industry: "Real Estate",
    quote:
      "We manage 200+ listings and client calls in one place. The pipeline view and reminders mean no buyer inquiry sits unanswered overnight.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Sales Head",
    company: "Lakshmi Estates",
    image: "SI",
    industry: "Real Estate",
    quote:
      "From lead capture to closure notes, everything is tracked. My team closes faster because every conversation and document stays on the lead profile.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Business Coach",
    company: "Ascend Life Coaching",
    image: "AG",
    industry: "Coaching",
    quote:
      "Session bookings, payment follow-ups, and nurture sequences run on autopilot. I save hours every week and spend more time with clients.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Founder",
    company: "GrowthPath Academy",
    image: "VS",
    industry: "Coaching",
    quote:
      "Our webinar and Instagram leads flow straight into pipelines. AiLeadX keeps cohorts organized and makes renewal outreach much simpler.",
    rating: 5,
  },
  {
    name: "Rohit Kapoor",
    role: "Program Director",
    company: "MentorMind India",
    image: "RK",
    industry: "Coaching",
    quote:
      "We run multiple programs at once. Tags, stages, and automated messages help us convert trial sign-ups into long-term coaching clients.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Sales Manager",
    company: "DriveMax Motors",
    image: "AM",
    industry: "Automobile",
    quote:
      "Test drive requests from calls and WhatsApp land in one CRM. Our showroom team responds within minutes, and bookings improved noticeably.",
    rating: 5,
  },
  {
    name: "Kavya Reddy",
    role: "Dealership Owner",
    company: "Nova Auto Gallery",
    image: "KR",
    industry: "Automobile",
    quote:
      "Call logging and lead stages are perfect for our sales floor. We know who to call back, what was discussed, and which offers were shared.",
    rating: 5,
  },
  {
    name: "Suresh Nair",
    role: "Pre-Owned Sales Lead",
    company: "SwiftWheel Automobiles",
    image: "SN",
    industry: "Automobile",
    quote:
      "Used-car inquiries used to get lost on personal phones. Now every lead has history, tasks, and follow-ups—our conversion rate is much healthier.",
    rating: 5,
  },
];

const logos = [
  "Shree Home Realtors",
  "Metro Property Hub",
  "Ascend Life Coaching",
  "GrowthPath Academy",
  "DriveMax Motors",
  "Nova Auto Gallery",
  "Lakshmi Estates",
  "MentorMind India",
  "SwiftWheel Automobiles",
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="gradient-text">100+ Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why teams across real estate, coaching, and automobile choose AiLeadX to power their growth.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16"
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-muted-foreground/50 font-semibold text-lg hover:text-coral transition-colors"
            >
              {logo}
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border relative animate-float will-change-transform"
              style={{ animationDelay: `${index * 0.35}s`, animationDuration: "5s" }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-coral/20" />
              </div>

              <span className="inline-block text-xs font-medium text-coral mb-3 px-2 py-1 rounded-full bg-coral/10">
                {testimonial.industry}
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral to-coral-light flex items-center justify-center text-accent-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
