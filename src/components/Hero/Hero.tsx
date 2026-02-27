import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './Hero.css';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.log("Autoplay prevented or video failed to load:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://res.cloudinary.com/dlmva1ntk/video/upload/v1/piza_bucle_bpfocc.jpg"
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlmva1ntk/video/upload/f_auto,q_auto/piza_bucle_bpfocc.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/dlmva1ntk/video/upload/f_auto,q_auto/piza_bucle_bpfocc.webm" type="video/webm" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.span 
            className="subtitle"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 0.9, letterSpacing: '0.3em' }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Masa Madre & Fuego
          </motion.span>
          
          <h1 className="hero-title">
            <span className="title-line">El Arte de la <span className="text-serif">Pizza</span></span>
            <span className="title-line text-italic low-opacity">Elevado a la Perfección</span>
          </h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Descubre la esencia de la tradición italiana con un toque contemporáneo. 
            Fermentación natural de 72 horas e ingredientes de origen certificado.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#menu" className="btn btn-primary">
              Nuestra Carta
            </a>
            <a 
              href={getWhatsAppLink(WA_MESSAGES.RESERVATION)}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Reservar Mesa
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="scroll-text">Deslizar</span>
        <div className="scroll-line">
          <motion.div 
            className="scroll-dot"
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
