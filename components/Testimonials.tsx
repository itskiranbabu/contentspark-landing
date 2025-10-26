'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Founder, StyleCraft Fashion',
      content: 'ContentSpark transformed our Instagram from ghost town to engagement hub. ROI was visible within 30 days!',
      rating: 5,
      image: 'PS'
    },
    {
      name: 'Rahul Mehta',
      role: 'CEO, TechFlow Solutions',
      content: 'Best decision we made. They understand our brand better than we do! Professional and results-driven.',
      rating: 5,
      image: 'RM'
    },
    {
      name: 'Anjali Gupta',
      role: 'Marketing Head, WellnessHub',
      content: 'Professional, creative, and results-driven. Our engagement rates have tripled. Highly recommend!',
      rating: 5,
      image: 'AG'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Do not just take our word for it - hear from brands we have helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FBBF24" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  )
}