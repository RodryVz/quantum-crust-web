import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Thermometer } from 'lucide-react';
import './BrandExperience.css';

const BrandExperience: React.FC = () => {
  return (
    <section id="experience" className="brand-experience section-padding">
      <div className="container">
        <motion.div 
          className="experience-wrapper glass-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="experience-bg">
            <img 
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=2000" 
              alt="Horno de leña artesanal en funcionamiento" 
              className="experience-img"
              loading="lazy"
            />
            <div className="experience-overlay"></div>
          </div>
          
          <div className="experience-content">
            <motion.span 
              className="subtitle"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Nuestra Filosofía
            </motion.span>
            
            <motion.h3 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              El Secreto está en el Tiempo
            </motion.h3>
            
            <motion.p 
              className="experience-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              No creemos en los atajos. El alma de nuestra cocina reside en el respeto por los procesos ancestrales. 
              Nuestra cocina abierta no es solo un diseño, es una invitación a presenciar la alquimia entre el agua, 
              la harina artesanal y el fuego vivo.
            </motion.p>
            
            <div className="stats-grid">
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="stat-icon-box">
                  <Timer size={24} strokeWidth={1.5} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">48 Horas</span>
                  <span className="stat-label">Fermentación Lenta</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="stat-icon-box">
                  <Thermometer size={24} strokeWidth={1.5} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">450°C</span>
                  <span className="stat-label">Horno de Leña Vivo</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandExperience;
