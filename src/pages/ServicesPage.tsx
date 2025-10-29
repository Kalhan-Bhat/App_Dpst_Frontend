import { Smartphone, Globe, Palette, Server, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["Native Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, scalable web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "API Integration"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Server,
      title: "CRM Software",
      description: "Custom CRM solutions that streamline your business processes and boost productivity.",
      features: ["Custom Workflows", "Analytics Dashboard", "Third-party Integration", "Mobile CRM"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"]
    },
    {
      icon: Zap,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps", "Auto-scaling"]
    },
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
  OUR SERVICES
</h1>

              <p className="text-xl text-primary-foreground/80 font-bold">
                Complete IT solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-background border-2 border-primary rounded-2xl p-8 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-2 transition-all animate-bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-6 shadow-brutal">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                    <p className="text-foreground/80 font-bold mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO GET STARTED?</h2>
            <p className="text-xl mb-8 font-bold">Let's discuss how we can help transform your business</p>
            <Button size="lg" className="bg-accent text-accent-foreground border-2 border-accent shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 font-black">
              CONTACT US TODAY
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
