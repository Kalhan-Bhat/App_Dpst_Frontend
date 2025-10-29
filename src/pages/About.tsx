import { Users, Target, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Target, value: "200+", label: "Projects Delivered" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth."
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through dedication and excellence."
    },
    {
      title: "Quality Driven",
      description: "Every line of code, every design element is crafted with precision and attention to detail."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-diagonal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl text-white font-extrabold mb-6 animate-reveal">
  ABOUT APPDOST
</h1>


              <p className="text-xl text-primary-foreground/80 font-bold">
                Your trusted partner in digital transformation since 2025
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b-4 border-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-accent text-accent-foreground border-2 border-accent rounded-2xl p-6 shadow-brutal text-center animate-bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-3xl font-black mb-2">{stat.value}</div>
                    <div className="text-sm font-bold">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8">OUR STORY</h2>
              <div className="space-y-6 text-lg text-foreground/80 font-bold">
                <p>
                  AppDost was founded with a simple mission: to transform innovative ideas into powerful digital solutions that drive business success.
                </p>
                <p>
                  Starting from our headquarters in Banka, we've grown to serve clients across India and beyond, delivering exceptional IT solutions that combine creativity, technology, and strategic thinking.
                </p>
                <p>
                  Today, we're proud to be a complete IT solution provider, offering everything from mobile app development to enterprise software solutions, all backed by our commitment to excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">OUR VALUES</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background border-2 border-primary rounded-2xl p-8 shadow-brutal"
                >
                  <h3 className="text-2xl font-black mb-4 text-primary">{value.title}</h3>
                  <p className="text-foreground/80 font-bold">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
