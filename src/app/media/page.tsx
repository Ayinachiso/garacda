'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const newsItems = [
  {
    id: 1,
    title: 'Community Security Meeting Held',
    category: 'News',
    image: '/images/groupPhoto.jpg',
    excerpt: 'Important security measures discussed at the monthly community meeting.',
    date: '2024-01-15',
    author: 'GACDA Press',
    content: 'The monthly community security meeting was held yesterday with over 50 residents in attendance. Key topics included neighborhood watch programs, emergency response protocols, and community safety initiatives.'
  },
  {
    id: 2,
    title: 'New Road Project Announced',
    category: 'News',
    image: '/images/road1.jpg',
    excerpt: 'Major infrastructure development project to begin next month.',
    date: '2024-01-10',
    author: 'GACDA Press',
    content: 'The community association has announced a new road construction project that will improve connectivity between key areas. The project is expected to be completed within 6 months.'
  },
  {
    id: 3,
    title: 'Youth Empowerment Program Launch',
    category: 'News',
    image: '/images/road2.jpg',
    excerpt: 'New initiative to support young community members.',
    date: '2024-01-05',
    author: 'GACDA Press',
    content: 'A comprehensive youth empowerment program has been launched to provide skills training, mentorship, and employment opportunities for young residents.'
  }
]

const blogPosts = [
  {
    id: 1,
    title: 'Building Stronger Communities',
    category: 'Blog',
    image: '/images/road3.jpg',
    excerpt: 'The importance of community involvement in development.',
    date: '2024-01-12',
    author: 'Community Leader',
    content: 'Strong communities are built on the foundation of active participation and collaboration. When residents come together with a shared vision, remarkable transformations can occur.'
  },
  {
    id: 2,
    title: 'Sustainable Development Goals',
    category: 'Blog',
    image: '/images/road4.jpg',
    excerpt: 'How our community aligns with global development objectives.',
    date: '2024-01-08',
    author: 'Development Officer',
    content: 'Our community development initiatives are designed to align with global sustainable development goals, ensuring long-term positive impact.'
  }
]

const entertainmentItems = [
  {
    id: 1,
    title: 'Community Cultural Festival',
    category: 'Entertainment',
    image: '/images/secretariat.jpg',
    excerpt: 'Annual cultural celebration brings community together.',
    date: '2024-01-20',
    author: 'Events Team',
    content: 'The annual cultural festival was a huge success with traditional performances, local cuisine, and community bonding activities.'
  },
  {
    id: 2,
    title: 'Sports Tournament Results',
    category: 'Entertainment',
    image: '/images/gate.jpg',
    excerpt: 'Community sports competition winners announced.',
    date: '2024-01-18',
    author: 'Sports Committee',
    content: 'The community sports tournament concluded with exciting matches and new champions crowned in various categories.'
  }
]

const advertisements = [
  {
    id: 1,
    title: 'Community Business Directory',
    category: 'Advertisement',
    image: '/images/comingSoon.jpg',
    excerpt: 'Support local businesses in our community.',
    date: '2024-01-15',
    author: 'Business Committee',
    content: 'Discover and support local businesses within our community. From restaurants to services, find everything you need locally.'
  },
  {
    id: 2,
    title: 'Volunteer Opportunities',
    category: 'Advertisement',
    image: '/images/advertisementComingSoon.png',
    excerpt: 'Join our volunteer program and make a difference.',
    date: '2024-01-12',
    author: 'Volunteer Coordinator',
    content: 'We are looking for dedicated volunteers to help with various community projects and initiatives.'
  }
]

const tabs = [
  { id: 'news', label: 'News', data: newsItems },
  { id: 'blogs', label: 'Blogs', data: blogPosts },
  { id: 'entertainment', label: 'Entertainment', data: entertainmentItems },
  { id: 'advertisements', label: 'Advertisements', data: advertisements }
]

export default function Media() {
  const [activeTab, setActiveTab] = useState('news')
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    date: string;
    author: string;
    content: string;
  } | null>(null)

  const currentData = tabs.find(tab => tab.id === activeTab)?.data || []

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Media Center
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest news, blogs, and community updates
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="text-sm text-gray-500">{item.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
                  <button className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Item Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                  {selectedItem.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{selectedItem.date}</span>
                <span className="text-sm text-gray-500">By {selectedItem.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedItem.title}</h2>
              <p className="text-gray-600 leading-relaxed">{selectedItem.content}</p>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest community updates and news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 