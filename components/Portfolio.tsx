'use client'

export default function Portfolio() {
  const cases = [
    {
      title: 'D2C Fashion Brand',
      result: '300% increase in engagement',
      metric: '60 days',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      description: 'Transformed social media presence with daily content strategy'
    },
    {
      title: 'SaaS Startup',
      result: '50+ qualified leads',
      metric: 'per month',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Generated consistent B2B leads through LinkedIn content'
    },
    {
      title: 'Real Estate Agency',
      result: '12 properties sold',
      metric: 'via Instagram',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
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
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20"></div>
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