import { Code2, Palette, Smartphone, Globe2, Database, Sparkles } from "lucide-react";

const BentoServices = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-slide-right">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-card border-2 border-primary rounded-full shadow-brutal mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold">WHAT WE DO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            OUR CORE
            <br />
            <span className="text-primary">EXPERTISE</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
          {/* Large card - spans 2 columns */}
          <div className="md:col-span-2 bg-gradient-hero text-primary-foreground border-2 border-primary rounded-3xl p-8 md:p-12 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-1 group">
            <Globe2 className="w-12 h-12 mb-6" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">WEB APPLICATION DEVELOPMENT</h3>
            <p className="text-lg opacity-90 mb-6">
              Creating responsive, high-performance web applications using the latest frameworks and technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-sm font-bold">React</span>
              <span className="px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-sm font-bold">Next.js</span>
              <span className="px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-sm font-bold">TypeScript</span>
            </div>
          </div>

          {/* Tall card */}
          <div className="md:row-span-2 bg-card border-2 border-foreground rounded-3xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-1 group">
            <Palette className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-2xl font-black mb-4">UI/UX DESIGN</h3>
            <p className="text-muted-foreground mb-6">
              Crafting intuitive, user-centric designs that guarantee exceptional satisfaction.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-bold">User Research</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-bold">Wireframing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-bold">Brand Identity</span>
              </div>
            </div>
          </div>

          {/* Square card */}
          <div className="bg-accent text-accent-foreground border-2 border-accent rounded-3xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-1 group">
            <Smartphone className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-black mb-2">MOBILE APPS</h3>
            <p className="text-sm opacity-90">
              Native & cross-platform applications
            </p>
            <div className="mt-6 text-4xl font-black">4+</div>
            <div className="text-xs font-bold">APPS DELIVERED</div>
          </div>

          {/* Wide card */}
          <div className="md:col-span-2 bg-card border-2 border-primary rounded-3xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-1 group flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
                <Code2 className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">FULL-STACK DEVELOPMENT</h3>
              <p className="text-muted-foreground">
                End-to-end development covering frontend, backend, database optimization, and cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Square card */}
          <div className="bg-primary text-primary-foreground border-2 border-primary rounded-3xl p-8 shadow-brutal hover:shadow-brutal-hover transition-all hover:-translate-y-1 group">
            <Database className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-black mb-2">CUSTOM SOFTWARE</h3>
            <p className="text-sm opacity-90">
              Scalable enterprise solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
