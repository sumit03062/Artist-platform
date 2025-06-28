"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Headphones, Users, Music, Wand2, Drama, Drum, BookOpen, Calendar, Check, Shield, Star, ArrowRight, LayoutDashboard, Search, ClipboardCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    title: "Singers",
    icon: Mic,
    description: "Professional vocalists for any event",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    title: "DJs",
    icon: Headphones,
    description: "Expert DJs to keep the party going",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    title: "Dancers",
    icon: Music,
    description: "Dynamic performers for entertainment",
    color: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    title: "Speakers",
    icon: Users,
    description: "Inspiring speakers for corporate events",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    title: "Magicians",
    icon: Wand2,
    description: "Mystifying magic shows and illusions",
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    title: "Comedians",
    icon: Drama,
    description: "Stand-up and comedy entertainment",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },
  {
    title: "Musicians",
    icon: Drum,
    description: "Instrumentalists and bands",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    title: "Storytellers",
    icon: BookOpen,
    description: "Poets, narrators, and cultural artists",
    color: "bg-gradient-to-br from-teal-500 to-cyan-600",
  },
]

const benefits = [
  {
    title: "Verified Talent",
    description: "All artists are professionally vetted",
    icon: <Shield className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Easy Booking",
    description: "Streamlined booking process",
    icon: <Calendar className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Responsive Dashboard",
    description: "Manage everything in one place",
    icon: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
  },
]

const features = [
  {
    title: "Artist Discovery",
    description: "Find the perfect performer for your event",
    icon: <Search className="w-5 h-5 text-cyan-400" />,
    tags: ["search", "filter", "discover"]
  },
  {
    title: "Booking Management",
    description: "Schedule and manage all your bookings",
    icon: <ClipboardCheck className="w-5 h-5 text-green-400" />,
    tags: ["calendar", "tracking", "management"]
  },
  {
    title: "Secure Payments",
    description: "Safe and reliable payment processing",
    icon: <Check className="w-5 h-5 text-blue-400" />,
    tags: ["security", "transactions", "escrow"]
  },
]

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1a0b2e] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1a0b2e]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-white dark:from-foreground dark:to-muted-foreground bg-clip-text text-transparent"
          >
            Find, Follow & Collaborate with Elite Performers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
            Your one-stop destination to connect with incredible artists and performers.


          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
          </motion.div>
        </motion.div>
      </section>

      {/* Category Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Find Your Perfect Artist
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover talented performers across various categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:bg-gray-800/30 transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-14 h-14 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1a0b2e]/50 to-[#0f172a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Artistly?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The trusted platform for event planners and artist managers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-800/30 transition-all duration-300"
              >
                <div className="bg-gray-800/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage your events and artists
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map(tag => (
                    <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-800 rounded-2xl p-12 text-center"
        >
          <div className="bg-gray-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of event planners and artists who trust Artistly for their entertainment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboard-artist">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Onboard Artist
              </Button>
            </Link>
            <Link href="/artists">
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Browse Artists
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}