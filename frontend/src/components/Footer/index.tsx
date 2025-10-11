import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import Gallery from '../../pages/Gallery';
const FaFacebook = FaIcons.FaFacebook as React.ComponentType;
const FaInstagram = FaIcons.FaInstagram as React.ComponentType;
const FaTwitter = FaIcons.FaTwitter as React.ComponentType;
const FaYoutube = FaIcons.FaYoutube as React.ComponentType;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 3rem 2rem 1.5rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.8rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>All The Classes</h3>
          <p>Find your inner peace and balance through the ancient practice of yoga. Join our community and start your journey to better health and wellbeing.</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Us</h3>
          <FooterLinks>
            <li>P-40A, Shashi Park Rd, near Ahlcon Public School, Supreme Enclave, Mayur Vihar, New Delhi, Delhi, 110091</li>
            <li>Email: support@alltheclasses.com</li>
            <li>Phone: +91 9625-852085</li>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} All The Classes. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
