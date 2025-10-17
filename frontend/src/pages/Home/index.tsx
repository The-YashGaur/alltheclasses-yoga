import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GallerySection from './GallerySection';

const InstructorImageSrc = '/gallery/mohit kumar yoga.jpg';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), 
              url('/gallery/yoga-background.jpg') center/cover no-repeat fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  color: white;
  position: relative;
  margin-top: 0;
  backdrop-filter: brightness(1.4);
  -webkit-backdrop-filter: brightness(1.4); 
  
  /* Ensure content is above the background */
  & > * {
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Stronger text shadow for better readability */
  }
  
  /* Add a subtle animation */
  animation: fadeIn 1s ease-in;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideUp 1s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1rem;
  border: 2px solid #ff6b6b;
  
  &:hover {
    background-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const InstructorSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const InstructorSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #8bc34a;
  }
`;

const InstructorContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  gap: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const InstructorImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const InstructorContent = styled.div`
  flex: 1;
  h3 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .title {
    color: #8bc34a;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    color: #2c3e50;
    font-size: 1.5rem;
    transition: color 0.3s;
    
    &:hover {
      color: #8bc34a;
    }
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.accent};
    margin: 1rem 0;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const CtaSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5rem 2rem;
  text-align: center;
`;

const ValuesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #2c3e50;
    margin: 1rem 0;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
      <HeroContent>
        <HeroTitle>Find Your Inner Peace Through Yoga</HeroTitle>
        <HeroSubtitle>
          Join our community and transform your body and mind with our expert-led yoga classes
          designed for all skill levels in a peaceful and welcoming environment.
        </HeroSubtitle>
        <ButtonGroup>
          <Button to="/contact" style={{ backgroundColor: '${({ theme }) => theme.colors.accent}', borderColor: '${({ theme }) => theme.colors.accent}' }}>Book Your Free Demo</Button>
          <SecondaryButton to="/about">Learn More</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      </HeroSection>

      <InstructorSection>
        <SectionTitle>Meet Our Lead Instructor</SectionTitle>
        <InstructorContainer>
          <InstructorImage>
            <img src={InstructorImageSrc} alt="Mohit Kumar - Yoga Instructor" />
          </InstructorImage>
          <InstructorContent>
            <h3>Mohit Kumar</h3>
            <span className="title">Certified Yoga Therapist & Wellness Coach</span>
            <p>
              Mohit Kumar is a distinguished yoga instructor with over 18 years of global experience, including 8 years in India and 10 years in China.
              He holds a M.A. in Yoga and is an expert in Asanas, Pranayama, Mudras, and meditation.
            </p>
            <p>
              His teaching is rooted in ancient wisdom, drawing from the Patanjali Yoga Sutras and the Bhagavad Gita to train the physical, astral, and causal bodies. 
              Mohit's deep knowledge and diverse expertise make him an exceptional guide for any yoga practitioner.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </SocialLinks>
          </InstructorContent>
        </InstructorContainer>
      </InstructorSection>

      <ValuesSection>
        <SectionTitle>Our Values</SectionTitle>
        <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem', color: '#555'}}>
          At All The Classes, we are guided by these core principles:
        </p>
        <ValuesGrid>
          <ValueCard>
            <div style={{fontSize: '2.5rem'}}>🧘‍♂️</div>
            <h3>Mindfulness</h3>
            <p>Cultivating present-moment awareness in all aspects of practice and daily life.</p>
          </ValueCard>
          
          <ValueCard>
            <div style={{fontSize: '2.5rem'}}>❤️</div>
            <h3>Compassion</h3>
            <p>Creating a supportive and non-judgmental space for all students.</p>
          </ValueCard>
          
          <ValueCard>
            <div style={{fontSize: '2.5rem'}}>🌱</div>
            <h3>Growth</h3>
            <p>Encouraging continuous learning and personal development.</p>
          </ValueCard>
          
          <ValueCard>
            <div style={{fontSize: '2.5rem'}}>🌍</div>
            <h3>Community</h3>
            <p>Building meaningful connections among our yoga practitioners.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <GallerySection />
          
      <FeaturesSection>
        <SectionTitle>Why Choose Us</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <IconWrapper>🧘‍♀️</IconWrapper>
            <h3>Expert Instructors</h3>
            <p>Learn from certified yoga instructors with years of experience in various yoga styles.</p>
          </FeatureCard>
          
          <FeatureCard>
            <IconWrapper>🌿</IconWrapper>
            <h3>Holistic Approach</h3>
            <p>We focus on mind, body, and spirit connection for complete wellbeing.</p>
          </FeatureCard>
          
          <FeatureCard>
            <IconWrapper>🌟</IconWrapper>
            <h3>Flexible Classes</h3>
            <p>Choose from various class timings that fit your schedule.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <CtaSection>
        <CtaContent>
          <h2>Start Your Yoga Journey Today</h2>
          <p>Join our community and experience the transformative power of yoga. Whether you're a beginner or an experienced practitioner, we have the perfect class for you.</p>
          <Button to="/contact">Get Started</Button>
        </CtaContent>
      </CtaSection>
    </>
  );
};

export default Home;
