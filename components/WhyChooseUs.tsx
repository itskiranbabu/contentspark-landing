'use client'

import { BarChart, Zap, Users, Shield, Target, Heart } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: BarChart,
      title: 'Data-Driven Results',
      description: 'Every decision backed by analytics and insights'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Content delivered on time, every time'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your success is our only priority'
    },
    {
      icon: Shield,
      title: 'Transparent Reporting',
      description: 'Know exactly what is working and why'
    },
    {
      icon: Target,
      title: 'Industry Expertise',
      description: 'We understand your market inside out'
    },
    {
      icon: Heart,
      title: 'Unlimited Revisions',
      description: 'We do not stop until you are 100% satisfied'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Brands Choose <span className="text-gradient">ContentSpark</span>
          </h2>
          <p className="text-xl text-gray-600">
            We are more than just a content agency - we are your growth partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}