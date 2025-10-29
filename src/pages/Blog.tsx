import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Top 10 Web Development Trends in 2025",
      excerpt: "Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.",
      author: "Rahul Kumar",
      date: "March 15, 2025",
      category: "Web Development",
      readTime: "5 min read",
      image: "src/pages/download (1).jpeg" // 🔹 Placeholder image path
    },
    {
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Learn best practices for creating high-performance mobile applications that scale with your business.",
      author: "Priya Singh",
      date: "March 10, 2025",
      category: "Mobile Development",
      readTime: "8 min read",
      image: "src/pages/download (2).jpeg" // 🔹 Placeholder image path
    },
    {
      title: "The Importance of UI/UX in Business Success",
      excerpt: "How good design can transform your business and create memorable user experiences.",
      author: "Amit Sharma",
      date: "March 5, 2025",
      category: "Design",
      readTime: "6 min read",
      image: "src/pages/download (3).jpeg" // 🔹 Placeholder image path
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every business should implement to protect their digital assets.",
      author: "Neha Gupta",
      date: "February 28, 2025",
      category: "Security",
      readTime: "7 min read",
      image: "src/pages/download.png" // 🔹 Placeholder image path
    },
    {
      title: "Cloud Migration: A Complete Guide",
      excerpt: "Everything you need to know about moving your infrastructure to the cloud safely and efficiently.",
      author: "Vikram Patel",
      date: "February 20, 2025",
      category: "Cloud",
      readTime: "10 min read",
      image: "src/pages/images (2).jpeg" // 🔹 Placeholder image path
    },
    {
      title: "Agile Development: Myths vs Reality",
      excerpt: "Debunking common misconceptions about Agile methodology and how to implement it effectively.",
      author: "Sanjay Verma",
      date: "February 15, 2025",
      category: "Development",
      readTime: "6 min read",
      image: "src/pages/images (3).jpeg" // 🔹 Placeholder image path
    },
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Design", "Security", "Cloud"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-diagonal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl text-white font-extrabold mb-6 animate-reveal">
                OUR BLOG
              </h1>

              <p className="text-xl text-primary-foreground/80 font-bold">
                Insights, tutorials, and industry news from our expert team
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b-2 border-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="font-black border-2 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-0.5"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-background border-2 border-primary rounded-2xl overflow-hidden shadow-brutal hover:shadow-brutal-hover hover:-translate-y-2 transition-all animate-bounce-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Featured Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/600x300?text=Blog+Image")} // fallback placeholder
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-black text-accent bg-accent/10 px-3 py-1 rounded-full border-2 border-accent">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-black mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    <p className="text-foreground/80 font-bold mb-4 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4 text-xs font-bold text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full font-black border-2 border-primary"
                    >
                      READ MORE
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                SUBSCRIBE TO OUR NEWSLETTER
              </h2>
              <p className="text-xl mb-8 font-bold">
                Get the latest insights and updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg border-2 border-primary font-bold bg-background text-foreground"
                />
                <Button className="bg-primary text-primary-foreground border-2 border-primary shadow-brutal hover:shadow-brutal-hover hover:-translate-y-1 font-black">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
