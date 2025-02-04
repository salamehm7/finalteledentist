import React from 'react';
import { Smile } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Smile className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">My Live Dentists</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#emergency" className="text-gray-600 hover:text-indigo-600">Emergency Care</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header