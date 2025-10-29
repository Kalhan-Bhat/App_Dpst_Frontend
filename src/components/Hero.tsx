import { ArrowRight, Rocket, Monitor, Smartphone, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const floatingStats = [
    { icon: Monitor, label: "Web Development", value: "+10 Projects", delay: "0s" },
    { icon: Smartphone, label: "Mobile Apps", value: "+4 Apps", delay: "0.2s" },
    { icon: Zap, label: "Fast Delivery", value: "On Time", delay: "0.4s" },
    { icon: Users, label: "people viewing now", value: "17", delay: "0.6s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Complete IT Solution Provider Since 2025</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                  Ideas
                </span>{" "}
                Into{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
                we bring innovation and excellence to every project with our expert team of developers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                100% Client Satisfaction
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                Secure & Scalable
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right side - Floating stats */}
          <div className="relative h-[600px] hidden lg:block">
            {floatingStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="absolute animate-scale-in"
                  style={{
                    top: `${20 + index * 20}%`,
                    right: `${index % 2 === 0 ? '10%' : '50%'}`,
                    animationDelay: stat.delay,
                  }}
                >
                  <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-glow-card hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
