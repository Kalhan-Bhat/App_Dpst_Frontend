import { Mail, Globe, MapPin, Phone, ArrowRight, Lightbulb, Users, BookOpen, TrendingUp, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation First", description: "Encouraging creative problem-solving" },
    { icon: Users, title: "Collaborative Environment", description: "Cross-functional teamwork" },
    { icon: BookOpen, title: "Continuous Learning", description: "Regular training & workshops" },
    { icon: TrendingUp, title: "Growth Mindset", description: "Diverse projects & new technologies" },
    { icon: Heart, title: "Work-Life Balance", description: "Flexible arrangements" },
    { icon: Award, title: "Recognition & Rewards", description: "Celebrating achievements" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Culture & Values */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Work Culture & Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                At AppDost, <span className="bg-gradient-primary bg-clip-text text-transparent">we believe in:</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-card/40 backdrop-blur-xl border border-border/50 rounded-xl hover:shadow-glow-card transition-all duration-300 hover:-translate-y-1 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-foreground">{value.title}</h4>
                        <p className="text-xs text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Contact Card */}
          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow-primary h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary-foreground">
                  <Phone className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Get In Touch</h3>
                </div>

                <div className="space-y-4 text-primary-foreground/90">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4" />
                      <span className="font-medium">Website:</span>
                    </div>
                    <p className="font-bold text-lg">www.appdost.in</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      <span className="font-medium">Email:</span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold">contact@appdost.in</p>
                      <p className="font-bold">hr@appdost.in</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">Locations:</span>
                    </div>
                    <p className="font-bold">HQ-Patna, Motihari, Banka</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">Phone:</span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold">+91 76350 75422</p>
                      <p className="font-bold">+91 11 6929 0750</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-8">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 transition-all group"
                >
                  Join Our Team
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
