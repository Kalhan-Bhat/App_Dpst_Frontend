import { ArrowRight, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroAlt = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-mesh">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-tilt"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-tilt" style={{ animationDelay: "5s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8 animate-reveal">
            {/* Badge with shimmer effect */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-card border-2 border-primary rounded-full shadow-brutal hover:shadow-brutal-hover transition-all">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold">IT SOLUTION PROVIDER • EST. 2025</span>
            </div>

            {/* Main headline - Staggered reveal */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                <span className="block animate-slide-right" style={{ animationDelay: "0.1s" }}>
                  TRANSFORM
                </span>
                <span className="block text-primary animate-slide-right" style={{ animationDelay: "0.3s" }}>
                  YOUR IDEAS
                </span>
                <span className="block animate-slide-right" style={{ animationDelay: "0.5s" }}>
                  INTO DIGITAL
                </span>
                <span className="block bg-gradient-accent bg-clip-text text-transparent animate-slide-right" style={{ animationDelay: "0.7s" }}>
                  REALITY
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl animate-slide-right" style={{ animationDelay: "0.9s" }}>
                Comprehensive IT solutions. Mobile apps. Enterprise software. Innovation at every step.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-bounce-in" style={{ animationDelay: "1.1s" }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground border-2 border-primary shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all font-bold text-lg px-8"
              >
                EXPLORE SERVICES
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-bold text-lg px-8"
              >
                FREE CONSULTATION
              </Button>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 pt-8 border-t-2 border-border">
              <div className="space-y-1">
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-xs font-bold text-muted-foreground">CLIENT SATISFACTION</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-accent">24/7</div>
                <div className="text-xs font-bold text-muted-foreground">SUPPORT</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-primary">2025</div>
                <div className="text-xs font-bold text-muted-foreground">FOUNDED</div>
              </div>
            </div>
          </div>

          {/* Right - Floating metrics */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Large metric card */}
            <div className="absolute top-0 right-0 bg-card border-2 border-primary rounded-2xl p-8 shadow-brutal animate-bounce-in max-w-xs" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-black">10+</div>
                  <div className="text-xs font-bold text-muted-foreground">WEB PROJECTS</div>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-hero rounded-full animate-shimmer"></div>
              </div>
            </div>

            {/* Medium card */}
            <div className="absolute top-40 right-20 bg-accent text-accent-foreground border-2 border-accent rounded-2xl p-6 shadow-brutal animate-bounce-in max-w-xs" style={{ animationDelay: "0.5s" }}>
              <div className="text-4xl font-black mb-2">4+</div>
              <div className="text-sm font-bold">ANDROID APPS</div>
              <div className="text-xs opacity-80 mt-2">Native & Cross-platform</div>
            </div>

            {/* Small card */}
            <div className="absolute bottom-40 right-32 bg-card border-2 border-foreground rounded-2xl p-6 shadow-brutal animate-bounce-in" style={{ animationDelay: "0.7s" }}>
              <div className="text-2xl font-black text-primary mb-1">FAST</div>
              <div className="text-xs font-bold text-muted-foreground">DELIVERY</div>
            </div>

            {/* Floating text */}
            <div className="absolute bottom-0 right-0 bg-gradient-hero text-primary-foreground border-2 border-primary rounded-2xl p-6 shadow-brutal animate-bounce-in" style={{ animationDelay: "0.9s" }}>
              <div className="text-sm font-bold mb-2">17 PEOPLE</div>
              <div className="text-xs">VIEWING NOW</div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-diagonal opacity-20 skew-y-2"></div>
    </section>
  );
};

export default HeroAlt;
