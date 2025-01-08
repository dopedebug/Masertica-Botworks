import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: 'loading', message: 'Submitting...' });
    
    try {
      const response = await fetch('https://masertica-backend.vercel.app/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        setStatus({
          type: 'success',
          message: '🎉 Thank you for contacting us! We will get back to you shortly.'
        });
        resetForm();
        setShowForm(false);
        setTimeout(() => {
          setStatus({ type: '', message: '' });
          setShowForm(true);
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-form">
      <h2 data-aos="fade-down">Get In Touch</h2>
      <div className="form-container">
        {status.message && (
          <div className={`alert alert-${status.type}`} data-aos="fade-down">
            {status.message}
          </div>
        )}
        {showForm && (
          <form onSubmit={handleSubmit} data-aos="fade-up">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                disabled={isSubmitting}
              />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                disabled={isSubmitting}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="form-group">
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                required
                disabled={isSubmitting}
                style ={{color:'grey'}}
              >
                <option value="">Select a Service</option>
                <option value="Personal Website Chatbot">Personal Website Chatbot</option>
                <option value="Staff Training Bots">Staff Training Bots</option>
                <option value="Customer Service Agents">Customer Service Agents</option>
                <option value="Inbound/Outbound Calling Agents">Inbound/Outbound Calling Agents</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={isSubmitting ? 'submitting' : ''}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm; 