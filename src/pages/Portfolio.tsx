import { ExternalLink, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A fully-featured e-commerce platform with real-time inventory management and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      date: "2025",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "Patient management system with appointment scheduling, telemedicine features, and health tracking.",
      tags: ["React Native", "Firebase", "Healthcare"],
      date: "2025",
    },
    {
      title: "Financial Dashboard",
      category: "Web Application",
      description:
        "Real-time financial analytics dashboard with advanced data visualization and reporting features.",
      tags: ["Next.js", "D3.js", "PostgreSQL"],
      date: "2024",
    },
    {
      title: "Food Delivery App",
      category: "Mobile Development",
      description:
        "Multi-restaurant food ordering platform with real-time tracking and payment integration.",
      tags: ["Flutter", "Firebase", "Google Maps"],
      date: "2024",
    },
    {
      title: "CRM System",
      category: "Enterprise Software",
      description:
        "Custom CRM solution with sales pipeline management, customer analytics, and automation tools.",
      tags: ["React", "Express", "MySQL"],
      date: "2024",
    },
    {
      title: "Real Estate Portal",
      category: "Web Platform",
      description:
        "Property listing platform with advanced search filters, virtual tours, and agent management.",
      tags: ["Vue.js", "Laravel", "AWS"],
      date: "2024",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Enterprise Software",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-diagonal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl text-white font-extrabold mb-6 animate-reveal">
                OUR PORTFOLIO
              </h1>

              <p className="text-xl text-primary-foreground/80 font-bold">
                Showcasing our best work and successful projects
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b-2 border-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="font-black border-2 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-0.5"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-background border-2 border-primary rounded-2xl overflow-hidden shadow-brutal hover:shadow-brutal-hover hover:-translate-y-2 transition-all animate-bounce-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={
                        index === 0
                          ? "src/pages/download (1).jpeg"
                          : index === 1
                          ? "src/pages/download (2).jpeg"
                          : index === 2
                          ? "src/pages/download.png"
                          : index === 3
                          ? "src/pages/images (3).jpeg"
                          : index === 4
                          ? "src/pages/mobile-application-development.jpg"
                          : "src/pages/download (3).jpeg"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-accent bg-accent/10 px-3 py-1 rounded-full border-2 border-accent">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black mb-3">{project.title}</h3>
                    <p className="text-foreground/80 font-bold mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-bold px-2 py-1 bg-muted rounded border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full font-black border-2 border-primary"
                    >
                      VIEW PROJECT
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              WANT TO SEE MORE?
            </h2>
            <p className="text-xl mb-8 font-bold">
              Let's discuss your project requirements
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground border-2 border-primary shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 font-black"
            >
              START YOUR PROJECT
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
