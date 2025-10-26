'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How quickly can you start?',
      answer: 'We can begin within 48 hours of onboarding. After our discovery call and strategy session, we hit the ground running with content creation.'
    },
    {
      question: 'Do you work with my industry?',
      answer: 'We have worked with 15+ industries including D2C, SaaS, real estate, healthcare, finance, and more. Check our portfolio to see similar brands.'
    },
    {
      question: 'What if I do not like the content?',
      answer: 'We offer unlimited revisions until you are 100% satisfied. Your approval is required before anything goes live, ensuring complete control over your brand.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, we require a 30-day notice period. No long-term contracts or hidden fees. We believe in earning your business every month.'
    },
    {
      question: 'Do you handle paid ads too?',
      answer: 'Yes! Paid ad creative and strategy are available in our Growth and Scale packages. We create high-converting ad content across all platforms.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We track engagement rates, reach, follower growth, website traffic, and conversions. You receive detailed reports with actionable insights.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We have got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="text-primary font-semibold hover:underline text-lg">
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  )
}