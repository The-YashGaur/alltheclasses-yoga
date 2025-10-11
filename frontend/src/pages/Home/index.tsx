import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(rgba(227, 242, 253, 0.9), rgba(232, 245, 233, 0.9)), 
              url('/images/hero-bg.jpg') center/cover no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  margin-top: 70px; /* To account for fixed navbar */
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin: 0 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
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
          <h1>Welcome to YogaMantra</h1>
          <p>Discover the path to a healthier, happier you through the ancient practice of yoga.</p>
          <div>
            <Button to="/classes">View Classes</Button>
            <SecondaryButton to="/contact">Join Now</SecondaryButton>
          </div>
        </HeroContent>
      </HeroSection>
      
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
