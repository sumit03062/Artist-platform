"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Trash2, Plus } from "lucide-react"
import Link from "next/link"
import { mockSubmissions } from "@/lib/mock-data"

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState(mockSubmissions)

  const handleDelete = (id: string) => {
    console.log("Deleting submission:", id)
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id))
  }

  const handleView = (id: string) => {
    console.log("Viewing submission:", id)
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Manager Dashboard</h1>
              <p className="text-xl text-gray-600">Manage your artist submissions and bookings</p>
            </div>
            <Link href="/onboard-artist">
              <Button className="bg-cyan-600 hover:bg-cyan-600/90 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Artist
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Artist Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              {submissions.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">No submissions yet</h3>
                  <p className="text-gray-600 mb-6">Start by adding your first artist to the platform</p>
                  <Link href="/onboard-artist">
                    <Button className="bg-cyan-600 hover:bg-cyan-600/90 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Artist
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-2 font-semibold text-foreground">Name</th>
                        <th className="text-left py-4 px-2 font-semibold text-foreground">Category</th>
                        <th className="text-left py-4 px-2 font-semibold text-foreground">Location</th>
                        <th className="text-left py-4 px-2 font-semibold text-foreground">Fee</th>
                        <th className="text-left py-4 px-2 font-semibold text-foreground">Status</th>
                        <th className="text-left py-4 px-2 font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((submission, index) => (
                        <motion.tr
                          key={submission.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="py-4 px-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-[#E94560] to-[#0F3460] rounded-full flex items-center justify-center text-white font-semibold">
                                {submission.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">{submission.name}</div>
                                <div className="text-sm text-gray-500">{submission.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex flex-wrap gap-1">
                              {submission.categories.slice(0, 2).map((category) => (
                                <Badge key={category} variant="secondary" className="text-xs">
                                  {category}
                                </Badge>
                              ))}
                              {submission.categories.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{submission.categories.length - 2}
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-2 text-gray-600">{submission.location}</td>
                          <td className="py-4 px-2 font-semibold text-foreground">{submission.priceRange}</td>
                          <td className="py-4 px-2">
                            <Badge
                              variant={
                                submission.status === "approved"
                                  ? "default"
                                  : submission.status === "pending"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className={
                                submission.status === "approved"
                                  ? "bg-green-100 text-green-800"
                                  : submission.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }
                            >
                              {submission.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleView(submission.id)}
                                className="hover:bg-blue-50 hover:border-blue-300"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDelete(submission.id)}
                                className="hover:bg-red-50 hover:border-red-300 text-red-600"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Artists</p>
                    <p className="text-3xl font-bold text-foreground">{submissions.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎭</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Approved</p>
                    <p className="text-3xl font-bold text-green-600">
                      {submissions.filter((s) => s.status === "approved").length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600">
                      {submissions.filter((s) => s.status === "pending").length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⏳</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
