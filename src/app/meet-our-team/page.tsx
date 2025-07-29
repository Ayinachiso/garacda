import Image from 'next/image'
import Navbar from '@/components/Navbar'

const teamMembers = [
  {
    name: 'Chairman',
    role: 'Chairman',
    image: '/images/chairman.jpg',
    description: 'Leading the association with vision and strategic direction.'
  },
  {
    name: 'Vice Chairman',
    role: 'Vice Chairman',
    image: '/images/viceChairman.jpg',
    description: 'Supporting the chairman and ensuring smooth operations.'
  },
  {
    name: 'General Secretary',
    role: 'General Secretary',
    image: '/images/genSec.jpg',
    description: 'Managing administrative affairs and communication.'
  },
  {
    name: 'Assistant General Secretary',
    role: 'Assistant General Secretary',
    image: '/images/assGenSec.jpg',
    description: 'Assisting the general secretary in daily operations.'
  },
  {
    name: 'Financial Secretary',
    role: 'Financial Secretary',
    image: '/images/finSec.jpg',
    description: 'Managing financial records and transactions.'
  },
  {
    name: 'Assistant Financial Secretary',
    role: 'Assistant Financial Secretary',
    image: '/images/assFincSec.jpg',
    description: 'Supporting financial management and record keeping.'
  },
  {
    name: 'Treasurer',
    role: 'Treasurer',
    image: '/images/treasurer.jpg',
    description: 'Overseeing financial planning and budgeting.'
  },
  {
    name: 'Welfare Director',
    role: 'Welfare Director',
    image: '/images/welfareDirector.jpg',
    description: 'Focusing on member welfare and community support.'
  },
  {
    name: 'Social Director',
    role: 'Social Director',
    image: '/images/socialDirector.jpg',
    description: 'Organizing social events and community activities.'
  },
  {
    name: 'CSO 1',
    role: 'Chief Security Officer 1',
    image: '/images/cso1.jpg',
    description: 'Ensuring security and safety of the community.'
  },
  {
    name: 'CSO 2',
    role: 'Chief Security Officer 2',
    image: '/images/cso2.jpg',
    description: 'Supporting security operations and community safety.'
  }
]

export default function MeetOurTeam() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Dedicated leaders working together to build a stronger community
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Working together to serve our community with dedication and integrity
            </p>
          </div>
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/groupPhoto.jpg"
              alt="GACDA Leadership Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Have questions about our team or want to get involved? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 