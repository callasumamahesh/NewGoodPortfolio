import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="backdrop-blur-sm bg-white/80 sticky top-0 z-50 border-b border-purple-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <span className="text-xl text-white p-2 rounded-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Portfolio
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="hover:bg-purple-100 text-purple-700"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-purple-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-2 bg-white/90 backdrop-blur-sm absolute top-16 left-0 right-0 border-b border-purple-200">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start hover:bg-purple-100 text-purple-700"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;