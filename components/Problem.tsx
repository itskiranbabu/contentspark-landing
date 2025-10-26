'use client'

import { X, Calendar, TrendingDown, Clock } from 'lucide-react'

export default function Problem() {
  const problems = [
    {
      icon: Calendar,
      title: 'Posting Inconsistently',
      description: 'Irregular content hurts your brand visibility and engagement'
    },
    {
      icon: TrendingDown,
      title: 'Low Engagement',
      description: 'Generic content gets lost in the noise and fails to connect'
    },
    {
      icon: Clock,
      title: 'No Time to Create',
      description: 'Running your business leaves no time for quality content'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Is Your Content <span className="text-gradient">Falling Flat?</span>
          </h2>
          <p className="text-xl text-gray-600">
            You're not alone. Most businesses struggle with these challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <X className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <problem.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            We handle everything so you can focus on growth
          </p>
          <a href="#services" className="btn-primary">
            See How We Help
          </a>
        </div>
      </div>
    </section>
  )
}