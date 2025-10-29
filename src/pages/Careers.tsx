import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const positions = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Banka / Remote",
      type: "Full-time",
      description: "We're looking for an experienced React developer to join our frontend team and build amazing user interfaces."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Patna / Hybrid",
      type: "Full-time",
      description: "Create beautiful and intuitive designs for web and mobile applications that delight our users."
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Motihari / Remote",
      type: "Full-time",
      description: "Build native and cross-platform mobile applications using React Native and Flutter."
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure smooth deployment processes."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Banka",
      type: "Full-time",
      description: "Drive business growth by identifying opportunities and building strong client relationships."
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Flexible work arrangements",
    "Health insurance coverage",
    "Professional development opportunities",
    "Modern office environment",
    "Team building activities",
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
  JOIN OUR TEAM
</h1>

              <p className="text-xl text-primary-foreground/80 font-bold">
                Build your career with India's fastest-growing IT company
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6">WHY APPDOST?</h2>
              <p className="text-lg text-foreground/80 font-bold">
                We're not just another IT company. We're a team of passionate innovators who believe in creating impact through technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-accent text-accent-foreground border-2 border-accent rounded-xl p-6 shadow-brutal text-center font-black animate-bounce-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">OPEN POSITIONS</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-background border-2 border-primary rounded-2xl p-6 shadow-brutal hover:shadow-brutal-hover transition-all animate-slide-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm font-bold text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-primary" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button className="font-black border-2 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 shrink-0">
                      APPLY NOW
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-foreground/80 font-bold">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">DON'T SEE YOUR ROLE?</h2>
            <p className="text-xl mb-8 font-bold">Send us your resume anyway! We're always looking for talented individuals.</p>
            <Button size="lg" className="bg-accent text-accent-foreground border-2 border-accent shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 font-black">
              SEND YOUR RESUME
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
