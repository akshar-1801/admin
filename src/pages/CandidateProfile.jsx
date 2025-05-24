"use client"

import { useParams } from "react-router-dom"
import { ArrowLeft, Download, MessageCircle, Calendar, Star, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"

const CandidateProfile = () => {
  const { id } = useParams()

  // Mock candidate data - in real app, fetch based on ID
  const candidate = {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    resumeMatch: 92,
    mcpScore: 88,
    appliedDate: "2024-01-20",
    status: "Shortlisted",
    avatar: "JS",
    experience: "5 years",
    linkedin: "linkedin.com/in/johnsmith",
    github: "github.com/johnsmith",
    portfolio: "johnsmith.dev",
    summary:
      "Experienced frontend developer with a passion for creating intuitive user interfaces and optimizing web performance. Skilled in React, TypeScript, and modern web technologies.",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Node.js", "GraphQL", "AWS", "Docker"],
    workExperience: [
      {
        company: "TechCorp Inc.",
        position: "Senior Frontend Developer",
        duration: "2022 - Present",
        description:
          "Led development of customer-facing web applications using React and TypeScript. Improved page load times by 40% through optimization techniques.",
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        duration: "2020 - 2022",
        description:
          "Developed responsive web applications and collaborated with design team to implement pixel-perfect UI components.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        year: "2020",
      },
    ],
    chatHistory: [
      {
        sender: "AI Assistant",
        message:
          "Hi John! Thank you for applying to the Senior Frontend Developer position. We've reviewed your application and are impressed with your experience.",
        timestamp: "2024-01-20 10:30 AM",
      },
      {
        sender: "John Smith",
        message:
          "Thank you! I'm very excited about this opportunity. I'd love to learn more about the team and the projects I'd be working on.",
        timestamp: "2024-01-20 11:15 AM",
      },
      {
        sender: "AI Assistant",
        message:
          "Great! Our team works on building scalable web applications using React and TypeScript. Would you be available for a technical interview next week?",
        timestamp: "2024-01-20 02:45 PM",
      },
    ],
  }

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Candidate Profile</h1>
          <p className="text-gray-600">Detailed view of candidate information</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl font-medium text-blue-800">{candidate.avatar}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{candidate.name}</h2>
                  <p className="text-gray-600">{candidate.position}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{candidate.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Interview</span>
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-200">
                  <MessageCircle className="h-4 w-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(candidate.resumeMatch)}`}>
                  {candidate.resumeMatch}%
                </div>
                <div className="text-sm text-gray-500">Resume Match</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(candidate.mcpScore)}`}>{candidate.mcpScore}%</div>
                <div className="text-sm text-gray-500">MCP Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{candidate.experience}</div>
                <div className="text-sm text-gray-500">Experience</div>
              </div>
              <div className="text-center">
                <span
                  className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(candidate.status)}`}
                >
                  {candidate.status}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">{candidate.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-900">{candidate.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-gray-400" />
                <a href={`https://${candidate.linkedin}`} className="text-blue-600 hover:underline">
                  {candidate.linkedin}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-gray-400" />
                <a href={`https://${candidate.github}`} className="text-blue-600 hover:underline">
                  {candidate.github}
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Summary</h3>
            <p className="text-gray-700">{candidate.summary}</p>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Work Experience</h3>
            <div className="space-y-4">
              {candidate.workExperience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-medium text-gray-900">{job.position}</h4>
                  <p className="text-blue-600">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.duration}</p>
                  <p className="text-gray-700 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Actions & Chat */}
        <div className="space-y-6">
          {/* Resume */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Resume</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <div className="text-gray-400 mb-2">
                <Download className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm text-gray-600">Resume_JohnSmith.pdf</p>
              <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">Download Resume</button>
            </div>
          </div>

          {/* Chat History */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Chat History</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {candidate.chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.sender === "AI Assistant" ? "bg-gray-100 ml-4" : "bg-blue-100 mr-4"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium text-gray-900">{message.sender}</span>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700">{message.message}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Send</button>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notes</h3>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Add your notes about this candidate..."
            ></textarea>
            <button className="mt-2 bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200">
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateProfile
