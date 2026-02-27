import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuPreview.css';

type MenuCategory = 'Signature' | 'Classic' | 'Vegan';

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

const MenuPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Signature');

  const menuData: Record<MenuCategory, MenuItem[]> = {
    Signature: [
      { name: "Burrata y Crudo", desc: "Burrata fresca de Puglia, Prosciutto di Parma curado 24 meses sobre focaccia templada", price: "$28" },
      { name: "Il Capitano", desc: "Gorgonzola dulce cubierto con nueces caramelizadas, cebolla roja asada y reducción balsámica", price: "$26" },
      { name: "Bosque y Humo", desc: "Mix seleccionado de setas silvestres, provolone ahumado, trufa negra y sal de escamas", price: "$30" },
      { name: "Regia", desc: "Mozzarella de alta calidad, berenjenas asadas al horno de leña y ricota salada siciliana", price: "$24" }
    ],
    Classic: [
      { name: "Napolitana Real", desc: "Anchoas premium del Cantábrico, alcaparras sicilianas, orégano silvestre y aceite picante", price: "$22" },
      { name: "Quattro Formaggi", desc: "Equilibrio perfecto de Parmesano Reggiano, Gorgonzola, Taleggio y Mozzarella fior di latte", price: "$25" },
      { name: "Calabrese", desc: "Salami picante DOP, aceitunas negras Taggiasca, peperoncino y miel infusada", price: "$24" },
      { name: "Tonno e Cipolla", desc: "Atún claro de almadraba, cebolla morada de Tropea caramelizada y olivas de la terra", price: "$26" }
    ],
    Vegan: [
      { name: "Marinara dell'Orto", desc: "Tomate San Marzano purísimo, ajo laminado, rúcula fresca baby y olivas negras", price: "$20" },
      { name: "Verde Intenso", desc: "Pesto de albahaca artesanal (sin lácteos), piñones tostados, calabacín y ralladura de limón", price: "$24" },
      { name: "Terra", desc: "Berza roja marinada, tomates secos bajo el sol chileno, almendras tostadas y aceite de ajo", price: "$22" },
      { name: "Huerto Clásico", desc: "Selección estacional de verduras de temporada asadas con aceite perfumado de hierbas", price: "$23" }
    ]
  };

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'Signature', label: 'De la Tierra' },
    { key: 'Classic', label: 'Los Clásicos' },
    { key: 'Vegan', label: 'Del Huerto' }
  ];

  return (
    <section id="carta" className="menu-preview-section section-padding">
      <div className="container max-w-5xl">
        <div className="menu-header">
          <motion.h3 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nuestra Selección
          </motion.h3>
          
          <motion.div 
            className="menu-tabs-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass menu-tabs">
              {categories.map((cat) => (
                <button 
                  key={cat.key}
                  className={`tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                  {activeCategory === cat.key && (
                    <motion.div 
                      layoutId="activeTab" 
                      className="active-indicator"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="menu-items-wrapper">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="glass-card menu-items-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="menu-grid">
                {menuData[activeCategory].map((item, index) => (
                  <motion.div 
                    key={`${activeCategory}-${index}`} 
                    className="menu-item-interactive"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="item-info">
                      <div className="item-title-row">
                        <p className="item-name">{item.name}</p>
                        <div className="item-line"></div>
                        <span className="item-price">{item.price}</span>
                      </div>
                      <p className="item-desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
