"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FormInput } from "@/components/form-input"
import { Upload, CheckCircle } from "lucide-react"

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
const languages = [
  "Hindi",
  "English",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Urdu",
  "Rajasthani",
  "Sanskrit",
]
const priceRanges = ["₹10,000-25,000", "₹25,000-50,000", "₹50,000-1,00,000", "₹1,00,000-2,00,000", "₹2,00,000+"]

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required").min(50, "Bio must be at least 50 characters"),
  categories: yup.array().min(1, "At least one category is required"),
  languages: yup.array().min(1, "At least one language is required"),
  priceRange: yup.string().required("Price range is required"),
  location: yup.string().required("Location is required"),
  profileImage: yup.mixed(),
})

type FormData = yup.InferType<typeof schema>

export default function OnboardArtistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  })

  const watchedCategories = watch("categories") || []
  const watchedLanguages = watch("languages") || []

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      setValue("profileImage", file)
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Artist submission:", {
      ...data,
      profileImage: data.profileImage ? "File uploaded" : "No image",
    })

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
      setImagePreview(null)
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Artist Submitted Successfully!</h2>
          <p className="text-muted-foreground">We'll review your application and get back to you soon.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Onboard Your Artist</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join our platform and connect with event planners looking for talented performers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Artist Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Artist Name"
                    {...register("name")}
                    error={errors.name?.message}
                    placeholder="Enter artist name"
                  />

                  <FormInput
                    label="Location"
                    {...register("location")}
                    error={errors.location?.message}
                    placeholder="City, State/Country"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea
                    {...register("bio")}
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-200 bg-background text-foreground"
                    placeholder="Tell us about the artist's background, experience, and style..."
                  />
                  {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>}
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Categories</label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-h-40 overflow-y-auto border border-input rounded-md p-3">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={category}
                          checked={watchedCategories.includes(category)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...watchedCategories, category]
                              : watchedCategories.filter((c) => c !== category)
                            setValue("categories", newCategories)
                          }}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        />
                        <span className="text-sm text-foreground">{category}</span>
                      </label>
                    ))}
                  </div>
                  {errors.categories && <p className="mt-1 text-sm text-red-600">{errors.categories.message}</p>}
                </div>

                {/* Languages */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Languages Spoken</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-h-32 overflow-y-auto border border-input rounded-md p-3">
                    {languages.map((language) => (
                      <label key={language} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={language}
                          checked={watchedLanguages.includes(language)}
                          onChange={(e) => {
                            const newLanguages = e.target.checked
                              ? [...watchedLanguages, language]
                              : watchedLanguages.filter((l) => l !== language)
                            setValue("languages", newLanguages)
                          }}
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                        />
                        <span className="text-sm text-foreground">{language}</span>
                      </label>
                    ))}
                  </div>
                  {errors.languages && <p className="mt-1 text-sm text-red-600">{errors.languages.message}</p>}
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Price Range</label>
                  <select
                    {...register("priceRange")}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-200 bg-background text-foreground"
                  >
                    <option value="">Select price range</option>
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.priceRange && <p className="mt-1 text-sm text-red-600">{errors.priceRange.message}</p>}
                </div>

                {/* Profile Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Profile Image (Optional)</label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-input rounded-lg cursor-pointer bg-muted/20 hover:bg-muted/40 transition-colors duration-200">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Click to upload image</p>
                        </div>
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                      </label>
                    </div>
                    {imagePreview && (
                      <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-border">
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-600/90 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      "Submit Artist Application"
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
