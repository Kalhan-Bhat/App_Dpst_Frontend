import { Monitor, Smartphone, Target, Rocket } from "lucide-react";

const MarqueeStats = () => {
  const stats = [
    { icon: Monitor, value: "10+", label: "WEB PROJECTS" },
    { icon: Smartphone, value: "4+", label: "MOBILE APPS" },
    { icon: Target, value: "1", label: "CRM PROJECT" },
    { icon: Rocket, value: "2025", label: "FOUNDED" },
  ];

  // Duplicate for seamless loop
  const duplicatedStats = [...stats, ...stats];

  return (
    <section className="py-12 bg-accent/10 border-y-2 border-accent overflow-hidden relative">
      <div className="flex animate-marquee">
        {duplicatedStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-6 px-12 border-r-2 border-accent/30"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-4xl font-black text-foreground">{stat.value}</div>
                <div className="text-xs font-bold text-muted-foreground tracking-wider">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarqueeStats;
