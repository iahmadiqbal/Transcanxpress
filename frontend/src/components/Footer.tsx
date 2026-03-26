import { Link, useNavigate } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

declare global {
  interface Window { __pendingScrollId?: string; }
}

const Footer = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services", { replace: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="section-dark border-t border-white/10">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">TX</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">TRANSCAN</span>
                <span className="text-blue-400 font-heading font-bold text-lg ml-1">XPRESS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Reliable trucking and logistics services across Canada. We deliver trust, safety, and efficiency.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/transcanxpress/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                {/* Facebook SVG */}
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/transcanxpress/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                {/* Instagram SVG */}
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                href="https://x.com/TranscanXpress"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                {/* X / Twitter SVG */}
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              {[
                "Full Truckload (FTL)",
                "Less Than Truckload (LTL)",
                "Refrigerated Transport",
                "Warehousing & Storage",
                "Express Shipping",
              ].map((label) => (
                <button
                  key={label}
                  onClick={goToServices}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Info</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+14035426082" className="text-slate-400 hover:text-blue-400 transition-colors">
                  +1 403-542-6082
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@transcanxpress.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  info@transcanxpress.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=1212+1st+Street+SE,+Calgary+AB,+T2G+2H8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  1212 1st Street SE,<br />Calgary AB, T2G 2H8
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Transcan Xpress. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">Calgary, Alberta, Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
