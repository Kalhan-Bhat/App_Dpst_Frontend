import { Monitor, Smartphone, Target, Rocket } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Monitor, value: "10+", label: "WEB PROJECTS", color: "text-blue-400" },
    { icon: Smartphone, value: "4+", label: "ANDROID APPS", color: "text-purple-400" },
    { icon: Target, value: "1", label: "CRM PROJECT", color: "text-pink-400" },
    { icon: Rocket, value: "2025", label: "FOUNDED YEAR", color: "text-cyan-400" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-glow-card">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:shadow-glow-primary transition-all duration-300">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium tracking-wider">
                      {stat.label}
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

export default Stats;
