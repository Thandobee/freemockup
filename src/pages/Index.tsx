
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { categories, mockups } from '@/data/mockData';
import { Search, Download, ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFileType, setSelectedFileType] = useState('all');

  // Filter mockups based on search and filters
  const filteredMockups = useMemo(() => {
    return mockups.filter((mockup) => {
      const matchesSearch = mockup.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           mockup.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || mockup.category === selectedCategory;
      const matchesFileType = selectedFileType === 'all' || mockup.fileType === selectedFileType;
      
      return matchesSearch && matchesCategory && matchesFileType;
    });
  }, [searchTerm, selectedCategory, selectedFileType]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">Premium Quality, Always Free</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Mockups,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Free Forever
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover thousands of high-quality mockups for your design projects. 
            Perfect for showcasing your work professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg" asChild>
              <Link to="/categories">
                Explore Mockups
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"></div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect mockup for your project from our carefully curated categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                    Explore {category.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search mockups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedFileType}
                onChange={(e) => setSelectedFileType(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All File Types</option>
                <option value="PSD">PSD</option>
                <option value="PNG">PNG</option>
                <option value="JPG">JPG</option>
              </select>

              <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-6 py-3 font-semibold">
                {filteredMockups.length} mockups found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Mockups
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality mockups ready for your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMockups.slice(0, 6).map((mockup) => (
              <div
                key={mockup.id}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={mockup.image}
                    alt={mockup.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2 hover:bg-gray-50">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                  
                  {mockup.isPremium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Premium
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {mockup.fileType}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{mockup.downloads} downloads</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {mockup.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {mockup.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {mockup.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4" asChild>
              <Link to="/categories">
                View All Mockups
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
