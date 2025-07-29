'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const galleryImages = [
  {
    id: 1,
    src: '/images/road1.jpg',
    alt: 'Road Construction',
    category: 'Infrastructure',
    title: 'Road Construction Project'
  },
  {
    id: 2,
    src: '/images/road2.jpg',
    alt: 'Community Development',
    category: 'Community',
    title: 'Community Development'
  },
  {
    id: 3,
    src: '/images/road3.jpg',
    alt: 'Street Lighting',
    category: 'Infrastructure',
    title: 'Street Lighting Installation'
  },
  {
    id: 4,
    src: '/images/road4.jpg',
    alt: 'Youth Center',
    category: 'Community',
    title: 'Youth Center Development'
  },
  {
    id: 5,
    src: '/images/secretariat.jpg',
    alt: 'Community Hall',
    category: 'Community',
    title: 'Community Hall'
  },
  {
    id: 6,
    src: '/images/gate.jpg',
    alt: 'Security Gate',
    category: 'Security',
    title: 'Security Gate Installation'
  },
  {
    id: 7,
    src: '/images/chairman.jpg',
    alt: 'Chairman',
    category: 'Leadership',
    title: 'Community Chairman'
  },
  {
    id: 8,
    src: '/images/viceChairman.jpg',
    alt: 'Vice Chairman',
    category: 'Leadership',
    title: 'Vice Chairman'
  },
  {
    id: 9,
    src: '/images/genSec.jpg',
    alt: 'General Secretary',
    category: 'Leadership',
    title: 'General Secretary'
  },
  {
    id: 10,
    src: '/images/assGenSec.jpg',
    alt: 'Assistant General Secretary',
    category: 'Leadership',
    title: 'Assistant General Secretary'
  },
  {
    id: 11,
    src: '/images/finSec.jpg',
    alt: 'Financial Secretary',
    category: 'Leadership',
    title: 'Financial Secretary'
  },
  {
    id: 12,
    src: '/images/assFincSec.jpg',
    alt: 'Assistant Financial Secretary',
    category: 'Leadership',
    title: 'Assistant Financial Secretary'
  },
  {
    id: 13,
    src: '/images/treasurer.jpg',
    alt: 'Treasurer',
    category: 'Leadership',
    title: 'Treasurer'
  },
  {
    id: 14,
    src: '/images/welfareDirector.jpg',
    alt: 'Welfare Director',
    category: 'Leadership',
    title: 'Welfare Director'
  },
  {
    id: 15,
    src: '/images/socialDirector.jpg',
    alt: 'Social Director',
    category: 'Leadership',
    title: 'Social Director'
  },
  {
    id: 16,
    src: '/images/cso1.jpg',
    alt: 'CSO 1',
    category: 'Leadership',
    title: 'Chief Security Officer 1'
  },
  {
    id: 17,
    src: '/images/cso2.jpg',
    alt: 'CSO 2',
    category: 'Leadership',
    title: 'Chief Security Officer 2'
  },
  {
    id: 18,
    src: '/images/groupPhoto.jpg',
    alt: 'Group Photo',
    category: 'Community',
    title: 'Community Leadership Team'
  }
]

const categories = ['All', 'Infrastructure', 'Community', 'Security', 'Leadership']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (filteredImages.length === 0) return
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    const nextImage = filteredImages[nextIndex]
    if (nextImage) {
      setSelectedImage(nextImage)
      setCurrentImageIndex(nextIndex)
    }
  }

  const prevImage = () => {
    if (filteredImages.length === 0) return
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    const prevImage = filteredImages[prevIndex]
    if (prevImage) {
      setSelectedImage(prevImage)
      setCurrentImageIndex(prevIndex)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Explore our community through beautiful photographs and memories
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/30 transition-colors z-10"
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors z-10"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors z-10"
            >
              ›
            </button>

            {/* Image */}
            <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.category}</p>
              <p className="text-sm text-white/60 mt-2">
                {currentImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{galleryImages.length}</div>
              <div className="text-white/80">Total Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-white/80">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2024</div>
              <div className="text-white/80">Current Year</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 