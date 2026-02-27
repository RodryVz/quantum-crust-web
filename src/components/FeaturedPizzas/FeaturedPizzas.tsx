import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Modal from '../Modal/Modal';
import { getWhatsAppLink, WA_MESSAGES } from '../../utils/whatsapp';
import './FeaturedPizzas.css';

interface Pizza {
  name: string;
  price: string;
  description: string;
  details: string;
  image: string;
}

const FeaturedPizzas: React.FC = () => {
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  const pizzas = [
    {
      name: "Margherita di Bufala",
      price: "$22",
      description: "Mozzarella de búfala Campana DOP, tomate San Marzano de la base del Vesubio, albahaca fresca y aceite de oliva virgen extra de primera prensa.",
      details: "Nuestra Margherita es un rito de simplicidad. Utilizamos exclusivamente Tomates San Marzano recolectados a mano y Mozzarella de Búfala traída semanalmente desde Campania. La masa madre de 72 horas aporta una alveolatura única y una digestibilidad superior.",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Diavola Classica",
      price: "$26",
      description: "Salami picante de Calabria, fiordilatte de los montes Lattari, aceitunas Taggiasca y un toque sutil de miel picante artesanal de bosque.",
      details: "La Diavola es un equilibrio entre fuego y dulzura. El Salame Calabrese DOP aporta el picante característico, mientras que la miel artesanal de flores silvestres suaviza el paladar. Terminada con aceitunas Taggiasca deshuesadas a mano.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Tartufo e Porcini",
      price: "$32",
      description: "Crema de trufa blanca de temporada, hongos porcini frescos salteados, escamas de parmigiano reggiano 36 meses y tomillo silvestre.",
      details: "Puro lujo terroso. La base es una crema aterciopelada de Trufa Blanca (Tuber Magnatum). Los Hongos Porcini se saltean al momento en nuestro horno de leña para capturar su aroma ahumado. Coronada con escamas de Parmigiano Reggiano reserva de 36 meses.",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="menu" className="featured-section container section-padding">
      <div className="section-header">
        <motion.div 
          className="section-title-group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">La Herencia</span>
          <h2 className="section-title">Nuestros Clásicos</h2>
        </motion.div>
        
        <motion.p 
          className="section-description"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Seleccionamos ingredientes de pequeños productores que respetan la biodiversidad y los ciclos naturales de cada producto.
        </motion.p>
      </div>
      
      <div className="pizza-grid">
        {pizzas.map((pizza, index) => (
          <motion.div 
            key={index} 
            className="glass-card pizza-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="pizza-image-container">
              <img 
                src={pizza.image} 
                alt={`Pizza ${pizza.name}`} 
                className="pizza-image" 
                loading="lazy"
              />
              <div className="pizza-badge">{pizza.price}</div>
            </div>
            
            <div className="pizza-info">
              <h4 className="pizza-name" id={`pizza-name-${index}`}>{pizza.name}</h4>
              <p className="pizza-desc">{pizza.description}</p>
              
              <div className="pizza-footer">
                <button 
                  className="btn-link" 
                  onClick={() => setSelectedPizza(pizza)}
                  aria-label={`Ver detalles de ${pizza.name}`}
                >
                  Detalles de la Selección <ArrowRight size={14} />
                </button>
                <a 
                  href={getWhatsAppLink(WA_MESSAGES.ORDER(pizza.name))}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm mt-4 w-full"
                  aria-describedby={`pizza-name-${index}`}
                >
                  Pedir Ahora <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedPizza} 
        onClose={() => setSelectedPizza(null)} 
        title={selectedPizza?.name || ""}
      >
        <div className="modal-pizza-details">
          <p>{selectedPizza?.details}</p>
          <div className="modal-actions mt-8">
             <a 
              href={selectedPizza ? getWhatsAppLink(WA_MESSAGES.ORDER(selectedPizza.name)) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Pedir vía WhatsApp
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default FeaturedPizzas;
