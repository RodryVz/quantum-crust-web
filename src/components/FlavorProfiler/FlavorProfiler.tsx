import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Bone, Flame, Leaf, Wind, UtensilsCrossed, ExternalLink } from 'lucide-react';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './FlavorProfiler.css';

const FlavorProfiler: React.FC = () => {
  const [flavor, setFlavor] = useState<string | null>(null);



  const recommendations: Record<string, { 
    name: string, 
    desc: string, 
    icon: React.ReactNode,
    image: string 
  }> = {
    'Umami': { 
      name: "Tartufo e Porcini", 
      desc: "Una experiencia sublime que fusiona la profundidad de la trufa blanca con hongos silvestres seleccionados a mano.",
      icon: <Bone size={20} />,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800"
    },
    'Picante': { 
      name: "Diavola Classica", 
      desc: "El calor noble del salami calabrés se equilibra magistralmente con la dulzura de nuestra miel de bosque artesanal.",
      icon: <Flame size={20} />,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
    },
    'Fresco': { 
      name: "Margherita di Bufala", 
      desc: "La pureza de la tradición neapolitana: tomate San Marzano, mozzarella de búfala DOP y albahaca recién cortada.",
      icon: <Leaf size={20} />,
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=800"
    },
    'Ahumado': { 
      name: "Provolone e Legna", 
      desc: "Capturamos la esencia del fuego en este perfil intenso, protagonizado por quesos curados y el aroma del roble.",
      icon: <Wind size={20} />,
      image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800"
    }
  };

  return (
    <section className="flavor-profiler-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-16">
          <motion.span 
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sugerencia del Maestro
          </motion.span>
          <motion.h3 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            El Curador de Sabores
          </motion.h3>
        </div>

        <div className="profiler-main-wrapper">
          <div className="profiler-selectors">
            {Object.keys(recommendations).map((f, index) => (
              <motion.button 
                key={f} 
                className={`flavor-card-btn ${flavor === f ? 'active' : ''}`}
                onClick={() => setFlavor(f)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="btn-icon-circle">{recommendations[f].icon}</div>
                <span className="flavor-type">{f}</span>
                <div className="active-dot"></div>
              </motion.button>
            ))}
          </div>

          <div className="profiler-display glass-card">
            <AnimatePresence mode="wait">
              {flavor ? (
                <motion.div 
                  key={flavor}
                  className="recommendation-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="rec-info-clean">
                    <div className="rec-top-row">
                      <ChefHat size={18} color="var(--primary)" />
                      <span className="rec-tag">Recomendación Artesanal</span>
                    </div>
                    
                    <h4 className="rec-pizza-name">{recommendations[flavor].name}</h4>
                    <p className="rec-pizza-desc">{recommendations[flavor].desc}</p>
                    
                    <div className="rec-actions-clean">
                      <a 
                        href={getWhatsAppLink(WA_MESSAGES.ORDER(recommendations[flavor].name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Pedir vía WhatsApp <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="rec-image-simple">
                     <img 
                       src={recommendations[flavor].image} 
                       alt={recommendations[flavor].name} 
                       loading="lazy"
                     />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="profiler-placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                >
                  <UtensilsCrossed size={40} className="mb-4" strokeWidth={1} />
                  <p>Seleccione un perfil de sabor para recibir su recomendación.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorProfiler;
