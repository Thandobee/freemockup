
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockups, categories } from '@/data/mockData';
import { Search, Download } from 'lucide-react';

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFileType, setSelectedFileType] = useState('all');

  const category = categories.find(c => c.id === categoryId);
  
  const filteredMockups = useMemo(() => {
    return mockups.filter((mockup) => {
      const matchesCategory = mockup.category === categoryId;
      const matchesSearch = mockup.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           mockup.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFileType = selectedFileType === 'all' || mockup.fileType === selectedFileType;
      
      return matchesCategory && matchesSearch && matchesFileType;
    });
  }, [categoryId, searchTerm, selectedFileType]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-xl text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.name} Mockups
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {category.description}
            </p>
            <div className="text-lg text-gray-500">
              {filteredMockups.length} mockups available
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search mockups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={selectedFileType}
                onChange={(e) => setSelectedFileType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All File Types</option>
                <option value="PSD">PSD</option>
                <option value="PNG">PNG</option>
                <option value="JPG">JPG</option>
              </select>

              <div className="flex items-center text-gray-600">
                <span>{filteredMockups.length} results found</span>
              </div>
            </div>
          </div>

          {/* Mockups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMockups.map((mockup) => (
              <div
                key={mockup.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={mockup.image}
                    alt={mockup.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                  
                  {mockup.isPremium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Premium
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {mockup.fileType}
                    </span>
                    <span className="text-xs text-gray-500">{mockup.downloads} downloads</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {mockup.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {mockup.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {mockup.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMockups.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No mockups found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryDetail;
