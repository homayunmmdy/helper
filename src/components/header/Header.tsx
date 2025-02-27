'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SiteConfig } from '@/app/config/site';
import MainMenu from './MainMenu';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const config = SiteConfig();
  const mainMenuItems = [
    { name: config.pages.home, href: '/' },
  ];

  const dropdownMenuItems = [
    {
      name: config.pages.technology,
      items: [
        { name: config.pages.whatsappLinkGenerator, href: '/tools/whatsapp-link-generator' },
      ],
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`bg-black text-white w-full z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 shadow-lg' : 'relative'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              {config.name}
            </Link>
          </div>
          
          <MainMenu mainMenuItems={mainMenuItems} dropdownMenuItems={dropdownMenuItems} />
          
          <LanguageSwitcher />
          
          <MobileMenuButton onClick={toggleMobileMenu} />
        </nav>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          mainMenuItems={mainMenuItems}
          dropdownMenuItems={dropdownMenuItems}
        />
      </div>
    </header>
  );
};

export default Header;