import { Mail, Shield, HelpCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import { ChatIcon } from './BeeIcon';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <ChatIcon size="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-orange-400">CheapChat</h3>
                <p className="text-gray-400">AI-Powered Price Hunter</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your intelligent AI bargain hunter that finds the lowest prices and best deals online. 
              Save money on every purchase with smart price comparisons and deal alerts.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Price Alerts</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Deal Categories</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Flash Sales</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Savings Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-orange-400" />
                <a href="#" className="hover:text-orange-400 transition-colors">Help Center</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:support@cheapchat.ai" className="hover:text-orange-400 transition-colors">support@cheapchat.ai</a>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-orange-400" />
                <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CheapChat. All rights reserved. | Helping you save money every day.</p>
        </div>
      </div>
    </footer>
  );
}