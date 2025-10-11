import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
const FaMapMarkerAlt = FaIcons.FaMapMarkerAlt as React.ComponentType;
const FaPhone = FaIcons.FaPhone as React.ComponentType;
const FaEnvelope = FaIcons.FaEnvelope as React.ComponentType;
const FaClock = FaIcons.FaClock as React.ComponentType;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 2rem;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    max-width: 800px;
    margin: 0 auto 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  p {
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  .icon {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.accent};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
    font-size: 1.2rem;
  }
  
  .text {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
      color: ${({ theme }) => theme.colors.text};
    }
    
    p, a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  
  h2 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
  
  input, textarea, select {
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: #3d8b40;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled.div`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1.5rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  text-align: center;
  font-weight: 500;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactContainer>
      <PageHeader>
        <h1>Get In Touch</h1>
        <p>Have questions about our classes or want to schedule a visit? Fill out the form below and we'll get back to you as soon as possible.</p>
      </PageHeader>
      
      <ContactGrid>
        <ContactInfo>
          <h2>Contact Information</h2>
          <p>We're here to help and answer any questions you might have. We look forward to hearing from you!</p>
          
          <InfoItem>
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="text">
              <h4>Our Location</h4>
              <p>123 Yoga Street, Peaceful City, PC 123456</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaPhone />
            </div>
            <div className="text">
              <h4>Phone Number</h4>
              <p>+1 234 567 8900</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="text">
              <h4>Email Address</h4>
              <a href="mailto:info@yogamantra.com">info@yogamantra.com</a>
            </div>
          </InfoItem>
          
          <InfoItem>
            <div className="icon">
              <FaClock />
            </div>
            <div className="text">
              <h4>Opening Hours</h4>
              <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 8:00 PM</p>
            </div>
          </InfoItem>
        </ContactInfo>
        
        <FormContainer>
          <h2>Send Us a Message</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="Your name"
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="your.email@example.com"
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="interest">I'm interested in *</label>
              <select 
                id="interest" 
                name="interest" 
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select a class or service</option>
                <option value="hatha">Hatha Yoga</option>
                <option value="vinyasa">Vinyasa Flow</option>
                <option value="yin">Yin Yoga</option>
                <option value="power">Power Yoga</option>
                <option value="prenatal">Prenatal Yoga</option>
                <option value="meditation">Meditation</option>
                <option value="private">Private Sessions</option>
                <option value="other">Other</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
                placeholder="How can we help you?"
              ></textarea>
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage>
                Thank you for your message! We'll get back to you soon.
              </SuccessMessage>
            )}
          </Form>
        </FormContainer>
      </ContactGrid>
      
      <div style={{ height: '400px', width: '100%', marginBottom: '4rem' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209057837!2d-73.9878436845938!3d40.75889597932693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, borderRadius: '10px' }} 
          allowFullScreen 
          loading="lazy"
          title="YogaMantra Location"
        ></iframe>
      </div>
    </ContactContainer>
  );
};

export default Contact;
