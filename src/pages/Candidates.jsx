"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Filter, MessageCircle, Calendar, Eye, Star } from "lucide-react"

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const candidates = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      position: "Senior Frontend Developer",
      resumeMatch: 92,
      mcpScore: 88,
      appliedDate: "2024-01-20",
      status: "Shortlisted",
      avatar: "JS",
      experience: "5 years",
      location: "San Francisco, CA",
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      position: "UX Designer",
      resumeMatch: 88,
      mcpScore: 91,
      appliedDate: "2024-01-18",
      status: "Interviewed",
      avatar: "ED",
      experience: "3 years",
      location: "Remote",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      position: "Backend Developer",
      resumeMatch: 95,
      mcpScore: 89,
      appliedDate: "2024-01-22",
      status: "Applied",
      avatar: "MC",
      experience: "7 years",
      location: "Austin, TX",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      position: "Product Manager",
      resumeMatch: 85,
      mcpScore: 93,
      appliedDate: "2024-01-15",
      status: "Hired",
      avatar: "SW",
      experience: "6 years",
      location: "New York, NY",
    },
    {
      id: 5,
      name: "David Rodriguez",
      email: "david.rodriguez@email.com",
      position: "Frontend Developer",
      resumeMatch: 78,
      mcpScore: 82,
      appliedDate: "2024-01-25",
      status: "Applied",
      avatar: "DR",
      experience: "2 years",
      location: "Los Angeles, CA",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-800"
      case "Shortlisted":
        return "bg-yellow-100 text-yellow-800"
      case "Interviewed":
        return "bg-purple-100 text-purple-800"
      case "Hired":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || candidate.status.toLowerCase() === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Candidate Management</h1>
        <p className="text-gray-600">Review and manage candidate applications</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="applied">Applied</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interviewed">Interviewed</option>
              <option value="hired">Hired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-800">{candidate.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-500">{candidate.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.8</span>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Resume Match:</span>
                  <span className={`font-medium ${getScoreColor(candidate.resumeMatch)}`}>
                    {candidate.resumeMatch}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">MCP Score:</span>
                  <span className={`font-medium ${getScoreColor(candidate.mcpScore)}`}>{candidate.mcpScore}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Experience:</span>
                  <span className="text-gray-900">{candidate.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Location:</span>
                  <span className="text-gray-900">{candidate.location}</span>
                </div>
              </div>

              <div className="mt-4">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(candidate.status)}`}
                >
                  {candidate.status}
                </span>
              </div>

              <div className="mt-4 flex space-x-2">
                <Link
                  to={`/admin/candidates/${candidate.id}`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg text-sm hover:bg-blue-700 flex items-center justify-center space-x-1"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Profile</span>
                </Link>
                <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 flex items-center justify-center">
                  <Calendar className="h-4 w-4" />
                </button>
                <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-200 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                Applied: {new Date(candidate.appliedDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Candidates
