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
    <div>
      {/* Page Header — hero image + dot-grid pattern */}
      <section className="relative py-40 md:py-52 flex items-center justify-center overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80"
          alt="Contact Transcan Xpress"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(215_40%_10%/0.78)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(213 80% 70%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection direction="down">
            <p className="text-blue-400 font-heading font-semibold tracking-widest uppercase text-sm mb-2">Contact Us</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Have a question or need a quote? Reach out to us and our team will get back to you promptly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info — light */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 lg:gap-16">
          <AnimatedSection direction="right">
            <div className="bg-white border border-slate-100 rounded-xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="flex flex-col gap-6 md:pt-2">
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-800 mb-3">Contact Information</h2>
                <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                  Feel free to reach out to us through phone or visit our office. We're here to help with all your trucking and logistics needs.
                </p>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-800 text-sm mb-0.5">Phone</h3>
                    <a href="tel:+14035426082" className="text-primary font-medium text-sm hover:underline">
                      +1 403-542-6082
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-800 text-sm mb-0.5">Address</h3>
                    <p className="text-slate-500 text-sm">1212 1st Street SE, Calgary AB, T2G 2H8</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm h-52 sm:h-64 md:h-72 lg:flex-1">
                <iframe
                  title="Transcan Xpress Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d-114.0530!3d51.0430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fc7b0000001%3A0x1!2s1212+1st+St+SE%2C+Calgary%2C+AB+T2G+2H8!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
