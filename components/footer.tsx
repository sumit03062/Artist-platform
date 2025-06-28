import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  LucideIcon
} from "lucide-react";
import { FC } from "react";

interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
}

export const Footer: FC = () => {
  // Social links data
  const socialLinks: SocialLink[] = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  // Quick links data
  const quickLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Browse Artists", href: "/artists" },
    { name: "Onboard Artist", href: "/onboard-artist" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Pricing", href: "/pricing" },
  ];

  // Support links data
  const supportLinks: NavLink[] = [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Community", href: "#" },
  ];

  // Legal links data
  const legalLinks: NavLink[] = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookies", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1a0b2e] via-[#2a0b3c] to-[#3a0ca3] text-white overflow-hidden">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-12"
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white"
            opacity="0.05"
          ></path>
        </svg>
      </div>

      {/* Glowing elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="text-3xl bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg p-2 transition-transform duration-500 group-hover:rotate-[30deg]">
                🎭
              </div>
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200">
                Artistly
              </span>
            </div>
            <p className="text-blue-100 mb-8 max-w-md text-lg transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              Connecting event planners with extraordinary performing talent. Discover, book, and manage artists in one seamless platform.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="relative text-blue-100 hover:text-white transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-black/70 px-2 py-1 rounded whitespace-nowrap transition-all duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 inline-block transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-200 hover:to-blue-200">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    href={link.href} 
                    className="flex items-center transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white group-hover:animate-pulse transition-all duration-300"></span>
                    <span className="text-blue-100 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 inline-block transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-200 hover:to-blue-200">
              Support
            </h3>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    href={link.href} 
                    className="flex items-center transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-white group-hover:animate-pulse transition-all duration-300"></span>
                    <span className="text-blue-100 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 inline-block transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-200 hover:to-blue-200">
              Newsletter
            </h3>
            <p className="text-blue-100 mb-4 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              Subscribe for artist updates and exclusive offers
            </p>
            <form className="flex flex-col space-y-4">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300 group-hover:text-white transition-all duration-300" />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300 transition-all duration-300 group-hover:bg-blue-800/30 group-hover:border-blue-500/50"
                  required
                />
              </div>
              <button 
                type="submit"
                className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="absolute -inset-2 bg-white rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></span>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-700/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 mb-4 md:mb-0 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            © {new Date().getFullYear()} Artistly. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="relative text-blue-200 hover:text-white transition-colors text-sm group"
              >
                {link.name}
                <span className="absolute left-0 right-0 h-px -bottom-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};