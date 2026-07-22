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
    supademoEmbedUrl: "https://app.supademo.com/demo/cmrubyd3r0ni3qmsj70am1gep?utm_source=link",
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
      "Student inquiries get missed during admission season",
      "Counselors cannot respond instantly to every student",
      "Managing calls, WhatsApp chats, and inquiries becomes difficult",
      "Follow-ups for admissions are handled manually",
      "No proper tracking of student leads and conversions",
      "Important student conversations get lost across platforms",
      "Difficulty managing multiple counselors and branches",
    ],
    solutions: [
      "AI assistant talks with students 24×7 on WhatsApp",
      "Instantly shares course details, fees, brochures, and schedules",
      "Unified inbox for calls, chats, and student inquiries",
      "Centralized lead management for admissions teams",
      "Real-time tracking of student inquiries and conversions",
      "Team dashboards for counselors and management",
      "Faster responses improve admission conversion rates",
      "Manage all student communication from one platform",
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
    whyChoose: [
      {
        emoji: "🎓",
        title: "Built for Admission Teams",
        description: "Designed for coaching institutes, academies, and educational businesses.",
      },
      {
        emoji: "🤖",
        title: "24×7 AI Student Support",
        description: "AI handles inquiries anytime and instantly shares course information.",
      },
      {
        emoji: "📱",
        title: "Complete Communication Management",
        description: "Manage WhatsApp chats, calls, and student conversations in one place.",
      },
      {
        emoji: "⚡",
        title: "Faster Admission Conversion",
        description: "Quick responses help convert more student inquiries into admissions.",
      },
      {
        emoji: "👥",
        title: "Better Team Coordination",
        description: "Track counselor performance and manage inquiries efficiently.",
      },
      {
        emoji: "📊",
        title: "Smart Lead Tracking",
        description: "Monitor inquiry status, admissions progress, and student engagement.",
      },
    ],
    reviews: [
      {
        name: "Ananya Gupta",
        role: "Business Coach",
        company: "Ascend Life Coaching",
        initials: "AG",
        quote:
          "Session bookings and nurture sequences run on autopilot. I save hours every week and spend more time with clients.",
        rating: 5,
      },
      {
        name: "Vikram Dev",
        role: "Executive Coach",
        company: "Dev Coaching Global",
        initials: "VD",
        quote:
          "My lead conversion rate went up 60% since starting discovery call workflows. Client notes are organized in one place now.",
        rating: 5,
      },
      {
        name: "Meera Nair",
        role: "Life & Career Coach",
        company: "SoulPath Academy",
        initials: "MN",
        quote:
          "Automated payment and session reminders saved my relationship with clients. No more awkward follow-up messages.",
        rating: 5,
      },
      {
        name: "Dr. Rohan Sen",
        role: "Leadership Consultant",
        company: "Sen Consulting Group",
        initials: "RS",
        quote:
          "I manage 3 premium cohorts in one pipeline. The WhatsApp reminders ensure nearly 98% attendance at our webinars.",
        rating: 5,
      },
      {
        name: "Karan Talwar",
        role: "Fitness Coach",
        company: "FitLife Program",
        initials: "KT",
        quote:
          "Instagram lead capture is instant. My assistant assigns leads, and they are qualified by AI within seconds.",
        rating: 5,
      },
      {
        name: "Divya Reddy",
        role: "Career Transition Coach",
        company: "CareerSpark",
        initials: "DR",
        quote:
          "Before AiLeadX, I used sticky notes and sheets. Now every client's journey is mapped in a clean, professional dashboard.",
        rating: 5,
      },
      {
        name: "Sameer Shah",
        role: "Business Mentor",
        company: "Shah Consultancy",
        initials: "SS",
        quote:
          "The automated nurture sequence helps warm up leads before they get on the phone with me. Close rate is twice as high!",
        rating: 5,
      },
      {
        name: "Preeti Roy",
        role: "Relationship Coach",
        company: "Harmony Coach",
        initials: "PR",
        quote:
          "AiLeadX is super intuitive. I had my entire discovery pipeline built and ready in a single afternoon. Pure gold!",
        rating: 5,
      },
    ],
    supademoEmbedUrl: "https://app.supademo.com/demo/cmruejmwp0rzvqmsjnu1zqhj7?utm_source=link",
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
    bannerAccent: "Auto Dealerships",
    description:
      "Respond faster to inquiries, book more test drives, and track every showroom conversation with CRM built for auto sales.",
    longDescription:
      "AiLeadX connects calls, WhatsApp, and walk-in leads to one pipeline. Log test drives, follow up on finance queries, and grow both new and pre-owned sales.",
    challenges: [
      "Customer inquiries get delayed during busy hours",
      "Sales teams struggle to manage multiple leads efficiently",
      "Vehicle details are shared manually again and again",
      "Test drive and inquiry tracking becomes difficult",
      "Leads from ads, calls, and WhatsApp are scattered",
      "Poor follow-up management causes missed sales opportunities",
      "No centralized dashboard for sales teams and managers",
    ],
    solutions: [
      "AI assistant responds to customers 24×7",
      "Instantly shares vehicle details, pricing, and images",
      "Unified inbox for calls, WhatsApp chats, and inquiries",
      "Centralized lead management from all platforms",
      "Real-time tracking of customer inquiries and sales progress",
      "Team dashboards for sales executives and managers",
      "Faster responses improve customer engagement and sales",
      "Manage all customer communication from one platform",
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
    whyChoose: [
      {
        emoji: "🚗",
        title: "Built for Automobile Sales Teams",
        description: "Perfect for dealerships, showrooms, and automobile businesses.",
      },
      {
        emoji: "🤖",
        title: "AI-Powered Customer Interaction",
        description: "AI talks with customers and instantly shares vehicle information.",
      },
      {
        emoji: "⚡",
        title: "Faster Lead Response",
        description: "Engage customers quickly before competitors do.",
      },
      {
        emoji: "📱",
        title: "Centralized Communication",
        description: "Manage all calls, chats, and inquiries in one CRM dashboard.",
      },
      {
        emoji: "👥",
        title: "Team & Sales Management",
        description: "Track sales activities, customer interactions, and team performance.",
      },
      {
        emoji: "📊",
        title: "Better Sales Visibility",
        description: "Monitor inquiries, conversions, and sales progress in real time.",
      },
    ],
    reviews: [
      {
        name: "Arjun Mehta",
        role: "Sales Manager",
        company: "DriveMax Motors",
        initials: "AM",
        quote:
          "Test drive requests from calls and WhatsApp land in one CRM. Our showroom team responds within minutes.",
        rating: 5,
      },
      {
        name: "Suresh Gopinath",
        role: "General Manager",
        company: "Royal Hyundai",
        initials: "SG",
        quote:
          "Showroom walk-in capture has improved by 90%. We can track exactly which executive handled which inquiry.",
        rating: 5,
      },
      {
        name: "Neha Kapoor",
        role: "Used Car Head",
        company: "TrueValue Cars Gurgaon",
        initials: "NK",
        quote:
          "We match pre-owned stock with buyer requests instantly. Out of stock cars don't sit around anymore.",
        rating: 5,
      },
      {
        name: "Harpreet Singh",
        role: "Director",
        company: "Frontier Tata Motors",
        initials: "HS",
        quote:
          "The post-sale service workflow has improved our customer retention. Insurance renewals are tracked effortlessly.",
        rating: 5,
      },
      {
        name: "Ravi Kulkarni",
        role: "Dealer Principal",
        company: "Kulkarni Mahindra",
        initials: "RK",
        quote:
          "Executive leaderboards created healthy competition in my sales team. Our dealership sales went up 25% this quarter.",
        rating: 5,
      },
      {
        name: "Pooja Malhotra",
        role: "CRM Lead",
        company: "Signature BMW",
        initials: "PM",
        quote:
          "Vip customers expect instant communication. WhatsApp brochure sharing lets us send customized brochures in under 10 seconds.",
        rating: 5,
      },
      {
        name: "Deepak Verma",
        role: "Sales Executive",
        company: "Elite Used Cars",
        initials: "DV",
        quote:
          "Auto-logging calls saves me an hour of manual reports every evening. I can focus on closing deals.",
        rating: 5,
      },
      {
        name: "Rajesh Patel",
        role: "Owner",
        company: "Patel Automobile Agency",
        initials: "RP",
        quote:
          "Managing bookings across three different branches was impossible. AiLeadX has unified our database perfectly.",
        rating: 5,
      },
    ],
    supademoEmbedUrl: "https://app.supademo.com/demo/cmrufchxm0u39qmsj4ekuips8?utm_source=link",
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
