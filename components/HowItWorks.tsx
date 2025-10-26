'use client'

import { Phone, FileText, Palette, CheckCircle, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Discovery Call',
      description: 'We understand your brand, goals, and target audience in a free 15-minute consultation'
    },
    {
      icon: FileText,
      number: '02',
      title: 'Strategy Blueprint',
      description: 'Custom content strategy tailored specifically to your business objectives'
    },
    {
      icon: Palette,
      number: '03',
      title: 'Content Creation',
      description: 'Our expert team creates, edits, and perfects your content with attention to detail'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Review & Approve',
      description: 'You review and approve everything before it goes live - unlimited revisions'
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Publish & Optimize',
      description: 'We post, monitor engagement, and continuously optimize for maximum impact'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            A simple, proven process that delivers results every time
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}