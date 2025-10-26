'use client'

import { Sparkles, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">India's Premier Content Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Brand Into a{' '}
            <span className="text-gradient">Content Powerhouse</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            We create scroll-stopping content that turns followers into customers and likes into revenue
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" className="btn-primary text-lg">
              Get Free Content Audit
            </a>
            <a href="#portfolio" className="btn-secondary text-lg">
              View Our Work →
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-3" />
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Trusted Brands</div>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-12 h-12 text-secondary mb-3" />
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Content Pieces</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-12 h-12 text-primary mb-3" />
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}