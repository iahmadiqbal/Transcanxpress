import { Truck, Package, MapPin, Route, Snowflake, Warehouse, Handshake, PackageCheck, Cog, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    desc: "We provide full truckload services for businesses that need to transport large volumes of goods. In this service, one truck is dedicated to a single shipment, ensuring faster transit times and reduced handling. This minimizes the risk of damage and improves delivery efficiency. It is ideal for bulk shipments, large orders, and long-distance transportation where speed and safety are important.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80",
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    desc: "Our Less Than Truckload service is designed for smaller shipments that do not require a full truck. Multiple shipments from different customers are combined in one vehicle, helping reduce transportation costs. Despite shared space, we ensure proper handling, tracking, and timely delivery, making it a reliable and economical option for small to medium-sized businesses.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&q=80",
  },
  {
    icon: MapPin,
    title: "Local Delivery",
    desc: "We offer fast and efficient local delivery services within cities and nearby areas. This service is suitable for businesses that require same-day or next-day deliveries. Our team ensures safe handling and timely distribution, making it perfect for retail stores, warehouses, and local suppliers.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=700&q=80",
  },
  {
    icon: Route,
    title: "Long Distance Transport",
    desc: "Our long-distance transportation service covers deliveries across regions, provinces, and countries. We focus on maintaining delivery schedules while ensuring the safety of goods during transit. With proper route planning and experienced drivers, we provide reliable logistics solutions for extended distances.",
    img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=700&q=80",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Transport (Cold Chain)",
    desc: "We provide temperature-controlled transportation for sensitive goods such as food products, pharmaceuticals, and other perishable items. Our refrigerated trucks are equipped to maintain consistent temperatures throughout the journey, ensuring product quality and safety from pickup to delivery.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Storage",
    desc: "We offer secure and flexible warehousing solutions for businesses that need storage before distribution. Our facilities are designed to keep goods safe and organized, whether for short-term or long-term storage. This service helps businesses manage inventory efficiently and streamline their supply chain operations.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
  },
  {
    icon: Handshake,
    title: "Freight Brokerage",
    desc: "Our freight brokerage service helps connect customers with reliable carriers. We manage the logistics process, including planning, coordination, and communication, to ensure smooth transportation. This service helps save time, reduce costs, and improve overall efficiency for businesses.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
  },
  {
    icon: PackageCheck,
    title: "Last-Mile Delivery",
    desc: "We specialize in last-mile delivery, ensuring that goods reach their final destination safely and on time. This is the most critical step in the delivery process, especially for retail and e-commerce businesses. Our focus is on speed, accuracy, and customer satisfaction.",
    img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=700&q=80",
  },
  {
    icon: Cog,
    title: "Heavy Equipment Transport",
    desc: "We provide specialized transportation for heavy machinery and oversized equipment. This includes construction equipment, industrial machines, and large loads that require special handling. Our team ensures proper loading, securing, and safe delivery using suitable vehicles and techniques.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
  },
  {
    icon: Zap,
    title: "Express / Expedited Shipping",
    desc: "For urgent deliveries, we offer express shipping services with priority handling. This ensures that time-sensitive shipments are delivered as quickly as possible. It is ideal for critical business needs where delays are not acceptable.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=700&q=80",
  },
];

const serviceIds: Record<string, string> = {
  "Full Truckload (FTL)": "ftl",
  "Less Than Truckload (LTL)": "ltl",
  "Local Delivery": "local-delivery",
  "Long Distance Transport": "long-distance",
  "Refrigerated Transport (Cold Chain)": "refrigerated",
  "Warehousing & Storage": "warehousing",
  "Freight Brokerage": "freight-brokerage",
  "Last-Mile Delivery": "last-mile",
  "Heavy Equipment Transport": "heavy-equipment",
  "Express / Expedited Shipping": "express",
};

const ServicesPage = () => {
  return (
    <div>
      {/* Page Header — hero image + dot-grid pattern */}
      <section className="relative py-40 md:py-52 flex items-center justify-center overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
          alt="Transcan Xpress services"
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
            <p className="text-blue-400 font-heading font-semibold tracking-widest uppercase text-sm mb-2">Our Services</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">What We Offer</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Comprehensive trucking and logistics solutions tailored to meet your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid — white bg + subtle dot pattern + image cards */}
      <section className="section-padding section-light relative overflow-hidden">
        {/* Subtle dot-grid pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(213 80% 42%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* First 9 cards in a clean 3-col grid */}
        <div className="container mx-auto max-w-7xl relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 9).map((service, i) => (
            <AnimatedSection key={service.title} direction={i % 2 === 0 ? "right" : "left"} delay={(i % 3) * 0.1}>
              <div id={serviceIds[service.title]} className="group rounded-xl overflow-hidden border border-slate-100 bg-white hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_hsla(213,80%,42%,0.2)] h-full flex flex-col shadow-sm">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-7 h-7 text-primary flex-shrink-0" />
                    <h3 className="font-heading font-semibold text-xl text-slate-800">{service.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Last card centered on its own row */}
        <div className="container mx-auto max-w-7xl relative z-10 mt-6 lg:mt-8 flex justify-center">
          {services.slice(9).map((service) => (
            <AnimatedSection key={service.title} direction="up" delay={0.1} className="w-full sm:w-1/2 lg:w-1/3">
              <div id={serviceIds[service.title]} className="group rounded-xl overflow-hidden border border-slate-100 bg-white hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_hsla(213,80%,42%,0.2)] h-full flex flex-col shadow-sm">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-7 h-7 text-primary flex-shrink-0" />
                    <h3 className="font-heading font-semibold text-xl text-slate-800">{service.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
