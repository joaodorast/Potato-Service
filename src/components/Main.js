import React from 'react';
import batataImg from '../assets/batata.jpg'; 
const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="saiba-mais">Saiba Mais</button>
  </div>
);

const Main = () => {
  const services = [
    {
      title: "Batatas Fritas Gourmet",
      description: "Nossas batatas fritas artesanais são preparadas com ingredientes selecionados e temperos exclusivos.",
      icon: "🍟"
    },
    {
      title: "Purê Especial",
      description: "Um purê cremoso e irresistível, feito com as melhores batatas e temperos secretos.",
      icon: "🥔"
    },
    {
      title: "Batatas Assadas",
      description: "Batatas assadas com diversas opções de recheios e acompanhamentos.",
      icon: "🥘"
    }
  ];

  return (
    <main>
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Transformando Batatas em Experiências Únicas</h1>
          <p>Descubra o melhor da gastronomia com nossas criações exclusivas</p>
          <button className="conheca-menu">Conheça Nosso Menu</button>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Nós</h2>
            <p>O Potato Service nasceu da paixão por criar experiências gastronômicas únicas com batatas. 
               Nossa missão é levar sabor e qualidade para sua mesa, com pratos criativos e ingredientes selecionados.</p>
            <ul className="about-features">
              <li>✓ Ingredientes Premium</li>
              <li>✓ Chef Especializado</li>
              <li>✓ Receitas Exclusivas</li>
              <li>✓ Atendimento Personalizado</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src={batataImg} alt="Nossa Cozinha" />  
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Entre em Contato</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Sua Mensagem" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p>📍 Rua das Batatas, 123</p>
            <p>📞 (21) 99999-9999</p>
            <p>✉️ contato@potatoservice.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;