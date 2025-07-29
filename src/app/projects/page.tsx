'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const projects = [
  {
    id: 1,
    title: 'Road Construction Project',
    category: 'Infrastructure',
    image: '/images/road1.jpg',
    description: 'Major road construction project connecting key areas of the community.',
    date: '2024-01-15',
    status: 'In Progress',
    budget: '₦50,000,000',
    location: 'Main Street',
    details: 'This project involves the construction of a 2km road with proper drainage systems and street lighting.'
  },
  {
    id: 2,
    title: 'Community Hall Renovation',
    category: 'Community',
    image: '/images/secretariat.jpg',
    description: 'Complete renovation of the community hall for better events and meetings.',
    date: '2024-02-20',
    status: 'Completed',
    budget: '₦15,000,000',
    location: 'Community Center',
    details: 'Renovation included new roofing, electrical systems, and modern amenities.'
  },
  {
    id: 3,
    title: 'Security Gate Installation',
    category: 'Security',
    image: '/images/gate.jpg',
    description: 'Installation of security gates at community entry points.',
    date: '2024-03-10',
    status: 'Completed',
    budget: '₦8,000,000',
    location: 'Community Entrances',
    details: 'Automated security gates with CCTV monitoring systems installed.'
  },
  {
    id: 4,
    title: 'Water Supply Project',
    category: 'Utilities',
    image: '/images/road2.jpg',
    description: 'Improvement of water supply infrastructure across the community.',
    date: '2024-04-05',
    status: 'Planning',
    budget: '₦25,000,000',
    location: 'Community-wide',
    details: 'New water pipelines and storage facilities to improve water distribution.'
  },
  {
    id: 5,
    title: 'Street Lighting Project',
    category: 'Infrastructure',
    image: '/images/road3.jpg',
    description: 'Installation of solar-powered street lights throughout the community.',
    date: '2024-05-12',
    status: 'In Progress',
    budget: '₦12,000,000',
    location: 'All Streets',
    details: 'Energy-efficient LED street lights powered by solar panels.'
  },
  {
    id: 6,
    title: 'Youth Center Development',
    category: 'Community',
    image: '/images/road4.jpg',
    description: 'Construction of a modern youth center for community activities.',
    date: '2024-06-01',
    status: 'Planning',
    budget: '₦30,000,000',
    location: 'Youth Zone',
    details: 'Multi-purpose facility with sports, education, and recreation areas.'
  }
]

const categories = ['All', 'Infrastructure', 'Community', 'Security', 'Utilities']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Building a better community through strategic development projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Budget: {project.budget}</span>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-medium">{selectedProject.category}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedProject.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  selectedProject.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {selectedProject.status}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800">Start Date</h4>
                  <p className="text-gray-600">{selectedProject.date}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Budget</h4>
                  <p className="text-gray-600">{selectedProject.budget}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">{selectedProject.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Status</h4>
                  <p className="text-gray-600">{selectedProject.status}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Project Details</h4>
                <p className="text-gray-600">{selectedProject.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{projects.length}</div>
              <div className="text-white/80">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-white/80">Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {projects.filter(p => p.status === 'In Progress').length}
              </div>
              <div className="text-white/80">In Progress</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₦140M+</div>
              <div className="text-white/80">Total Investment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 