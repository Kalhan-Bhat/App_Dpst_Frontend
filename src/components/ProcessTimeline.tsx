import { Search, Palette, Code, Rocket } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "DISCOVERY & PLANNING",
      description: "Deep dive into requirements, business goals, competitor analysis, and comprehensive roadmap creation.",
    },
    {
      number: "02",
      icon: Palette,
      title: "DESIGN & PROTOTYPE",
      description: "Intuitive wireframes, stunning mockups, and interactive prototypes before development.",
    },
    {
      number: "03",
      icon: Code,
      title: "DEVELOPMENT & TESTING",
      description: "Clean code, scalable architecture, rigorous testing across all platforms.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "DEPLOYMENT & SUPPORT",
      description: "Complete deployment, ongoing maintenance, updates, and 24/7 support.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-right">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            OUR DEVELOPMENT
            <br />
            <span className="text-primary">PROCESS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven methodology ensuring quality, efficiency, and satisfaction
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} animate-bounce-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card border-2 border-primary rounded-2xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-1">
                    <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="text-2xl font-black mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-hero border-2 border-primary rounded-2xl flex items-center justify-center shadow-brutal">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
