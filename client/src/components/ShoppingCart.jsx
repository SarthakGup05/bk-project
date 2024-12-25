import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag,
  CreditCard,
  ArrowRight 
} from 'lucide-react';

import Card from './ui/Card';
import Button from './ui/Button';



const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 3,
      title: "The Art of Storytelling",
      author: "Alexandra Rivers",
      cover: "/api/placeholder/120/180",
      price: 29.99,
      quantity: 1,
      format: "Hardcover"
    },
    {
      id: 2,
      title: "Modern Poetry Collection",
      author: "David Chen",
      cover: "/api/placeholder/120/180",
      price: 24.99,
      quantity: 1,
      format: "Paperback"
    },
    {
        id: 1,
        title: "The Great Adventure",
        author: "Jane Smith",
        price: 24.99,
        image: "/api/placeholder/400/600",
        rating: 4.5,
        category: "Fiction",
        inStock: true,
        description: "An epic tale of discovery and wonder...",
        publisher: "Book House",
        pages: 342,
        isbn: "978-3-16-148410-0",
      },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <ShoppingBag className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex space-x-6">
                  {/* Book Cover */}
                  <div className="w-40 h-52 flex-shrink-0">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.author}</p>
                        <p className="text-sm text-gray-500">{item.format}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-lg font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 space-y-6">
              <h2 className="text-xl font-bold">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-12 bg-orange-600 hover:bg-orange-700">
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>

              <div className="text-sm text-gray-500 space-y-2">
                <p className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-1" />
                  Free shipping on orders over $35
                </p>
                <p className="flex items-center">
                  <ArrowRight className="w-4 h-4 mr-1" />
                  30-day easy returns
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;