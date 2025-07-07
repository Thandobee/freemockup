
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories } from '@/data/mockData';
import { Search, Smartphone, Package, Palette, Shirt, FileText, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Smartphone,
  Package,
  Palette,
  Shirt,
  FileText,
  Share2,
};

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Browse Categories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover mockups organized by category to find exactly what you need
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <IconComponent 
                        size={32} 
                        className="group-hover:animate-pulse transition-all duration-300" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                      Explore {category.name}
                      <Search className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No categories found</h3>
              <p className="text-gray-600">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
