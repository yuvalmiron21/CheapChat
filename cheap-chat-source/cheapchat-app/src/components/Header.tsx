import { ChatIcon } from './BeeIcon';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ChatIcon size="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-orange-600">CheapChat</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Find the cheapest prices with AI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Start Chat</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white pb-4">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors px-2 py-1">Features</a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors px-2 py-1">About</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors px-2 py-1">Contact</a>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 mx-2">
                <MessageCircle className="w-4 h-4" />
                <span>Start Chat</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}