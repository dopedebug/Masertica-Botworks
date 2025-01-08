import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';
import customer from '../assets/customer.jpg';
import personal from '../assets/personal.jpg';
import staff from '../assets/staff.jpg';
import calling from '../assets/calling.jpg';


const services = {
  'personal-chatbot': {
    title: "Personal Website Chatbot",
    price: "₹500",
    description: "Custom AI chatbot trained on your personal data to engage with website visitors and provide personalized responses. Our chatbots are designed to understand your personal data and can act like the person of whom the data is being used. Adding it to your personal website can really set you apart from the competition.",
    image: personal,
    timeframe: "2-3 weeks",
    features: [
      "Custom data training on your personal data",
      "24/7 availability with instant responses",
      "Advanced analytics dashboard",
      "Easy website integration",
      "Regular updates and maintenance(opt with extra costs)",
      "Conversation history tracking",
      "Custom personality and tone matching your personal brand"
    ],
    pricing: {
      basic: {
        price: "₹500",
        includes: [
          "Chat Analytics",
          "Website Integration",
          "Training on personal data",
          "Regular updates and maintenance(opt with extra costs)",
          "24/7 availability",
          "Basic support"
        ]
      }
    }
  },
  'staff-training': {
    title: "Staff Training Bots",
    price: "Starting at ₹2,000",
    description: "Transform your employee training process with our AI-powered training assistants. These intelligent bots provide interactive learning experiences, track progress, and adapt to each employee's learning pace, making onboarding and continuous education more efficient and engaging.",
    image: staff,
    timeframe: "4-6 weeks",
    features: [
      "Customized training modules for each department",
      "Interactive Q&A sessions",
      "Progress tracking and reporting",
      "Performance assessments",
      "Multiple learning paths",
      "Video and document integration",
      "Quiz and certification system",
      "Real-time feedback mechanisms"
    ],
    pricing: {
      basic: {
        price: "₹2,000",
        includes: [
          "Up to 50 employees",
          "Basic reporting",
          "Standard support",
          "3 training modules"
        ]
      },
      enterprise: {
        price: "Custom Quote",
        includes: [
          "Unlimited employees",
          "Advanced analytics",
          "Priority support",
          "Custom modules",
          "Integration with HR systems"
        ]
      }
    }
  },
  'customer-service': {
    title: "Customer Service Agents",
    price: "Starting at ₹1,500",
    description: "Elevate your customer service with our AI agents that handle customer inquiries across multiple channels. Our bots integrate seamlessly with your existing CRM systems, providing 24/7 support while maintaining consistent quality and reducing response times.",
    image: customer,
    timeframe: "3-4 weeks",
    features: [
      "Omnichannel support (Email, Chat, Social Media)",
      "CRM integration (Salesforce, Zendesk, etc.)",
      "Automated ticket management",
      "Sentiment analysis",
      "Custom escalation protocols",
      "Multi-language support",
      "Analytics and reporting",
      "Knowledge base integration"
    ],
    pricing: {
      basic: {
        price: "₹1,500",
        includes: [
          "Single channel support",
          "Basic CRM integration",
          "Standard response times",
          "Basic reporting"
        ]
      },
      premium: {
        price: "custom pricing",
        includes: [
          "Multi-channel support",
          "Advanced CRM integration",
          "Priority handling",
          "Advanced analytics",
          "Custom workflows"
        ]
      }
    }
  },
  'calling-agents': {
    title: "Inbound/Outbound Calling Agents",
    price: "₹2,000",
    description: "Revolutionary AI-powered calling agents that handle both inbound and outbound calls with natural conversation flow. Perfect for lead generation, appointment scheduling, surveys, and customer support, our voice agents provide consistent, scalable phone interactions.",
    image: calling,
    timeframe: "4-5 weeks",
    features: [
      "Natural voice synthesis",
      "Real-time speech recognition",
      "Customizable call scripts",
      "Call recording and analysis",
      "CRM integration",
      "Appointment scheduling",
      "Lead qualification",
      "Performance analytics"
    ],
    pricing: {
      basic: {
        price: "₹2,000",
        includes: [
          "limitation on the number of calls",
          "Basic voice customization",
          "Standard reporting",
          "Business hours support"
        ]
      },
      enterprise: {
        price: "₹4",
        includes: [
          "Unlimited calls and conversations",
          "Advanced voice customization",
          "Priority support",
          "Custom integration",
          "Maintenance and updates"
        ]
      }
    }
  }
};

function ServiceDetail() {
  const { id } = useParams();
  const service = services[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail">
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>{service.title}</h1>
          <p className="service-price">Starting at {service.price}</p>
        </div>
      </div>

      <div className="service-content">
        <div className="service-main">
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-info">
            <h2>About this Service</h2>
            <p>{service.description}</p>
            
            <div className="service-timeframe">
              <h3>Estimated Timeframe</h3>
              <p>{service.timeframe}</p>
            </div>

            <div className="service-features">
              <h3>Features</h3>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pricing-plans">
              <h3>Pricing Plans</h3>
              <div className="plans-container">
                <div className="plan">
                  <h4>Basic Plan</h4>
                  <p className="plan-price">{service.pricing.basic.price}</p>
                  <ul>
                    {service.pricing.basic.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {(service.pricing.premium || service.pricing.enterprise) && (
                  <div className="plan premium">
                    <h4>{service.pricing.enterprise ? 'Enterprise Plan' : 'Premium Plan'}</h4>
                    <p className="plan-price">
                      {service.pricing.enterprise 
                        ? service.pricing.enterprise.price 
                        : service.pricing.premium.price}
                    </p>
                    <ul>
                      {(service.pricing.enterprise 
                        ? service.pricing.enterprise.includes 
                        : service.pricing.premium.includes).map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <Link 
            to="/" 
            state={{ scrollToContact: true }}
            className="cta-button"
          >
            Get Started
          </Link>
          <Link 
            to="/" 
            className="back-button"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail; 