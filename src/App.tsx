import { motion } from "motion/react";
import { 
  Cpu, 
  Code2, 
  MonitorPlay, 
  Network, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "AI Platform", href: "#ai-platform" },
    { name: "Software", href: "#software" },
    { name: "LED Display", href: "#led" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-dark/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-display tracking-tighter">PHOENIX <span className="text-brand">SOVEREIGN</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-brand transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-brand hover:bg-brand-dark px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-dark-surface border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button className="bg-brand w-full py-3 rounded-xl font-semibold">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">AI-Driven Future Tech</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1]">
              Pioneering <span className="gradient-text">AI Innovation</span> <br />
              & Display Solutions
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
              We provide comprehensive AI development platforms, software customization, and commercial LED display solutions to help businesses achieve intelligent transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand hover:bg-brand-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group">
                Explore Solutions <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand/20">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Technology" 
                className="w-full h-auto object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl hidden lg:block animate-bounce-slow">
              <Cpu className="text-brand w-8 h-8 mb-2" />
              <div className="text-xs font-bold text-white/40 uppercase">AI Processing</div>
              <div className="text-xl font-bold">99.9% Accuracy</div>
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl hidden lg:block animate-pulse">
              <MonitorPlay className="text-cyan-400 w-8 h-8 mb-2" />
              <div className="text-xs font-bold text-white/40 uppercase">LED Display</div>
              <div className="text-xl font-bold">4K Ultra HD</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "AI Development Platform",
      desc: "Providing robust AI infrastructure to support businesses in building and deploying intelligent applications rapidly.",
      color: "text-blue-400",
      id: "ai-platform"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Public Platform",
      desc: "A public-facing AI service interface integrating various intelligent algorithms to enhance social efficiency.",
      color: "text-purple-400",
      id: "ai-public"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "AI Software Development",
      desc: "Tailor-made AI-driven software solutions and system integration based on specific business requirements.",
      color: "text-brand",
      id: "software"
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Commercial LED Displays",
      desc: "Professional LED display installation, wholesale, and maintenance, combined with AI content management.",
      color: "text-cyan-400",
      id: "led"
    }
  ];

  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Service Areas</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with high-quality hardware to provide one-stop intelligent technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-brand font-bold text-sm">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl max-w-xs">
              <div className="text-4xl font-bold text-brand mb-2">10+</div>
              <div className="text-sm font-semibold text-white/60 uppercase tracking-widest">Years of Innovation</div>
              <p className="text-xs mt-2 text-white/40">Deeply rooted in AI and LED industries with extensive practical experience.</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About PHOENIX SOVEREIGN</h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Phoenix Sovereign is dedicated to transforming AI technology into real business value. We are not just a technology provider; we are your strategic partner.
            </p>
            <div className="space-y-6">
              {[
                "Expert AI Algorithm Engineering Team",
                "High-Quality LED Display Supply Chain",
                "Comprehensive Technical Support",
                "Continuous Innovation & R&D"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand" />
                  </div>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-white text-dark px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all">
              Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-brand">
              <h2 className="text-4xl font-bold mb-8">Ready to Start Your <br />Intelligent Journey?</h2>
              <p className="text-white/80 mb-12 text-lg">
                Whether you are seeking AI development support or high-quality LED solutions, our expert team is ready to serve you.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email Us</div>
                    <div className="text-xl font-bold">info@phoenixsovereign.co.uk</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Call Us</div>
                    <div className="text-xl font-bold">+44 1234 567890</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Our Office</div>
                    <div className="text-xl font-bold">61a Bridge Street, Kington, United Kingdom, HR5 3DJ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/60">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white/60">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-all" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60">Interested Service</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-all appearance-none">
                    <option className="bg-dark">AI Development Platform</option>
                    <option className="bg-dark">AI Software Development</option>
                    <option className="bg-dark">LED Display Installation</option>
                    <option className="bg-dark">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-all" placeholder="Tell us about your project..." />
                </div>
                <button className="w-full bg-brand hover:bg-brand-dark py-4 rounded-xl font-bold text-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-display tracking-tighter">PHOENIX <span className="text-brand">SOVEREIGN</span></span>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="text-sm text-white/40">
            © 2026 Phoenix Sovereign Technology Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const LEDShowcase = () => {
  return (
    <section id="led" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Professional <span className="text-cyan-400">LED Solutions</span></h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We offer a full range of LED displays from monochrome to full-color, indoor to outdoor. Combined with AI control systems, we make your content more engaging.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-400 mb-1">P1.2 - P10</div>
                <div className="text-sm text-white/40">Multiple Pitch Options</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-400 mb-1">10000+ nits</div>
                <div className="text-sm text-white/40">Ultra High Brightness</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200" 
                alt="LED Display Showcase" 
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Live Installation
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <LEDShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
