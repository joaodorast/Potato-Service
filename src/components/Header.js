import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container">
          <h1>Potato Service</h1>
        </div>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            <li className="cta-button">
              <a href="#order" className="order-button" onClick={() => setIsMenuOpen(false)}>
                Fazer Pedido
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;