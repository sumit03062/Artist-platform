"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Headphones, Users, Music, Wand2, Drama, Drum, BookOpen } from "lucide-react"
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
    icon: "✓",
  },
  {
    title: "Easy Booking",
    description: "Streamlined booking process",
    icon: "📅",
  },
  {
    title: "Responsive Dashboard",
    description: "Manage everything in one place",
    icon: "📊",
  },
]

export default function HomePage() {
  return (
    <div className="bg-[#1A1A2E] dark:bg-background text-white dark:text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Concert crowd background"
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/80 to-[#0F3460]/60 dark:from-background/80 dark:to-background/60" />
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 dark:from-foreground dark:to-muted-foreground bg-clip-text text-transparent"
          >
            Connect with the Best Performing Artists!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-[#F4F4F4] dark:text-muted-foreground max-w-2xl mx-auto"
          >
            Browse, book, and manage artists effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/artists">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-600/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Browse Artists
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Cards Section */}
      <section className="py-20 px-4 bg-[#1A1A2E] dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-foreground">
              Find Your Perfect Artist
            </h2>
            <p className="text-xl text-[#F4F4F4] dark:text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="bg-white/10 dark:bg-card backdrop-blur-sm border-white/20 dark:border-border hover:bg-white/20 dark:hover:bg-card/80 transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white dark:text-foreground">{category.title}</h3>
                    <p className="text-[#F4F4F4] dark:text-muted-foreground leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Artistly Section */}
      <section className="py-20 px-4 bg-white/5 dark:bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-foreground">
              Why Choose Artistly?
            </h2>
            <p className="text-xl text-[#F4F4F4] dark:text-muted-foreground max-w-2xl mx-auto">
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
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white dark:text-foreground">{benefit.title}</h3>
                <p className="text-[#F4F4F4] dark:text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1A1A2E] dark:bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-[#F4F4F4] dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of event planners and artists who trust Artistly for their entertainment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboard-artist">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-600/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Onboard Artist
              </Button>
            </Link>
            <Link href="/artists">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-600/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
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
