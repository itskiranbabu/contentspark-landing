'use client'

import { Instagram, Video, TrendingUp, Palette, FileText, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'Transform your social presence with daily content that engages and converts',
      features: ['Daily posting', 'Community management', 'Analytics tracking']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Scroll-stopping reels, shorts, and long-form content that tells your story',
      features: ['Reels & Shorts', 'YouTube videos', 'Professional editing']
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Data-driven strategies that align with your business goals',
      features: ['Audience research', 'Content calendar', 'Performance optimization']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals that make your brand unforgettable',
      features: ['Social graphics', 'Brand assets', 'Infographics']
    },
    {
      icon: FileText,
      title: 'Copywriting & Blogs',
      description: 'SEO-optimized content that drives traffic and builds authority',
      features: ['Blog posts', 'Website copy', 'Email campaigns']
    },
    {
      icon: Sparkles,
      title: 'Brand Storytelling',
      description: 'Craft compelling narratives that connect with your audience',
      features: ['Brand voice', 'Story development', 'Emotional connection']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive content solutions tailored to your brand's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}