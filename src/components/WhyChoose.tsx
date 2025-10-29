import { Check, Lightbulb } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      title: "Complete Lifecycle Expertise",
      description: "From ideation to deployment and beyond",
    },
    {
      title: "Cutting-Edge Technology Stack",
      description: "We work with the latest tools and frameworks",
    },
    {
      title: "Agile Development Process",
      description: "Fast iterations, continuous feedback, rapid delivery",
    },
    {
      title: "Quality-First Approach",
      description: "Rigorous testing and code reviews ensure excellence",
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business",
    },
    {
      title: "Client-Centric Focus",
      description: "Your success is our success",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Why Choose AppDost?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Partner <span className="bg-gradient-primary bg-clip-text text-transparent">With Us?</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl hover:shadow-glow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
