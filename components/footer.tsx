import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0F3460] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🖌️</div>
              <span className="text-2xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The premier platform connecting event planners with talented performing artists. Browse, book, and manage
              artists effortlessly.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link href="/onboard-artist" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Onboard Artist
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
