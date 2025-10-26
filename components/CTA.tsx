'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Sparkles } from 'lucide-react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData])

      if (error) throw error

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl opacity-90">
              Get a FREE Content Audit (Worth ₹5,000)
            </p>
            <p className="text-lg opacity-80 mt-2">
              We will analyze your current content and show you exactly how to improve
            </p>
          </div>

          {success ? (
            <div className="bg-white text-gray-900 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg">We will get back to you within 24 hours with your free content audit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <textarea
                placeholder="Tell us about your content goals..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none mb-6"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Get My Free Audit →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}