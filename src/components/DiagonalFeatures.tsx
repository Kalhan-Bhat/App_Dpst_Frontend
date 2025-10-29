import { CheckCircle2, Zap, Shield, Clock, Target, Award } from "lucide-react";

const DiagonalFeatures = () => {
  const features = [
    { icon: Zap, title: "CUTTING-EDGE TECH", description: "Latest tools & frameworks" },
    { icon: Shield, title: "SCALABLE SOLUTIONS", description: "Built to grow with you" },
    { icon: Clock, title: "AGILE PROCESS", description: "Fast iterations & delivery" },
    { icon: Target, title: "QUALITY-FIRST", description: "Rigorous testing & reviews" },
    { icon: CheckCircle2, title: "FULL LIFECYCLE", description: "Ideation to deployment" },
    { icon: Award, title: "CLIENT-CENTRIC", description: "Your success is ours" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-primary skew-y-3 transform origin-top-left"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-foreground">
            WHY CHOOSE
            <br />
            <span className="text-accent">APPDOST?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We deliver excellence through innovation, expertise, and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-background border-2 border-foreground rounded-2xl p-6 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-2 group animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary -skew-y-3 transform origin-bottom-right"></div>
    </section>
  );
};

export default DiagonalFeatures;
