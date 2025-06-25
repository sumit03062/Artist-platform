"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, Star } from "lucide-react"
import Image from "next/image"
import type { Artist } from "@/lib/mock-data"

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const handleQuoteRequest = () => {
    console.log("Quote requested for:", artist.name)
    alert(`Quote request sent for ${artist.name}! We'll get back to you soon.`)
  }

  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }} className="group w-full">
      <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border h-full flex flex-col">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={artist.image || "height=300&width=400"}
            alt={`${artist.name} - ${artist.categories.join(", ")} artist`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
          <div className="mb-3 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-1">
              {artist.name}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" aria-hidden="true" />
              <span className="line-clamp-1">{artist.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {artist.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {artist.categories.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{artist.categories.length - 2}
              </Badge>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div className="flex items-center text-foreground font-semibold text-sm sm:text-base">
              <DollarSign className="w-4 h-4 mr-1" aria-hidden="true" />
              <span>{artist.priceRange}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="w-4 h-4 mr-1 text-yellow-500" aria-hidden="true" />
              <span>
                {artist.rating} ({artist.reviews} reviews)
              </span>
            </div>
          </div>

          <Button
            onClick={handleQuoteRequest}
            className="w-full bg-cyan-600 hover:bg-cyan-600/90 text-white transition-all duration-300 hover:scale-105 mt-auto"
            aria-label={`Request quote from ${artist.name}`}
          >
            Ask for Quote
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
