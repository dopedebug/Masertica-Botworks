import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import 'aos/dist/aos.css';
import personal from '../assets/personal.jpg';
import staff from '../assets/staff.jpg';
import customer from '../assets/customer.jpg';
import calling from '../assets/calling.jpg';

const services = [
  {
    id: 'personal-chatbot',
    title: "Personal Website Chatbot",
    price: "₹500",
    description: "Custom AI chatbot trained on your personal data to engage with website visitors and provide personalized responses.",
    image: personal,
    delay: "0",
    timeframe: "2-3 weeks",
    features: [
      "Custom data training",
      "24/7 availability",
      "Multi-language support",
      "Analytics dashboard",
      "Easy integration"
    ]
  },
  {
    id: 'staff-training',
    title: "Staff Training Bots",
    price: "Price Negotiable",
    description: "AI-powered training assistants to help onboard and train your staff efficiently. Customizable based on your needs.",
    image: staff,
    delay: "100",
    timeframe: "4-6 weeks",
    features: [
      "Customized training modules",
      "Progress tracking",
      "Interactive learning",
      "Performance analytics",
      "Multiple department support"
    ]
  },
  {
    id: 'customer-service',
    title: "Customer Service Agents",
    price: "Starting at ₹1,500",
    description: "Intelligent customer service bots with CRM integration to handle customer queries 24/7.",
    image: customer,
    delay: "200",
    timeframe: "3-4 weeks",
    features: [
      "CRM integration",
      "Multi-channel support",
      "Automated ticket handling",
      "Customer feedback analysis",
      "Real-time reporting"
    ]
  },
  {
    id: 'calling-agents',
    title: "Inbound/Outbound Calling Agents",
    price: "₹2,000",
    description: "Advanced AI agents capable of handling both inbound and outbound calls with natural conversation flow.",
    image: calling,
    delay: "300",
    timeframe: "4-5 weeks",
    features: [
      "Natural voice synthesis",
      "Call scheduling",
      "Call recording & analysis",
      "Integration with CRM",
      "Performance metrics"
    ]
  }
];

function Services() {
  return (
    <section id="services" className="services">
      <h2 data-aos="fade-down">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card" 
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <div className="service-image-container">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
            <h3>{service.title}</h3>
            <p className="price">{service.price}</p>
            <p className="description">{service.description}</p>
            <Link to={`/service/${service.id}`} className="read-more-btn">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 