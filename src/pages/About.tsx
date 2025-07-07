
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About MockupHub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about providing high-quality, free mockups to help designers 
              and developers showcase their work in the best possible way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At MockupHub, we believe that great design should be accessible to everyone. 
                That's why we curate and create premium-quality mockups that are completely free to use.
              </p>
              <p className="text-gray-600">
                Whether you're a freelancer, agency, or in-house designer, our mockups help you 
                present your work professionally and impress your clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-64 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-xl font-semibold">Design Excellence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Mockups</h3>
              <p className="text-gray-600">Professional device mockups for phones, tablets, and laptops</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Packaging</h3>
              <p className="text-gray-600">Stunning packaging mockups for products and branding</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👕</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apparel</h3>
              <p className="text-gray-600">Fashion and clothing mockups for brands and designers</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
