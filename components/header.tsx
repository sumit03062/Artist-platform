"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore Artists", href: "/artists" },
  { name: "Onboard Artist", href: "/onboard-artist" },
  { name: "Dashboard", href: "/dashboard" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false) // <-- MOUNTED STATE
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Artistly Home">
            <div className="text-2xl" role="img" aria-label="Artistly Logo">🖌️</div>
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Artistly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-600 focus:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  pathname === item.href ? "text-cyan-600" : isScrolled ? "text-foreground" : "text-white"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
                }`}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
                }`}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors duration-300 hover:text-cyan-600 focus:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-md px-2 py-1 ${
                        pathname === item.href ? "text-cyan-600" : "text-foreground"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/artists" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-600/90 text-white">
                      Explore Artists
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
