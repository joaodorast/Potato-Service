import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Potato Service</h3>
          <p>Transformando batatas em experiências únicas desde 2025.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#privacy">Privacidade</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Horário de Funcionamento</h4>
          <ul className="hours">
            <li>Segunda - Sexta: 11h às 22h</li>
            <li>Sábado - Domingo: 12h às 23h</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu email" required />
            <button type="submit">Inscrever</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Potato Service. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;