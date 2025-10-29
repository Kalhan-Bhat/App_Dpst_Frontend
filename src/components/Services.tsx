import { Palette, Monitor, Globe, Smartphone, Code, TrendingUp, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design Excellence",
      description: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Monitor,
      title: "Custom Software Development",
      description: "Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we've got you covered.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Core <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions that drive business growth and digital transformation
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover:shadow-glow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
