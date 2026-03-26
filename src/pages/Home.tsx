import { Link } from "react-router-dom";
import { Truck, Package, Snowflake, Warehouse, Zap, ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-trucks.jpg";
import aboutImg from "@/assets/about-trucks.jpg";

const services = [
  { icon: Truck, title: "Full Truckload", desc: "Dedicated trucks for large volume shipments with faster transit times." },
  { icon: Package, title: "Local Delivery", desc: "Fast and efficient delivery within cities and nearby areas." },
  { icon: Snowflake, title: "Refrigerated Transport", desc: "Temperature-controlled transport for perishable and sensitive goods." },
  { icon: Warehouse, title: "Warehousing", desc: "Secure and flexible storage solutions for your business needs." },
  { icon: Zap, title: "Express Shipping", desc: "Priority handling for urgent and time-sensitive shipments." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Reliable Service", desc: "Consistent and dependable logistics solutions you can count on." },
  { icon: Clock, title: "On-Time Delivery", desc: "We take timelines seriously — your goods arrive when promised." },
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals with years of industry expertise." },
  { icon: Truck, title: "Safe Transportation", desc: "Advanced safety measures to protect every shipment." },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Transcan Xpress fleet of trucks"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection direction="down" delay={0.1}>
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4">
              Transcan Xpress — Calgary, AB
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Reliable Trucking &<br />
              Logistics <span className="text-gradient">Services</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Fast, secure, and dependable transportation solutions connecting businesses across Canada.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="btn-outline text-base">
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Overview */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <img
                src={aboutImg}
                alt="About Transcan Xpress operations"
                className="rounded-lg shadow-2xl w-full"
                loading="lazy"
                width={1280}
                height={720}
              />
            </AnimatedSection>
            <AnimatedSection direction="left">
              <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Logistics Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Transcan Xpress, we provide end-to-end trucking and logistics solutions across Canada. Whether it's local deliveries or long-distance hauls, we ensure safe, reliable, and timely transportation with our experienced team.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a commitment to excellence and customer satisfaction, we've built a reputation for delivering more than just goods — we deliver trust.
              </p>
              <Link to="/about" className="btn-primary text-sm">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding section-dark">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className="text-center mb-12">
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What We Offer
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} direction="up" delay={i * 0.1}>
                <div className="service-card h-full">
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection direction="up" delay={0.3} className="text-center mt-10">
            <Link to="/services" className="btn-outline text-sm">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className="text-center mb-12">
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              The Transcan Xpress Advantage
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} direction="up" delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-dark">
        <div className="container mx-auto text-center">
          <AnimatedSection direction="scale">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Ship with Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Get in touch today for reliable trucking and logistics solutions tailored to your business.
            </p>
            <Link to="/contact" className="btn-primary text-base">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
