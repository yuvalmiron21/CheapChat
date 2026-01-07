import { MessageCircle, ArrowRight, TrendingDown } from 'lucide-react';
import { ChatIcon } from './BeeIcon';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <ChatIcon className="mx-auto mb-6" size="w-16 h-16" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to save money on every purchase?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of smart shoppers who save 45% on average with CheapChat.
            Start finding the lowest prices and best deals today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3">
              <MessageCircle className="w-5 h-5" />
              <span>Start Finding Deals</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center space-x-3">
              <TrendingDown className="w-5 h-5" />
              <span>See Price Drops</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold mb-2">5 sec</p>
              <p className="opacity-90">Average search time</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">24/7</p>
              <p className="opacity-90">Price monitoring</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">45%</p>
              <p className="opacity-90">Average savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}