import { socialLinks, businessInfo } from "@/config/social";

const navLinks = ["Home", "About", "Packages", "Portfolio", "Reviews", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl text-white tracking-[0.2em] mb-4">
            {businessInfo.name}
          </h3>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            {businessInfo.tagline}
          </p>
          <p className="text-white/30 text-xs mt-2">
            {businessInfo.location.city}, {businessInfo.location.state}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/50 text-xs tracking-[0.2em] uppercase hover:text-champagne transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social & Platform Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {Object.values(socialLinks).map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-champagne transition-colors text-sm tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Email */}
        <div className="text-center mb-8">
          <a
            href={`mailto:${businessInfo.email}`}
            className="text-white/40 text-sm hover:text-champagne transition-colors"
          >
            {businessInfo.email}
          </a>
        </div>

        {/* Divider */}
        <div className="w-20 h-[1px] bg-white/20 mx-auto mb-8" />

        <p className="text-center text-white/30 text-xs tracking-widest">
          &copy; {new Date().getFullYear()} {businessInfo.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
