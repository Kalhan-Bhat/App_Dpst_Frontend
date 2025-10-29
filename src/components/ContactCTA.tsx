import { ArrowRight, Mail, Phone, MapPin, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  const values = [
    { icon: Sparkles, text: "Innovation First" },
    { icon: Users, text: "Collaborative" },
    { icon: Users, text: "Growth Mindset" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-gradient-diagonal border-2 border-primary rounded-3xl p-8 md:p-12 shadow-brutal relative overflow-hidden animate-bounce-in">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              {/* Left side - CTA */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-bold text-primary-foreground">LET'S BUILD TOGETHER</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-primary-foreground">
                  READY TO
                  <br />
                  START YOUR
                  <br />
                  <span className="text-accent">PROJECT?</span>
                </h2>

                <p className="text-lg text-primary-foreground/80">
                  Transform your ideas into reality with our expert team of developers and designers.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground border-2 border-accent shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 transition-all font-bold"
                  >
                    START YOUR PROJECT
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold"
                  >
                    JOIN OUR TEAM
                  </Button>
                </div>

                {/* Values */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full border border-primary-foreground/30">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                        <span className="text-xs font-bold text-primary-foreground">{value.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right side - Contact info */}
              <div className="space-y-6">
                <div className="bg-background border-2 border-primary rounded-2xl p-6 shadow-brutal">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    GET IN TOUCH
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        EMAIL
                      </div>
                      <div className="font-bold">contact@appdost.in</div>
                      <div className="font-bold">hr@appdost.in</div>
                    </div>

                    <div className="h-px bg-border"></div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary" />
                        PHONE
                      </div>
                      <div className="font-bold">+91 76350 75422</div>
                      <div className="font-bold">+91 11 6929 0750</div>
                    </div>

                    <div className="h-px bg-border"></div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        LOCATIONS
                      </div>
                      <div className="font-bold">HQ-Patna, Motihari, Banka</div>
                    </div>
                  </div>
                </div>

                {/* Website badge */}
                <div className="bg-accent text-accent-foreground border-2 border-accent rounded-2xl p-6 shadow-brutal text-center">
                  <div className="text-sm font-bold mb-1">VISIT OUR WEBSITE</div>
                  <div className="text-2xl font-black">www.appdost.in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
