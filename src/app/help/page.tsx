'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

const faqs = [
  {
    question: 'How can I become a member of GACDA?',
    answer: 'To become a member, you need to be a resident of the community and submit an application form. You can get the form from our office or download it from our website. The application will be reviewed by the executive committee.'
  },
  {
    question: 'What are the membership fees?',
    answer: 'Membership fees vary depending on the type of membership. Regular membership is ₦5,000 annually, while premium membership is ₦10,000 annually. These fees help support our community development projects.'
  },
  {
    question: 'How can I report a security concern?',
    answer: 'You can report security concerns by calling our emergency hotline at 080-1234-5678, contacting our CSO officers directly, or visiting our office during business hours. For urgent matters, please call the emergency number immediately.'
  },
  {
    question: 'How do I participate in community meetings?',
    answer: 'Community meetings are held monthly and are open to all residents. Meeting schedules are posted on our notice boards and shared through our WhatsApp group. You can also check our website for upcoming meeting dates.'
  },
  {
    question: 'What projects are currently ongoing?',
    answer: 'We have several ongoing projects including road construction, street lighting installation, and community hall renovation. You can find detailed information about all projects on our Projects page.'
  },
  {
    question: 'How can I volunteer for community activities?',
    answer: 'We welcome volunteers for various community activities. You can register as a volunteer by contacting our social director or filling out the volunteer form available at our office. We have opportunities in security, events, and project management.'
  },
  {
    question: 'What should I do if I have a complaint?',
    answer: 'Complaints can be submitted in writing to our office, through our website contact form, or by speaking directly with any executive member. We aim to address all complaints within 48 hours.'
  },
  {
    question: 'How can I contribute to community development?',
    answer: 'You can contribute by paying your membership fees, participating in community meetings, volunteering for activities, donating to specific projects, or providing professional services. Every contribution helps build a better community.'
  }
]

const emergencyContacts = [
  {
    name: 'Emergency Hotline',
    number: '080-1234-5678',
    description: '24/7 emergency response'
  },
  {
    name: 'CSO 1',
    number: '080-2345-6789',
    description: 'Chief Security Officer 1'
  },
  {
    name: 'CSO 2',
    number: '080-3456-7890',
    description: 'Chief Security Officer 2'
  },
  {
    name: 'Chairman',
    number: '080-4567-8901',
    description: 'Community Chairman'
  },
  {
    name: 'General Secretary',
    number: '080-5678-9012',
    description: 'Administrative matters'
  }
]

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Help & Support
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get the assistance you need and find answers to common questions
          </p>
        </div>
      </section>

      {/* Help Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-6">
                Find answers to common questions about membership, projects, and community activities.
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                View FAQs →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Get in touch with our team for personalized assistance and support.
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Contact Now →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resources</h3>
              <p className="text-gray-600 mb-6">
                Access important documents, forms, and community guidelines.
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                Browse Resources →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to the most common questions about our community association
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-left transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <span className={`text-primary text-xl transition-transform duration-300 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}>
                      {openFaq === index ? '×' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="bg-white p-6 rounded-b-lg border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      GACDA Secretariat<br />
                      Community Center<br />
                      Main Street, Our Community
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@gacda.com<br />
                      secretary@gacda.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Emergency Contacts</h2>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                        <p className="text-sm text-gray-600">{contact.description}</p>
                      </div>
                      <a
                        href={`tel:${contact.number}`}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        {contact.number}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit our office or explore our community location
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3792956!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjcuOCJOIDPCsDIyJzQ1LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
} 