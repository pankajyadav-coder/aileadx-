 import { Layout } from "@/components/layout/Layout";
 import { PageBanner } from "@/components/layout/PageBanner";
 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { BookOpen, Video, FileText, Headphones, ArrowRight, Calendar } from "lucide-react";
 
 const categories = [
   { name: "All", count: 24 },
   { name: "Getting Started", count: 6 },
   { name: "Sales Tips", count: 8 },
   { name: "Automation", count: 5 },
   { name: "Industry Insights", count: 5 },
 ];
 
 const articles = [
   {
     title: "10 Ways to Automate Your Sales Pipeline",
     excerpt: "Discover how automation can save you 15+ hours per week and help you close more deals.",
     category: "Automation",
     date: "Feb 1, 2026",
     readTime: "8 min read",
     featured: true,
   },
   {
     title: "Real Estate Lead Generation in 2026",
     excerpt: "The ultimate guide to capturing and converting real estate leads in today's market.",
     category: "Industry Insights",
     date: "Jan 28, 2026",
     readTime: "12 min read",
     featured: true,
   },
   {
     title: "How to Set Up Your First CRM Pipeline",
     excerpt: "A step-by-step guide for new RealCRM users to create an effective sales pipeline.",
     category: "Getting Started",
     date: "Jan 25, 2026",
     readTime: "6 min read",
     featured: false,
   },
   {
     title: "WhatsApp Marketing Best Practices",
     excerpt: "Learn how to use WhatsApp effectively without spamming your leads.",
     category: "Sales Tips",
     date: "Jan 22, 2026",
     readTime: "7 min read",
     featured: false,
   },
   {
     title: "Coaching Business Growth Strategies",
     excerpt: "How top coaches are using CRM to scale their practice and serve more clients.",
     category: "Industry Insights",
     date: "Jan 18, 2026",
     readTime: "10 min read",
     featured: false,
   },
   {
     title: "Email Sequences That Convert",
     excerpt: "Templates and strategies for email sequences that nurture leads into customers.",
     category: "Sales Tips",
     date: "Jan 15, 2026",
     readTime: "9 min read",
     featured: false,
   },
 ];
 
 const resources = [
   {
     icon: BookOpen,
     title: "Help Center",
     description: "Browse our knowledge base for tutorials and guides.",
     link: "#",
   },
   {
     icon: Video,
     title: "Video Tutorials",
     description: "Watch step-by-step video guides for every feature.",
     link: "#",
   },
   {
     icon: FileText,
     title: "API Documentation",
     description: "Build custom integrations with our REST API.",
     link: "#",
   },
   {
     icon: Headphones,
     title: "Webinars",
     description: "Join live sessions with our product experts.",
     link: "#",
   },
 ];
 
 const Resources = () => {
   return (
     <Layout>
       <PageBanner
         label="Resources"
         title="Learn, Grow, and"
         accent="Succeed"
         description="Expert insights, tutorials, and resources to help you get the most out of RealCRM."
       />
 
       {/* Resource Types */}
       <section className="py-16 bg-background">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {resources.map((resource, index) => (
               <motion.a
                 key={resource.title}
                 href={resource.link}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-card p-6 rounded-xl border border-border hover:border-coral/30 hover:shadow-lg transition-all group"
               >
                 <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral transition-colors">
                   <resource.icon className="w-6 h-6 text-coral group-hover:text-accent-foreground transition-colors" />
                 </div>
                 <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                 <p className="text-sm text-muted-foreground">{resource.description}</p>
               </motion.a>
             ))}
           </div>
         </div>
       </section>
 
       {/* Blog Section */}
       <section className="py-24 bg-muted/50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Latest from the Blog
             </h2>
             <p className="text-lg text-muted-foreground">
               Tips, strategies, and insights to help you grow your business.
             </p>
           </motion.div>
 
           {/* Categories */}
           <div className="flex flex-wrap justify-center gap-3 mb-12">
             {categories.map((category) => (
               <button
                 key={category.name}
                 className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:bg-coral hover:text-accent-foreground hover:border-coral transition-all"
               >
                 {category.name} ({category.count})
               </button>
             ))}
           </div>
 
           {/* Featured Articles */}
           <div className="grid lg:grid-cols-2 gap-8 mb-12">
             {articles.filter(a => a.featured).map((article, index) => (
               <motion.article
                 key={article.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
               >
                 <div className="aspect-video bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center">
                   <BookOpen className="w-16 h-16 text-coral/30" />
                 </div>
                 <div className="p-6">
                   <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                     <span className="px-3 py-1 rounded-full bg-coral/10 text-coral font-medium">
                       {article.category}
                     </span>
                     <span className="flex items-center gap-1">
                       <Calendar className="w-4 h-4" />
                       {article.date}
                     </span>
                     <span>{article.readTime}</span>
                   </div>
                   <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-coral transition-colors">
                     {article.title}
                   </h3>
                   <p className="text-muted-foreground">{article.excerpt}</p>
                 </div>
               </motion.article>
             ))}
           </div>
 
           {/* More Articles */}
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {articles.filter(a => !a.featured).map((article, index) => (
               <motion.article
                 key={article.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all group cursor-pointer"
               >
                 <span className="px-2 py-1 rounded-full bg-coral/10 text-coral text-xs font-medium">
                   {article.category}
                 </span>
                 <h3 className="text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-coral transition-colors">
                   {article.title}
                 </h3>
                 <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                 <p className="text-xs text-muted-foreground">{article.date} • {article.readTime}</p>
               </motion.article>
             ))}
           </div>
 
           {/* Load More */}
           <div className="text-center mt-12">
             <Button variant="outline" size="lg">
               Load More Articles
               <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
           </div>
         </div>
       </section>
 
       <PageBanner band narrow showLogo={false} label="Newsletter" title="Subscribe to Our" accent="Newsletter" description="Get weekly tips and insights delivered straight to your inbox.">
         <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
           <input
             type="email"
             placeholder="Enter your email"
             className="flex-1 px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
           />
           <Button type="button" variant="hero">
             Subscribe
           </Button>
         </form>
       </PageBanner>
     </Layout>
   );
 };
 
 export default Resources;