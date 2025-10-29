import { Search, Palette, Code2, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Discovery & Planning",
      description: "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "2",
      icon: Palette,
      title: "Design & Prototype",
      description: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "3",
      icon: Code2,
      title: "Development & Testing",
      description: "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "4",
      icon: Rocket,
      title: "Deployment & Support",
      description: "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 support to ensure your solution runs smoothly.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Development <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-glow-primary group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover:shadow-glow-card transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
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

export default Process;
