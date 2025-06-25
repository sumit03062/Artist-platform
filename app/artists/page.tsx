"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ArtistCard } from "@/components/artist-card"
import { FilterBlock } from "@/components/filter-block"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { mockArtists } from "@/lib/mock-data"

export default function ArtistsPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: "",
    location: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist) => {
      // Search filter
      const searchMatch =
        !searchQuery ||
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.categories.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase())) ||
        artist.location.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const categoryMatch =
        filters.categories.length === 0 || filters.categories.some((cat) => artist.categories.includes(cat))

      // Location filter
      const locationMatch = !filters.location || artist.location.toLowerCase().includes(filters.location.toLowerCase())

      // Price filter
      const priceMatch = !filters.priceRange || artist.priceRange === filters.priceRange

      return searchMatch && categoryMatch && locationMatch && priceMatch
    })
  }, [filters, searchQuery])

  const handleFilterChange = (newFilters: typeof filters) => {
    setIsLoading(true)
    setFilters(newFilters)
    // Simulate loading
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Discover Amazing Artists</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Browse through our curated collection of talented performers
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search artists, categories, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 focus:ring-cyan-600 focus:border-cyan-600"
                aria-label="Search artists"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterBlock filters={filters} onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mb-6 w-full sm:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  {(filters.categories.length > 0 || filters.priceRange || filters.location) && (
                    <span className="ml-2 bg-cyan-600 text-white rounded-full px-2 py-1 text-xs">
                      {filters.categories.length + (filters.priceRange ? 1 : 0) + (filters.location ? 1 : 0)}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <FilterBlock filters={filters} onFilterChange={handleFilterChange} />
              </SheetContent>
            </Sheet>
          </div>

          {/* Artist Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <p className="text-muted-foreground">
                {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-muted rounded-lg shadow-md p-6">
                      <div className="w-full h-48 bg-muted-foreground/20 rounded-lg mb-4"></div>
                      <div className="h-4 bg-muted-foreground/20 rounded mb-2"></div>
                      <div className="h-4 bg-muted-foreground/20 rounded w-2/3 mb-4"></div>
                      <div className="flex gap-2 mb-4">
                        <div className="h-6 bg-muted-foreground/20 rounded w-16"></div>
                        <div className="h-6 bg-muted-foreground/20 rounded w-12"></div>
                      </div>
                      <div className="h-10 bg-muted-foreground/20 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
              >
                {filteredArtists.map((artist, index) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ArtistCard artist={artist} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {filteredArtists.length === 0 && !isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4" role="img" aria-label="No results">
                  🎭
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No artists found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery
                    ? `No artists match "${searchQuery}". Try a different search term.`
                    : "Try adjusting your filters to see more results"}
                </p>
                {(searchQuery || filters.categories.length > 0 || filters.priceRange || filters.location) && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setFilters({ categories: [], priceRange: "", location: "" })
                    }}
                  >
                    Clear all filters
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
