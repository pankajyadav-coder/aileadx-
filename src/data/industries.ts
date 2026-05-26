import type { LucideIcon } from "lucide-react";
import { Building2, Users2, Car } from "lucide-react";

export type IndustryId = "real-estate" | "coaching" | "automobile";

export interface IndustryReview {
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
}

export interface IndustryData {
  id: IndustryId;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bannerAccent: string;
  description: string;
  longDescription: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  useCases: string[];
  stats: { value: string; label: string }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
  whyChoose?: { emoji: string; title: string; description: string }[];
  reviews?: IndustryReview[];
  /** Replace with your Supademo embed URL from Share → Embed */
  supademoEmbedUrl: string;
  supademoTitle: string;
  accentClass: string;
  iconWrapClass: string;
  iconClass: string;
}

export const industriesData: IndustryData[] = [
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    subtitle: "For Agents, Brokers & Property Managers",
    bannerAccent: "Real Estate Teams",
    description:
      "Capture property inquiries, automate follow-ups, and close more deals with a CRM built for Indian real estate professionals.",
    longDescription:
      "AiLeadX helps real estate teams manage leads from portals, WhatsApp, walk-ins, and referrals in one place. Track site visits, share listings, log calls, and never lose a buyer inquiry again.",
    challenges: [
      "Leads get missed during busy property campaigns and launches",
      "Customer inquiries scattered across WhatsApp, calls, and property portals",
      "Sales teams unable to reply instantly to every buyer",
      "Buyers lose interest due to delayed responses",
      "No clear visibility of lead stages and customer conversations",
      "Managing multiple agents and leads becomes confusing",
      "Sharing property details manually takes too much time",
      "No centralized system to manage all customer interactions",
    ],
    solutions: [
      "AI assistant talks with your customers 24×7 on WhatsApp",
      "Instantly shares property details, images, pricing, and information",
      "Unified inbox for WhatsApp chats, calls, and customer inquiries",
      "Auto-capture leads from website forms, ads, WhatsApp, and portals",
      "Property-wise pipelines from inquiry to booking",
      "Real-time lead and conversation tracking",
      "Team dashboards for brokers, managers, and sales teams",
      "Faster customer engagement with instant AI responses",
    ],
    features: [
      "Lead capture from 99acres, MagicBricks-style imports & web forms",
      "Site visit scheduling and automated reminders",
      "WhatsApp Business integration for instant replies",
      "Call logging with customer name from contacts",
      "Listing-wise lead tagging and broker assignment",
      "Commission and deal-stage tracking",
    ],
    useCases: [
      "Residential sales & rentals",
      "Commercial property brokers",
      "Channel partner and builder sales teams",
      "Property management & leasing",
    ],
    stats: [
      { value: "40%", label: "More deals closed" },
      { value: "60%", label: "Faster lead response" },
      { value: "3x", label: "Better follow-up consistency" },
    ],
    testimonial: {
      quote:
        "AiLeadX helped us stop losing WhatsApp and portal leads. Site visits booked from the CRM went up sharply in just two months.",
      name: "Priya Sharma",
      role: "Real Estate Broker",
      company: "Shree Home Realtors",
    },
    whyChoose: [
      {
        emoji: "🤖",
        title: "24×7 AI Customer Handling",
        description:
          "Your AI assistant talks with customers anytime, even outside business hours.",
      },
      {
        emoji: "⚡",
        title: "Instant Property Sharing",
        description:
          "Automatically send property details, pricing, brochures, and images to interested buyers instantly.",
      },
      {
        emoji: "📱",
        title: "Complete WhatsApp CRM",
        description:
          "Manage chats, leads, and customer communication from one powerful dashboard.",
      },
      {
        emoji: "🏢",
        title: "Built for Real Estate Businesses",
        description:
          "Designed specifically for brokers, builders, channel partners, and agencies.",
      },
      {
        emoji: "👥",
        title: "Better Team Management",
        description:
          "Track leads, assign conversations, and monitor sales activity easily.",
      },
      {
        emoji: "📊",
        title: "Smart Sales Tracking",
        description:
          "View lead stages, customer interactions, and sales progress in real time.",
      },
      {
        emoji: "🚀",
        title: "Faster Lead Response = More Conversions",
        description:
          "Instant responses help you engage buyers before competitors do.",
      },
      {
        emoji: "🔒",
        title: "Secure & Reliable Platform",
        description:
          "Customer data and conversations stay protected with secure cloud infrastructure.",
      },
      {
        emoji: "📈",
        title: "Scale Your Business Easily",
        description:
          "Whether you handle 50 leads or 50,000, AiLeadX grows with your business.",
      },
    ],
    reviews: [
      {
        name: "Priya Sharma",
        role: "Real Estate Broker",
        company: "Shree Home Realtors",
        initials: "PS",
        quote:
          "AiLeadX stopped us from losing WhatsApp and portal leads. Site visits booked from the CRM went up sharply in two months.",
        rating: 5,
      },
      {
        name: "Rajesh Malhotra",
        role: "Property Consultant",
        company: "Metro Property Hub",
        initials: "RM",
        quote:
          "We manage 200+ listings in one place. Pipeline reminders mean no buyer inquiry sits unanswered overnight.",
        rating: 5,
      },
      {
        name: "Sneha Iyer",
        role: "Sales Head",
        company: "Lakshmi Estates",
        initials: "SI",
        quote:
          "Every conversation and document stays on the lead profile. My team closes faster with full visibility.",
        rating: 5,
      },
      {
        name: "Kuldeep Singh",
        role: "Broker",
        company: "Sunshine Realty",
        initials: "KS",
        quote:
          "The demo showed exactly how AiLeadX works for our business. We signed up the same day—WhatsApp follow-ups are seamless.",
        rating: 5,
      },
      {
        name: "Amit Verma",
        role: "Channel Partner",
        company: "Green Valley Properties",
        initials: "AV",
        quote:
          "AI replies on WhatsApp even after office hours. Buyers get brochures and pricing instantly—we book more site visits.",
        rating: 5,
      },
      {
        name: "Neha Kapoor",
        role: "Agency Owner",
        company: "Urban Nest Realty",
        initials: "NK",
        quote:
          "Assigning leads to agents and tracking stages is finally simple. Our response time dropped from hours to minutes.",
        rating: 5,
      },
      {
        name: "Ravi Shankar",
        role: "Sales Manager",
        company: "PrimeLand Builders",
        initials: "RS",
        quote:
          "Launch week used to be chaos. Now every campaign lead lands in one CRM with auto follow-up and call logging.",
        rating: 5,
      },
      {
        name: "Divya Menon",
        role: "Leasing Consultant",
        company: "Horizon Homes",
        initials: "DM",
        quote:
          "Rental inquiries from MagicBricks-style imports and WhatsApp are unified. Vacancy fill rate improved noticeably.",
        rating: 5,
      },
    ],
    supademoEmbedUrl: "https://app.supademo.com/embed/YOUR_REAL_ESTATE_DEMO_ID",
    supademoTitle: "Watch AiLeadX for Real Estate",
    accentClass: "text-teal",
    iconWrapClass: "bg-teal/20 ring-1 ring-teal/30",
    iconClass: "text-teal",
  },
  {
    id: "coaching",
    icon: Users2,
    title: "Coaching & Consulting",
    subtitle: "For Life Coaches, Business Coaches & Consultants",
    bannerAccent: "Coaching Businesses",
    description:
      "Scale your coaching practice with automated nurturing, session tracking, and payments—without losing the personal touch.",
    longDescription:
      "From webinar sign-ups to paid cohorts, AiLeadX keeps every prospect and client organized. Automate reminders, track program stages, and focus on coaching—not spreadsheets.",
    challenges: [
      "Too much time spent on scheduling, invoices, and admin",
      "Inconsistent follow-up with warm leads after webinars",
      "Hard to track which prospect is in which program stage",
      "Messages and notes spread across WhatsApp and email",
    ],
    solutions: [
      "Pipeline stages for discovery calls, trials, and enrollments",
      "Automated WhatsApp and email sequences for nurturing",
      "Client notes, tags, and program cohort management",
      "Payment reminders and renewal follow-ups in one CRM",
    ],
    features: [
      "Lead capture from landing pages, Instagram & webinars",
      "Automated nurture sequences before discovery calls",
      "Session and cohort tracking with custom stages",
      "WhatsApp reminders for sessions and payments",
      "Tags for program type, budget, and lead source",
      "Team view for assistants and sales closers",
    ],
    useCases: [
      "Life & career coaching",
      "Business & executive coaching",
      "Online course creators",
      "Consulting & training firms",
    ],
    stats: [
      { value: "60%", label: "Higher conversion rate" },
      { value: "15hrs", label: "Saved per week" },
      { value: "2x", label: "Client capacity" },
    ],
    testimonial: {
      quote:
        "Session bookings and nurture sequences run on autopilot. I save hours every week and spend more time with clients.",
      name: "Ananya Gupta",
      role: "Business Coach",
      company: "Ascend Life Coaching",
    },
    supademoEmbedUrl: "https://app.supademo.com/embed/YOUR_COACHING_DEMO_ID",
    supademoTitle: "Watch AiLeadX for Coaching",
    accentClass: "text-purple",
    iconWrapClass: "bg-purple/20 ring-1 ring-purple/30",
    iconClass: "text-purple",
  },
  {
    id: "automobile",
    icon: Car,
    title: "Automobile Sales",
    subtitle: "For Dealerships, Used Car Lots & Auto Brokers",
    description:
      "Respond faster to inquiries, book more test drives, and track every showroom conversation with CRM built for auto sales.",
    longDescription:
      "AiLeadX connects calls, WhatsApp, and walk-in leads to one pipeline. Log test drives, follow up on finance queries, and grow both new and pre-owned sales.",
    challenges: [
      "Hot leads lost to slow callbacks after ads or calls",
      "Vehicle inquiries not matched to stock or sales executive",
      "Service and upsell opportunities missed after sale",
      "Managers lack visibility into team follow-ups",
    ],
    solutions: [
      "Instant lead assignment from calls and WhatsApp",
      "Model-wise pipelines from inquiry to delivery",
      "Test drive scheduling with automated reminders",
      "Call logs and notes on every customer interaction",
    ],
    features: [
      "Incoming/outgoing call detection and auto-logging",
      "WhatsApp follow-ups for test drives & offers",
      "Inventory tags by model, variant, and stock ID",
      "Used-car enquiry history and trade-in notes",
      "Sales executive leaderboards and task lists",
      "Post-sale service reminder workflows",
    ],
    useCases: [
      "New vehicle dealerships",
      "Pre-owned car showrooms",
      "Auto finance & insurance teams",
      "Multi-branch sales operations",
    ],
    stats: [
      { value: "50%", label: "More test drives" },
      { value: "35%", label: "Higher close rate" },
      { value: "45%", label: "Better follow-up rate" },
    ],
    testimonial: {
      quote:
        "Test drive requests from calls and WhatsApp land in one CRM. Our showroom team responds within minutes.",
      name: "Arjun Mehta",
      role: "Sales Manager",
      company: "DriveMax Motors",
    },
    supademoEmbedUrl: "https://app.supademo.com/embed/YOUR_AUTOMOBILE_DEMO_ID",
    supademoTitle: "Watch AiLeadX for Automobile",
    accentClass: "text-primary",
    iconWrapClass: "bg-primary/15 ring-1 ring-primary/25",
    iconClass: "text-primary",
  },
];

export function getIndustryById(id: string | undefined): IndustryData | undefined {
  return industriesData.find((industry) => industry.id === id);
}

export function isValidIndustryId(id: string | undefined): id is IndustryId {
  return industriesData.some((industry) => industry.id === id);
}
