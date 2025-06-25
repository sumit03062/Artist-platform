"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

const categories = [
  "Singer",
  "DJ",
  "Speaker",
  "Dancer",
  "Band",
  "Comedian",
  "Magician",
  "Musician",
  "Poet",
  "Storyteller",
  "Mime",
  "Puppeteer",
  "Classical",
  "Folk",
  "Sufi",
  "Hip Hop",
  "Kathak",
  "Acoustic",
  "Electronic",
  "Fusion",
]
const priceRanges = ["₹10,000-25,000", "₹25,000-50,000", "₹50,000-1,00,000", "₹1,00,000-2,00,000", "₹2,00,000+"]

interface FilterBlockProps {
  filters: {
    categories: string[]
    priceRange: string
    location: string
  }
  onFilterChange: (filters: {
    categories: string[]
    priceRange: string
    location: string
  }) => void
}

export function FilterBlock({ filters, onFilterChange }: FilterBlockProps) {
  const [localFilters, setLocalFilters] = useState(filters)

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...localFilters.categories, category]
      : localFilters.categories.filter((c) => c !== category)

    const newFilters = { ...localFilters, categories: newCategories }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceRangeChange = (priceRange: string) => {
    const newFilters = { ...localFilters, priceRange }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleLocationChange = (location: string) => {
    const newFilters = { ...localFilters, location }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearAllFilters = () => {
    const newFilters = { categories: [], priceRange: "", location: "" }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const hasActiveFilters = localFilters.categories.length > 0 || localFilters.priceRange || localFilters.location

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground">Filters</CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-cyan-600 hover:text-cyan-600/80"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">Categories</Label>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={localFilters.categories.includes(category)}
                  onChange={(e) => handleCategoryChange(category, e.target.checked)}
                  className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                />
                <Label htmlFor={category} className="text-sm text-muted-foreground cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">Price Range</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="any-price"
                name="priceRange"
                checked={!localFilters.priceRange}
                onChange={() => handlePriceRangeChange("")}
                className="text-cyan-600 focus:ring-cyan-600"
              />
              <Label htmlFor="any-price" className="text-sm text-muted-foreground cursor-pointer">
                Any Price
              </Label>
            </div>
            {priceRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={range}
                  name="priceRange"
                  checked={localFilters.priceRange === range}
                  onChange={() => handlePriceRangeChange(range)}
                  className="text-cyan-600 focus:ring-cyan-600"
                />
                <Label htmlFor={range} className="text-sm text-muted-foreground cursor-pointer">
                  {range}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Location */}
        <div>
          <Label htmlFor="location" className="text-sm font-semibold text-foreground mb-3 block">
            Location
          </Label>
          <Input
            id="location"
            placeholder="Enter city or state..."
            value={localFilters.location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="focus:ring-cyan-600 focus:border-cyan-600"
          />
        </div>
      </CardContent>
    </Card>
  )
}
