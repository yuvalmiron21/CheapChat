import { TrendingDown, Users, DollarSign, Target } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: TrendingDown, number: "45%", label: "Average Savings" },
    { icon: Users, number: "25K+", label: "Smart Shoppers" },
    { icon: DollarSign, number: "$500K+", label: "Money Saved" },
    { icon: Target, number: "99%", label: "Deal Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About CheapChat
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              CheapChat is your AI-powered bargain hunting assistant that never sleeps. 
              Our advanced algorithms scan millions of products across hundreds of stores 
              to find you the absolute lowest prices and best deals available online.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Real-time price monitoring across all major retailers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Instant notifications for price drops and flash sales</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Automatic coupon code discovery and application</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Smart price predictions and optimal buying timing</p>
              </div>
            </div>
            
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Start Saving Money Today
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}