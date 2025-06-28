"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
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
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 shadow-xl border-cyan-400"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="text-3xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                🎨
              </motion.div>
              <span
                className={`text-3xl font-extrabold tracking-tight ${
                  isScrolled ? "text-cyan-700 dark:text-white" : "text-white"
                }`}
              >
                Artistly
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={item.name}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "text-cyan-600"
                      : isScrolled
                      ? "text-gray-900 dark:text-white"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-cyan-500 transition-all duration-300"></span>
              </motion.div>
            ))}
          </nav>

          {/* Theme & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <motion.button
                whileTap={{ rotate: 360 }}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`transition p-2 rounded-full ${
                  isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <motion.button
                whileTap={{ rotate: 360 }}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`transition p-2 rounded-full ${
                  isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </motion.button>
            )}

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition ${
                    isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                  }`}
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  exit={{ x: 100 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col space-y-6 mt-10"
                >
                  <h2 className="text-xl font-bold">Navigation</h2>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-all hover:text-cyan-600 ${
                        pathname === item.href ? "text-cyan-600" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/artists" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                      Explore Artists
                    </Button>
                  </Link>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
