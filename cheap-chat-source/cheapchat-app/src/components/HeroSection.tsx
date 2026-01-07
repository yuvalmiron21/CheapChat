import { MessageCircle, Users, DollarSign, TrendingDown } from 'lucide-react';
import { ChatIcon } from './BeeIcon';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChatIcon className="animate-bounce" size="w-12 h-12" />
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm animate-pulse">AI Price Hunter</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find the
              <span className="text-orange-600"> cheapest prices</span> with smart AI chat
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              CheapChat - Your AI bargain hunter that scours the web to find the lowest prices,
              best deals, and biggest discounts. Save money on every purchase with smart price comparisons.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-3">
                <MessageCircle className="w-5 h-5" />
                <span>Find Cheap Prices</span>
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors">
                View Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              {/* FIXME: Hardcoded stats for now. Need to hook this up to the analytics service 
                  once we have real user data. */}
              <div>
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">$50K+</p>
                <p className="text-sm text-gray-600">Money Saved</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <TrendingDown className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">45%</p>
                <p className="text-sm text-gray-600">Avg. Savings</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">25K+</p>
                <p className="text-sm text-gray-600">Smart Shoppers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ChatIcon className="mt-1" size="w-8 h-8" />
                  <div className="bg-orange-100 rounded-lg p-3 flex-1">
                    <p className="text-gray-800">Hi! I&apos;m CheapChat AI. I&apos;ll help you find the cheapest prices and best deals online. What are you shopping for?</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
                    <p>Looking for a good laptop under $500</p>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">U</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ChatIcon className="mt-1" size="w-8 h-8" />
                  <div className="bg-orange-100 rounded-lg p-3 flex-1">
                    <p className="text-gray-800">Found it! Best laptop deal: Acer Aspire 5 for $399 (was $599) - 33% OFF! Free shipping + 30-day returns. Should I show you more options?</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <input
                  type="text"
                  placeholder="What deals are you looking for?"
                  className="flex-1 bg-transparent border-none outline-none"
                />
                <button className="bg-orange-600 text-white p-2 rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}