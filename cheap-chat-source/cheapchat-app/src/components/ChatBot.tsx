import { useState } from 'react';
import { MessageCircle, Send, X, Minimize2 } from 'lucide-react';
import { ChatIcon } from './BeeIcon';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  // NOTE: Storing images as emojis for the prototype to save bandwidth/complexity.
  // Will switch to CDN URLs in production.
  products?: Array<{
    name: string;
    originalPrice: string;
    salePrice: string;
    savings: string;
    image: string;
    store: string;
  }>;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm CheapChat AI, your bargain hunting assistant. I'll help you find the absolute lowest prices and best deals online. What are you shopping for?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [userQuery, setUserQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQueries = [
    "Find cheapest laptop under $500",
    "Best deals on wireless headphones",
    "Discounted home appliances",
    "Lowest price phone cases"
  ];

  const demoDeals = [
    {
      name: "Gaming Laptop - ASUS TUF",
      originalPrice: "$699",
      salePrice: "$399",
      savings: "Save $300",
      image: "💻",
      store: "Best Buy"
    },
    {
      name: "Sony WH-1000XM4 Headphones",
      originalPrice: "$349",
      salePrice: "$199",
      savings: "Save $150",
      image: "🎧",
      store: "Amazon"
    },
    {
      name: "iPhone 14 Pro Case",
      originalPrice: "$49",
      salePrice: "$12",
      savings: "Save $37",
      image: "📱",
      store: "eBay"
    }
  ];

  const botResponses = {
    "laptop": {
      text: "Found amazing laptop deals! Here's the cheapest option with great reviews:",
      products: demoDeals.slice(0, 1)
    },
    "headphones": {
      text: "Best headphone deals right now with huge savings:",
      products: demoDeals.slice(1, 2)
    },
    "case": {
      text: "Cheapest phone cases with maximum protection:",
      products: demoDeals.slice(2)
    },
    "phone": {
      text: "Cheapest phone cases with maximum protection:",
      products: demoDeals.slice(2)
    },
    "appliances": {
      text: "Great deals on home appliances with big discounts:",
      products: demoDeals
    }
  };

  const submitQuery = async () => {
    if (!userQuery.trim()) return;

    const userMessage: Message = {
      id: conversationHistory.length + 1,
      text: userQuery,
      isBot: false,
      timestamp: new Date()
    };

    setConversationHistory(prev => [...prev, userMessage]);
    setUserQuery('');
    setIsTyping(true);

    // Artificial delay to prevent the bot from feeling "too instant" and robotic. 
    // In a real app, network latency would handle this naturally.
    setTimeout(() => {
      const response = findBestResponse(userQuery);
      const botMessage: Message = {
        id: conversationHistory.length + 2,
        ...response,
        isBot: true,
        timestamp: new Date()
      };
      setConversationHistory(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const findBestResponse = (input: string) => {
    // TODO: Replace naive keyword matching with actual NLP/Vector search.
    // Currently hardcoded for the MVP demo.
    const lowercaseInput = input.toLowerCase();

    for (const [key, response] of Object.entries(botResponses)) {
      if (lowercaseInput.includes(key)) {
        return response;
      }
    }

    return {
      text: "I'll help you find the cheapest prices! Tell me what you're looking for - like 'laptop', 'headphones', 'phone case', etc. I'll scan thousands of stores to find you the best deals and lowest prices.",
      products: []
      // TODO: [Analytics] Fire 'search_abandoned' event here to track gaps in inventory
      // analytics.track('search_abandoned', { query: input });
    };
  };

  const handleSuggestedQuery = (question: string) => {
    setUserQuery(question);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors z-50 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          <div className="bg-orange-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChatIcon size="w-8 h-8" />
              <div>
                <h3 className="font-semibold">CheapChat</h3>
                <p className="text-xs opacity-90">Price Hunter AI</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setIsOpen(false)} className="hover:bg-orange-700 p-1 rounded">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-orange-700 p-1 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {conversationHistory.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs ${message.isBot
                  ? 'bg-orange-100 text-gray-800'
                  : 'bg-green-500 text-white'
                  } p-3 rounded-lg`}>
                  <p className="text-sm">{message.text}</p>

                  {message.products && message.products.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.products.map((product, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg border shadow-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{product.image}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate">{product.name}</p>
                              <div className="flex items-center justify-between mt-1">
                                <div>
                                  <span className="text-sm font-bold text-orange-600">{product.salePrice}</span>
                                  <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-1">
                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                  {product.savings}
                                </span>
                                <span className="text-xs text-gray-500">{product.store}</span>
                              </div>
                            </div>
                          </div>
                          <button
                            className="w-full mt-2 bg-orange-600 text-white text-xs py-1 rounded hover:bg-orange-700 transition-colors"
                            onClick={() => {
                              // TODO: [Analytics] Track 'deal_clicked' for conversion rate optimization
                              // analytics.track('deal_clicked', { 
                              //   product: product.name, 
                              //   price: product.salePrice, 
                              //   savings: product.savings 
                              // });
                              console.log('Deal clicked:', product.name);
                            }}
                          >
                            Get This Deal
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-orange-100 text-gray-800 p-3 rounded-lg max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {conversationHistory.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-600 mb-2">Popular deals:</p>
              <div className="space-y-1">
                {suggestedQueries.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuery(question)}
                    className="w-full text-left text-xs p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && submitQuery()}
                placeholder="What deals are you hunting for?"
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={submitQuery}
                disabled={!userQuery.trim()}
                className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}