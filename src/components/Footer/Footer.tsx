import React from 'react';
import { Instagram, Twitter, Facebook, Landmark } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-section" role="img" aria-label="Quantum Crust Logo">
              <Landmark className="logo-icon" size={24} aria-hidden="true" />
              <span className="logo-text">Quantum Crust</span>
            </div>
            <p className="brand-mantra">Tradición en cada gesto, fuego en cada masa.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h5 className="column-title">Ubicación</h5>
              <p className="column-text">Vía Artisanal 452, <br />Distrito Gastronómico</p>
            </div>
            
            <div className="footer-column">
              <h5 className="column-title">Horarios</h5>
              <p className="column-text">Mar — Dom <br />19:00 — 00:00</p>
            </div>
            
            <div className="footer-column">
              <h5 className="column-title">Contacto</h5>
              <p className="column-text">
                <a href={getWhatsAppLink(WA_MESSAGES.INFO)} target="_blank" rel="noopener noreferrer" className="footer-wa-link">
                  +56 9 8765 4321
                </a> 
                <br />ciao@quantumcrust.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Quantum Crust — Excelencia Neapolitana Artesanal
          </p>
          
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
