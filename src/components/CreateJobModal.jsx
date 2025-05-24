import React, { useState } from "react";
import { X } from "lucide-react";

export default function CreateJobModal({ isOpen, onClose, onCreateJob }) {
  const [jobData, setJobData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
    requirements: "",
    deadline: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !jobData.title ||
      !jobData.department ||
      !jobData.location ||
      !jobData.deadline ||
      !jobData.description ||
      !jobData.requirements
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onCreateJob({
      ...jobData,
      id: Date.now(), // Simple unique ID
      status: "Open",
      applicants: 0,
      posted: new Date().toISOString().split("T")[0],
    });
    // Reset form after submission
    setJobData({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: "",
      requirements: "",
      deadline: "",
    });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-xl mx-auto max-h-[90vh] overflow-y-auto relative">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-semibold text-gray-900">
            Create New Job Posting
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Job Title*
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  value={jobData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Senior Frontend Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Department*
                </label>
                <input
                  required
                  type="text"
                  name="department"
                  value={jobData.department}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Engineering"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Location*
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  value={jobData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., San Francisco, CA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Job Type*
                </label>
                <select
                  required
                  name="type"
                  value={jobData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Application Deadline*
                </label>
                <input
                  required
                  type="date"
                  name="deadline"
                  value={jobData.deadline}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Job Description*
                </label>
                <textarea
                  required
                  name="description"
                  value={jobData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter job description..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Requirements*
                </label>
                <textarea
                  required
                  name="requirements"
                  value={jobData.requirements}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter job requirements..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
