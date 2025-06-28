"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ArtistCard } from "@/components/artist-card"
import { FilterBlock } from "@/components/filter-block"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Search, X } from "lucide-react"
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

  const clearAllFilters = () => {
    setFilters({ categories: [], priceRange: "", location: "" })
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1a0b2e] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
            Discover Amazing Artists
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Browse through our curated collection of talented performers
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search artists, categories, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 py-5 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-white focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                aria-label="Search artists"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-[#1a0b2e]/80 to-[#0f172a]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Filters</h2>
                  {(filters.categories.length > 0 || filters.priceRange || filters.location) && (
                    <button 
                      onClick={clearAllFilters}
                      className="text-cyan-500 text-sm hover:text-cyan-400 transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterBlock filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  className="mb-6 w-full sm:w-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-white hover:bg-gray-800/30"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                  {(filters.categories.length > 0 || filters.priceRange || filters.location) && (
                    <span className="ml-2 bg-cyan-600 text-white rounded-full px-2 py-1 text-xs">
                      {filters.categories.length + (filters.priceRange ? 1 : 0) + (filters.location ? 1 : 0)}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-80 bg-gradient-to-b from-[#0f172a] to-[#1a0b2e] border-r border-gray-800"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Filters</h2>
                  {(filters.categories.length > 0 || filters.priceRange || filters.location) && (
                    <button 
                      onClick={clearAllFilters}
                      className="text-cyan-500 text-sm hover:text-cyan-400 transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterBlock filters={filters} onFilterChange={handleFilterChange} />
              </SheetContent>
            </Sheet>
          </div>

          {/* Artist Grid */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <p className="text-gray-300">
                {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
              
              {(filters.categories.length > 0 || filters.priceRange || filters.location) && (
                <div className="flex flex-wrap gap-2">
                  {filters.categories.map(category => (
                    <div 
                      key={category} 
                      className="bg-cyan-900/50 text-cyan-300 text-xs px-3 py-1 rounded-full flex items-center"
                    >
                      {category}
                      <button 
                        onClick={() => setFilters(prev => ({
                          ...prev, 
                          categories: prev.categories.filter(c => c !== category)
                        }))}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  {filters.priceRange && (
                    <div className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full flex items-center">
                      Price: {filters.priceRange}
                      <button 
                        onClick={() => setFilters(prev => ({...prev, priceRange: ""}))}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  {filters.location && (
                    <div className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full flex items-center">
                      {filters.location}
                      <button 
                        onClick={() => setFilters(prev => ({...prev, location: ""}))}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gradient-to-br from-[#1a0b2e]/30 to-[#0f172a]/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                      <div className="w-full h-48 bg-gray-800/50 rounded-2xl mb-4"></div>
                      <div className="h-5 bg-gray-800/50 rounded-lg mb-3 w-3/4"></div>
                      <div className="h-4 bg-gray-800/50 rounded-lg w-1/2 mb-5"></div>
                      <div className="flex gap-2 mb-5">
                        <div className="h-7 bg-gray-800/50 rounded-full w-20"></div>
                        <div className="h-7 bg-gray-800/50 rounded-full w-16"></div>
                      </div>
                      <div className="h-10 bg-gray-800/50 rounded-xl"></div>
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
                    whileHover={{ y: -10 }}
                  >
                    <ArtistCard artist={artist} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {filteredArtists.length === 0 && !isLoading && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-16"
              >
                <div className="text-6xl mb-4" role="img" aria-label="No results">
                  🎭
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No artists found</h3>
                <p className="text-gray-300 mb-6">
                  {searchQuery
                    ? `No artists match "${searchQuery}". Try a different search term.`
                    : "Try adjusting your filters to see more results"}
                </p>
                {(searchQuery || filters.categories.length > 0 || filters.priceRange || filters.location) && (
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-cyan-600 text-white hover:bg-cyan-600/10"
                    onClick={clearAllFilters}
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