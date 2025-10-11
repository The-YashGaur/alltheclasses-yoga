import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 2rem;
`;

const AboutHeader = styled.header`
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
    margin: 0 auto;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
  
  h2 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const InstructorSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
  }
`;

const InstructorImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const InstructorInfo = styled.div`
  flex: 1;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.accent};
    margin: 1rem 0;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <h1>About All The Classes</h1>
        <p>Discover the journey of self-discovery and holistic wellness through the ancient practice of yoga.</p>
      </AboutHeader>
      
      <Section>
        <h2>Our Story</h2>
        <p>
          Founded in 2023, All The Classes was born from a deep passion for sharing the transformative power of yoga. 
          What started as a small community class has grown into a sanctuary for those seeking balance, strength, 
          and inner peace in their daily lives.
        </p>
        <p>
          Our mission is to make yoga accessible to everyone, regardless of age, fitness level, or background. 
          We believe that yoga is not just a physical practice but a way of life that nurtures the mind, body, 
          and spirit.
        </p>
      </Section>
      
      <InstructorSection>
        <InstructorImage>
          <img 
            src="/mohit kumar yoga.jpg" 
            alt="Mohit Kumar - Yoga Instructor" 
            onError={(e) => {
              // Fallback in case the image is not found
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
              (e.target as HTMLImageElement).alt = 'Yoga Instructor';
            }}
          />
        </InstructorImage>
        <InstructorInfo>
          <h2>Meet Our Lead Instructor</h2>
          <h3>Mohit Kumar</h3>
          <p>
            Mohit Kumar is a distinguished yoga instructor with over 18 years of global experience, including 8 years in India and 10 years in China. 
            He holds a M.A. in Yoga and is an expert in Asanas, Pranayama, Mudras, and meditation.
          </p>
          <p>
            His teaching is rooted in ancient wisdom, drawing from the Patanjali Yoga Sutras and the Bhagavad Gita to train the physical, astral, and causal bodies.
             Mohit's deep knowledge and diverse expertise make him an exceptional guide for any yoga practitioner.
          </p>
        </InstructorInfo>
      </InstructorSection>
      
      <Section>
        <h2>Our Values</h2>
        <p>At All The Classes, we are guided by these core principles:</p>
        
        <ValuesGrid>
          <ValueCard>
            <div>🧘‍♂️</div>
            <h3>Mindfulness</h3>
            <p>Cultivating present-moment awareness in all aspects of practice and daily life.</p>
          </ValueCard>
          
          <ValueCard>
            <div>❤️</div>
            <h3>Compassion</h3>
            <p>Creating a supportive and non-judgmental space for all students.</p>
          </ValueCard>
          
          <ValueCard>
            <div>🌱</div>
            <h3>Growth</h3>
            <p>Encouraging continuous learning and personal development.</p>
          </ValueCard>
          
          <ValueCard>
            <div>🌍</div>
            <h3>Community</h3>
            <p>Building meaningful connections among our yoga practitioners.</p>
          </ValueCard>
        </ValuesGrid>
      </Section>
      
      <Section>
        <h2>Our Approach</h2>
        <p>
          At All The Classes, we believe in a holistic approach to yoga that goes beyond physical postures. 
          Our classes incorporate breathwork (pranayama), meditation, and philosophy to provide a 
          comprehensive yoga experience.
        </p>
        <p>
          Whether you're looking to increase flexibility, reduce stress, or deepen your spiritual practice, 
          our diverse range of classes and experienced instructors are here to guide you on your journey.
        </p>
      </Section>
    </AboutContainer>
  );
};

export default About;
