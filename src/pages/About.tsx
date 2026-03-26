import { Target, Eye, TrendingUp, Award, Heart, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/about-trucks.jpg";

const values = [
  { icon: Heart, title: "Trust", desc: "Building lasting relationships with our clients through transparency and honesty." },
  { icon: Shield, title: "Safety", desc: "Prioritizing the safety of goods, drivers, and communities in every operation." },
  { icon: Award, title: "Reliability", desc: "Consistent and dependable service that our clients can always count on." },
];

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="section-padding section-dark text-center">
        <AnimatedSection direction="down">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h1>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dedicated team committed to delivering excellence in trucking and logistics services.
          </p>
        </AnimatedSection>
      </section>

      {/* About Image + Intro */}
      <section className="section-padding section-light">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right">
            <img src={aboutImg} alt="Transcan Xpress operations" className="rounded-lg shadow-2xl w-full" loading="lazy" width={1280} height={720} />
          </AnimatedSection>
          <AnimatedSection direction="left">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Transcan Xpress</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based in Calgary, Alberta, Transcan Xpress is a professional trucking and logistics company providing reliable transportation solutions. We are committed to moving goods safely, efficiently, and on time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience and a dedicated team, we have built strong relationships with businesses across Canada by consistently delivering quality service and going above and beyond expectations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission, Purpose, Vision, Experience */}
      <section className="section-padding section-dark">
        <div className="container mx-auto grid sm:grid-cols-2 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To provide safe, efficient, and reliable trucking services that help businesses grow by ensuring their goods reach their destinations on time, every time." },
            { icon: Eye, title: "Our Purpose", text: "To be a trusted logistics partner that businesses can rely on for all their transportation needs, offering personalized solutions with professionalism and care." },
            { icon: TrendingUp, title: "Our Future Vision", text: "To expand our fleet and service offerings across Canada, leveraging technology and innovation to become a leading name in the trucking and logistics industry." },
            { icon: Award, title: "Our Experience", text: "With extensive experience in the transportation industry, our team understands the complexities of logistics and delivers solutions that meet the unique needs of every client." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} direction={i % 2 === 0 ? "right" : "left"} delay={i * 0.1}>
              <div className="service-card h-full">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <AnimatedSection direction="up" className="text-center mb-12">
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} direction="up" delay={i * 0.15}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
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
