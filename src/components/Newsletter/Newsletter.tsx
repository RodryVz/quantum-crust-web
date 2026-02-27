import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Crown, ExternalLink } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-split-box glass-card">
          <div className="newsletter-image-side">
            <img 
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=800" 
              alt="Artisanal Pizza Craft" 
            />
            <div className="image-overlay-text">
              <span className="est-text">Est. 1992</span>
              <p>Tradición & Maestría</p>
            </div>
          </div>
          
          <div className="newsletter-form-side">
            <AnimatePresence mode="wait">
              {status === 'idle' ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="form-inner"
                >
                  <div className="community-badge">
                    <Crown size={14} />
                    <span>Círculo Quantum</span>
                  </div>
                  
                  <h3 className="form-title">Comunidad Exclusiva</h3>
                  <p className="form-desc">
                    Sea parte de nuestro círculo íntimo. Reciba invitaciones a catas privadas, 
                    secretos de nuestra cocina y lanzamientos de temporada antes que nadie.
                  </p>
                  
                  <form className="luxury-form" onSubmit={handleSubmit}>
                    <div className="input-group-luxury">
                      <input 
                        type="email" 
                        placeholder="Su correo de cortesía" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button type="submit" className="btn-send">
                        <Send size={18} />
                      </button>
                    </div>
                  </form>
                  
                  <div className="form-footer">
                    <p>O si prefiere un contacto más directo:</p>
                    <a 
                      href={getWhatsAppLink(WA_MESSAGES.NEWSLETTER)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-community-link"
                    >
                      Unirse vía WhatsApp <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-view"
                >
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="success-heading">Bienvenido, {email.split('@')[0]}</h4>
                  <p className="success-text">Hemos registrado su lugar en nuestro círculo de honor. Le enviaremos su invitación digital en breve.</p>
                  <button 
                    className="btn-text-only"
                    onClick={() => setStatus('idle')}
                  >
                    Volver al formulario
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
