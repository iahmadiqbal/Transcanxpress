import { Target, Eye, TrendingUp, Award, Heart, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/about-trucks.jpg";

const values = [
  { icon: Heart, title: "Trust", desc: "Building lasting relationships with our clients through transparency and honesty." },
  { icon: Shield, title: "Safety", desc: "Prioritizing the safety of goods, drivers, and communities in every operation." },
  { icon: Award, title: "Reliability", desc: "Consistent and dependable service that our clients can always count on." },
];

const storyItems = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide safe, efficient, and reliable trucking services that help businesses grow by ensuring their goods reach their destinations on time, every time.",
    img: "/images/ourmission.png",
  },
  {
    icon: Eye,
    title: "Our Purpose",
    text: "To be a trusted logistics partner that businesses can rely on for all their transportation needs, offering personalized solutions with professionalism and care.",
    img: "/images/ourpurpose.png",
  },
  {
    icon: TrendingUp,
    title: "Our Future Vision",
    text: "To expand our fleet and service offerings across Canada, leveraging technology and innovation to become a leading name in the trucking and logistics industry.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
  },
  {
    icon: Award,
    title: "Our Experience",
    text: "With extensive experience in the transportation industry, our team understands the complexities of logistics and delivers solutions that meet the unique needs of every client.",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80",
  },
];

const AboutPage = () => {
  return (
    <div>

      {/* Page Header — hero image + dot-grid pattern */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden text-center">
        <img
          src="/images/AboutUs.png"
          alt="Transcan Xpress trucks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(215_40%_10%/0.65)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(213 80% 70%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 container mx-auto px-5 sm:px-8">
          <AnimatedSection direction="down">
            <p className="text-blue-400 font-heading font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">About Us</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Who We Are
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-3xl mx-auto leading-relaxed px-4">
              A dedicated team committed to delivering excellence in trucking and logistics services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Image + Intro — light + diagonal-line pattern */}
      <section className="section-padding section-light relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(213 80% 42%) 0px, hsl(213 80% 42%) 1px, transparent 1px, transparent 24px)",
          }}
        />
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <AnimatedSection direction="right">
            <img
              src={aboutImg}
              alt="Transcan Xpress operations"
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
          </AnimatedSection>
          <AnimatedSection direction="left">
            <h2 className="font-heading text-3xl font-bold text-slate-800 mb-4">Transcan Xpress</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Based in Calgary, Alberta, Transcan Xpress is a professional trucking and logistics company providing reliable transportation solutions. We are committed to moving goods safely, efficiently, and on time.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With years of experience and a dedicated team, we have built strong relationships with businesses across Canada by consistently delivering quality service and going above and beyond expectations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What Drives Us — dark + dot pattern + image cards */}
      <section className="section-padding section-dark relative overflow-hidden">
        {/* Dot-grid pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(213 80% 70%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Diagonal accent lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(213 80% 60%) 0px, hsl(213 80% 60%) 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="container mx-auto relative z-10">
          <AnimatedSection direction="up" className="text-center mb-12">
            <p className="text-blue-400 font-heading font-semibold tracking-widest uppercase text-sm mb-2">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">What Drives Us</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-8">
            {storyItems.map((item, i) => (
              <AnimatedSection key={item.title} direction={i % 2 === 0 ? "right" : "left"} delay={i * 0.1}>
                <div className="group rounded-xl overflow-hidden border border-white/10 bg-[hsl(215_35%_18%)] hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_hsla(213,80%,42%,0.3)] h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  {/* Text */}
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-7 h-7 text-blue-400 flex-shrink-0" />
                      <h3 className="font-heading font-semibold text-xl text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values — light + subtle hex/dot pattern */}
      <section className="section-padding section-light relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(213 80% 42%) 0px, hsl(213 80% 42%) 1px, transparent 1px, transparent 24px)",
          }}
        />
        <div className="container mx-auto relative z-10">
          <AnimatedSection direction="up" className="text-center mb-12">
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800">What We Stand For</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} direction="up" delay={i * 0.15}>
                <div className="text-center p-8 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-blue-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-slate-800 mb-2">{v.title}</h3>
                  <p className="text-slate-500">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
