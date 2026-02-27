import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './CTASection.css';

const CTASection: React.FC = () => {
  const testimonials = [
    {
      text: "La mejor pizza artesanal que he probado fuera de Italia. La masa de 72 horas hace toda la diferencia.",
      author: "Marco Rossi",
      role: "Crítico Gastronómico"
    },
    {
      text: "Un ambiente sofisticado y un sabor auténtico. La pizza de trufa es simplemente obligatoria.",
      author: "Elena Vasquez",
      role: "Lifestyle Blogger"
    }
  ];

  return (
    <section id="contact" className="cta-section">
      {/* Testimonials Section - Editorial Style */}
      <div className="testimonials-editorial section-padding">
        <div className="container">
          <div className="section-header text-center mb-16">
            <span className="subtitle">Reseñas</span>
            <h2 className="section-title">Lo que dicen nuestros invitados</h2>
          </div>
          
          <div className="testimonials-row">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className="testimonial-editorial-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <Quote className="editorial-quote-icon" size={40} />
                <p className="editorial-text">"{t.text}"</p>
                <div className="editorial-author-info">
                  <span className="editorial-name">{t.author}</span>
                  <span className="editorial-role">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Card Section */}
      <div className="booking-footer section-padding">
        <div className="container">
          <motion.div 
            className="cta-card-luxury glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-luxury-content">
              <div className="cta-rating-badge">
                <div className="stars-mini" role="img" aria-label="Valoración de 5 estrellas">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" aria-hidden="true" />)}
                </div>
                <span>Excelencia Certificada</span>
              </div>
              
              <h3 className="cta-luxury-title">¿Desea una mesa?</h3>
              <p className="cta-luxury-desc">Permítanos prepararle una experiencia gastronómica inolvidable.</p>
              
              <div className="cta-actions-group">
                <a 
                  href={getWhatsAppLink(WA_MESSAGES.RESERVATION)}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-large"
                >
                  Solicitar Reserva <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <div className="cta-decorative-light"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
