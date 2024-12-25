import React, { useState } from "react";
import {
  ChevronRight,
  Heart,
  Share,
  BookOpen,
  Download,
  Star,
} from "lucide-react";
import ImagePreview from "../components/ui/ImagePrew";
import RatingStars from "../components/ui/RatingStar";
import ActionButton from "../components/ui/ActionBtn";
import FormatSelector from "../components/ui/FormatSelector";
import QuantitySelector from "../components/ui/QuantitySelector";
import Tabs from "../components/ui/Tabs"; // Import the Tabs component
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const ModernBookProduct = () => {
  const [selectedFormat, setSelectedFormat] = useState("hardcover");
  const [quantity, setQuantity] = useState(1);
  const [isWished, setIsWished] = useState(false);

  // Tabs Content
  const tabsContent = [
    {
      label: "Description",
      value: "description",
      content: (
        <div>
          <p className="text-gray-600 leading-relaxed">
            Embark on a transformative journey through the art of modern
            storytelling. This comprehensive guide revolutionizes the way we
            think about narrative structure in the digital age. Perfect for
            aspiring writers, content creators, and anyone looking to master the
            craft of engaging storytelling.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Interactive writing exercises",
              "Digital storytelling techniques",
              "Character development strategies",
              "Modern publishing insights",
            ].map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      label: "Details",
      value: "details",
      content: (
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Publisher", value: "Modern Press" },
            { label: "Language", value: "English" },
            { label: "Pages", value: "420 pages" },
            { label: "Format", value: "Hardcover" },
            { label: "Release Date", value: "Oct 15, 2024" },
            { label: "ISBN", value: "978-3-16-148410-0" },
          ].map((detail, index) => (
            <div key={index} className="space-y-1">
              <dt className="text-gray-500 text-sm">{detail.label}</dt>
              <dd className="font-medium text-gray-900">{detail.value}</dd>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Reviews",
      value: "reviews",
      content: (
        <div className="space-y-6">
          {[1, 2].map((review) => (
            <div key={review} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          color="#FCD34D"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">3 days ago</span>
              </div>
              <p className="text-gray-600">
                This book completely transformed my approach to storytelling.
                The modern techniques and practical exercises make it invaluable
                for any content creator.
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-28">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg">
                <img
                  src="/api/placeholder/600/800"
                  alt="Book Cover"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="absolute top-4 right-4 space-y-2">
                <ActionButton
                  icon={Heart}
                  isActive={isWished}
                  onClick={() => setIsWished(!isWished)}
                />
                <ActionButton icon={Share} />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <ImagePreview
                  key={i}
                  src={`/api/placeholder/150/200`}
                  alt={`Preview ${i}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              The Art of Modern Storytelling
            </h1>
            <RatingStars rating={4} />
            <p className="text-gray-600">Price: $29.99</p>
            <FormatSelector
              formats={[
                { id: "hardcover", label: "Hardcover", icon: BookOpen },
                { id: "paperback", label: "Paperback", icon: BookOpen },
                { id: "ebook", label: "E-Book", icon: Download },
              ]}
              selectedFormat={selectedFormat}
              onSelect={setSelectedFormat}
            />
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(quantity + 1)}
              onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
            />
            <Link to="/cart">
              {" "}
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
                  Add to Cart
                </Button>

                <Button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
                  Buy Now
                </Button>
              </div>
            </Link>

            {/* Tabs Section */}
            <Tabs tabs={tabsContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBookProduct;
