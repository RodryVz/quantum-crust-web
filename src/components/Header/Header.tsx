import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Carta', href: '#menu' },
    { name: 'Historia', href: '#experience' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-section" role="img" aria-label="Quantum Crust Logo">
          <Landmark className="logo-icon" size={24} aria-hidden="true" />
          <span className="logo-text">Quantum Crust</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a 
            href={getWhatsAppLink(WA_MESSAGES.RESERVATION)}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            Reservar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={getWhatsAppLink(WA_MESSAGES.RESERVATION)}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Reservar Mesa
          </a>
        </div>
      </div>
      
      {/* Backdrop */}
      {isMenuOpen && <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
