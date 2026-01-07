import { Search, TrendingDown, DollarSign, Bell, Target, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Smart Price Search",
      description: "AI scans thousands of stores to find the lowest prices for any product you want"
    },
    {
      icon: TrendingDown,
      title: "Price Drop Alerts",
      description: "Get notified instantly when prices drop on items you're watching"
    },
    {
      icon: DollarSign,
      title: "Discount Hunter",
      description: "Automatically finds and applies the best coupon codes and discounts"
    },
    {
      icon: Bell,
      title: "Deal Notifications",
      description: "Real-time alerts for flash sales, clearance items, and limited-time offers"
    },
    {
      icon: Target,
      title: "Price Targets",
      description: "Set your ideal price and we'll notify you when products hit your target"
    },
    {
      icon: Zap,
      title: "Instant Comparisons",
      description: "Compare prices across multiple stores in seconds, not hours"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Money-Saving Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CheapChat uses advanced AI to hunt down the best deals and lowest prices, 
            saving you time and money on every purchase
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}