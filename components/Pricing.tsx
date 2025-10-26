'use client'

import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'STARTER',
      price: '35,000',
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        '12 Posts/month',
        '4 Reels/Shorts',
        'Caption writing',
        'Basic graphics',
        '1 Platform',
        'Monthly reporting'
      ],
      popular: false
    },
    {
      name: 'GROWTH',
      price: '85,000',
      period: 'month',
      description: 'Perfect for growing brands',
      features: [
        '20 Posts/month',
        '8 Reels/Shorts',
        '4 Blog posts',
        'Advanced graphics',
        '2-3 Platforms',
        'Bi-weekly reporting',
        'Content strategy',
        'Hashtag research'
      ],
      popular: true
    },
    {
      name: 'SCALE',
      price: '1,75,000',
      period: 'month',
      description: 'Perfect for established brands',
      features: [
        '30 Posts/month',
        '15 Reels/Shorts',
        '8 Blog posts',
        'Premium graphics',
        'All platforms',
        'Weekly reporting',
        'Dedicated manager',
        'Influencer outreach',
        'Paid ad creative',
        'Priority support'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                plan.popular ? 'ring-4 ring-primary transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" fill="white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-semibold">₹</span>
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Need a custom solution?
          </p>
          <a href="#contact" className="text-primary font-semibold hover:underline text-lg">
            Contact us for Enterprise pricing →
          </a>
        </div>
      </div>
    </section>
  )
}