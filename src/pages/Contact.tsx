import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const offices = [
    {
      name: "Headquarters - Banka",
      address: "Main Office, Banka, Bihar",
      phone: "+91 76350 75422",
      email: "contact@appdost.in",
    },
    {
      name: "Branch Office - Motihari",
      address: "Branch Location, Motihari, Bihar",
      phone: "+91 11 6929 0750",
      email: "contact@appdost.in",
    },
    {
      name: "Branch Office - Patna",
      address: "Branch Location, Patna, Bihar",
      phone: "+91 76350 75422",
      email: "contact@appdost.in",
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
                GET IN TOUCH WITH US
              </h1>
              <p className="text-xl text-primary-foreground/80 font-bold">
                Let's discuss how we can help bring your ideas to life
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-background border-2 border-primary rounded-2xl p-8 shadow-brutal">
                <h2 className="text-3xl font-black mb-6">SEND US A MESSAGE</h2>
<form className="space-y-6">
  <div>
    <label className="block text-sm font-black mb-2">YOUR NAME</label>
    <input
      type="text"
      className="w-full px-4 py-3 border-2 border-primary rounded-lg font-bold text-black focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="John Doe"
    />
  </div>

  <div>
    <label className="block text-sm font-black mb-2">EMAIL ADDRESS</label>
    <input
      type="email"
      className="w-full px-4 py-3 border-2 border-primary rounded-lg font-bold text-black focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label className="block text-sm font-black mb-2">PHONE NUMBER</label>
    <input
      type="tel"
      className="w-full px-4 py-3 border-2 border-primary rounded-lg font-bold text-black focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="+91 XXXXX XXXXX"
    />
  </div>

  <div>
    <label className="block text-sm font-black mb-2">YOUR MESSAGE</label>
    <textarea
      rows={5}
      className="w-full px-4 py-3 border-2 border-primary rounded-lg font-bold text-black focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      placeholder="Tell us about your project..."
    />
  </div>

                  <Button className="w-full font-black border-2 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1">
                    SEND MESSAGE
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-primary text-primary-foreground border-2 border-primary rounded-2xl p-8 shadow-brutal">
                  <h2 className="text-3xl font-black mb-6">CONTACT INFORMATION</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-black mb-1">EMAIL</div>
                        <div className="font-bold">contact@appdost.in</div>
                        <div className="font-bold">hr@appdost.in</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-black mb-1">PHONE</div>
                        <div className="font-bold">+91 76350 75422</div>
                        <div className="font-bold">+91 11 6929 0750</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-black mb-1">OFFICE HOURS</div>
                        <div className="font-bold">Mon - Sat: 9:00 AM - 6:00 PM IST</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <section className="py-20 bg-muted">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                      <div className="bg-accent text-accent-foreground border-2 border-accent rounded-2xl p-8 shadow-brutal">
                        <h3 className="text-2xl font-black mb-4">OUR OFFICES</h3>
                        <div className="space-y-4">
                          {offices.map((office, index) => (
                            <div
                              key={index}
                              className="pb-4 border-b-2 border-accent-foreground/20 last:border-0 last:pb-0"
                            >
                              <div className="font-black mb-2">{office.name}</div>
                              <div className="text-sm font-bold">{office.address}</div>
                            </div>
                          ))}
                        </div>

                        {/* Google Map Embed */}
                        <div className="mt-6 w-full h-64 rounded-xl overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211449.24569007338!2d86.74322108087672!3d24.871246024573598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0ff2ddec7eb1d%3A0x63ad80b089e7a30!2sLakrikola!5e0!3m2!1sen!2sin!4v1761762138035!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
