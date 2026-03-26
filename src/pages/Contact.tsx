import { useState, FormEvent } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="section-padding section-dark text-center">
        <AnimatedSection direction="down">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">Contact Us</p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or need a quote? Reach out to us and our team will get back to you promptly.
          </p>
        </AnimatedSection>
      </section>

      <section className="section-padding section-light">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="right">
            <div className="service-card">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="btn-primary mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Feel free to reach out to us through phone or visit our office. We're here to help with all your trucking and logistics needs.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 403-542-6082</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">1212 1st Street SE, Calgary AB, T2G 2H8</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
