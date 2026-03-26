import { Truck, Package, MapPin, Route, Snowflake, Warehouse, Handshake, PackageCheck, Cog, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    desc: "We provide full truckload services for businesses that need to transport large volumes of goods. In this service, one truck is dedicated to a single shipment, ensuring faster transit times and reduced handling. This minimizes the risk of damage and improves delivery efficiency. It is ideal for bulk shipments, large orders, and long-distance transportation where speed and safety are important.",
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    desc: "Our Less Than Truckload service is designed for smaller shipments that do not require a full truck. Multiple shipments from different customers are combined in one vehicle, helping reduce transportation costs. Despite shared space, we ensure proper handling, tracking, and timely delivery, making it a reliable and economical option for small to medium-sized businesses.",
  },
  {
    icon: MapPin,
    title: "Local Delivery",
    desc: "We offer fast and efficient local delivery services within cities and nearby areas. This service is suitable for businesses that require same-day or next-day deliveries. Our team ensures safe handling and timely distribution, making it perfect for retail stores, warehouses, and local suppliers.",
  },
  {
    icon: Route,
    title: "Long Distance Transport",
    desc: "Our long-distance transportation service covers deliveries across regions, provinces, and countries. We focus on maintaining delivery schedules while ensuring the safety of goods during transit. With proper route planning and experienced drivers, we provide reliable logistics solutions for extended distances.",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Transport (Cold Chain)",
    desc: "We provide temperature-controlled transportation for sensitive goods such as food products, pharmaceuticals, and other perishable items. Our refrigerated trucks are equipped to maintain consistent temperatures throughout the journey, ensuring product quality and safety from pickup to delivery.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Storage",
    desc: "We offer secure and flexible warehousing solutions for businesses that need storage before distribution. Our facilities are designed to keep goods safe and organized, whether for short-term or long-term storage. This service helps businesses manage inventory efficiently and streamline their supply chain operations.",
  },
  {
    icon: Handshake,
    title: "Freight Brokerage",
    desc: "Our freight brokerage service helps connect customers with reliable carriers. We manage the logistics process, including planning, coordination, and communication, to ensure smooth transportation. This service helps save time, reduce costs, and improve overall efficiency for businesses.",
  },
  {
    icon: PackageCheck,
    title: "Last-Mile Delivery",
    desc: "We specialize in last-mile delivery, ensuring that goods reach their final destination safely and on time. This is the most critical step in the delivery process, especially for retail and e-commerce businesses. Our focus is on speed, accuracy, and customer satisfaction.",
  },
  {
    icon: Cog,
    title: "Heavy Equipment Transport",
    desc: "We provide specialized transportation for heavy machinery and oversized equipment. This includes construction equipment, industrial machines, and large loads that require special handling. Our team ensures proper loading, securing, and safe delivery using suitable vehicles and techniques.",
  },
  {
    icon: Zap,
    title: "Express / Expedited Shipping",
    desc: "For urgent deliveries, we offer express shipping services with priority handling. This ensures that time-sensitive shipments are delivered as quickly as possible. It is ideal for critical business needs where delays are not acceptable.",
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="section-padding section-dark text-center">
        <AnimatedSection direction="down">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-2">Our Services</p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h1>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive trucking and logistics solutions tailored to meet your business needs.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="section-padding section-light">
        <div className="container mx-auto grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              direction={i % 2 === 0 ? "right" : "left"}
              delay={(i % 4) * 0.1}
            >
              <div className="service-card h-full">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
