'use client'

import Image from 'next/image'

export default function Portfolio() {
  const cases = [
    {
      title: 'D2C Fashion Brand',
      result: '300% increase in engagement',
      metric: '60 days',
      image: 'https://images.unsplash.com/photo-1591348070112-aa76298737c8?w=800&h=600&fit=crop&q=80',
      description: 'Transformed social media presence with daily content strategy'
    },
    {
      title: 'SaaS Startup',
      result: '50+ qualified leads',
      metric: 'per month',
      image: 'https://images.unsplash.com/photo-1733826544831-ad71d05c8423?w=800&h=600&fit=crop&q=80',
      description: 'Generated consistent B2B leads through LinkedIn content'
    },
    {
      title: 'Real Estate Agency',
      result: '12 properties sold',
      metric: 'via Instagram',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?w=800&h=600&fit=crop&q=80',
      description: 'Leveraged video content to showcase properties effectively'
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work That <span className="text-gradient">Speaks</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real brands we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gradient">{item.result}</div>
                    <div className="text-sm text-gray-500">{item.metric}</div>
                  </div>
                  <button className="text-primary font-semibold hover:underline">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}