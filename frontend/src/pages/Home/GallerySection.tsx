import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GallerySection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 20px;
  grid-auto-flow: dense;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 150px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 120px;
  }
`;

const GalleryItem = styled.div<{ span?: number }>`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  grid-row: span ${props => props.span || 1};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    
    &::after {
      opacity: 0;
    }
    
    img {
      transform: scale(1.05);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
    transition: opacity 0.3s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &.span-2 {
    grid-row: span 2;
  }
`;

const ViewMoreButton = styled(Link)`
  display: block;
  width: 200px;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  background-color: #8bc34a;
  color: white;
  text-align: center;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7cb342;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: white;
  }
`;

const Gallery: React.FC = () => {
  const handleViewMoreClick = () => {
    window.scrollTo(0, 0);
  };
   return (
    <GallerySection>
      <SectionTitle>Our Gallery</SectionTitle>
      <GalleryGrid>
        <GalleryItem className="span-2">
          <img src="/gallery/photo1.jpg" alt="Yoga pose 1" onError={(e) => { e.currentTarget.src = '/gallery/placeholder.jpg'; }} />
        </GalleryItem>
        <GalleryItem>
          <img src="/gallery/photo2.jpg" alt="Yoga pose 2" onError={(e) => { e.currentTarget.src = '/gallery/placeholder.jpg'; }} />
        </GalleryItem>
        <GalleryItem>
          <img src="/gallery/photo3.jpg" alt="Yoga pose 3" onError={(e) => { e.currentTarget.src = '/gallery/placeholder.jpg'; }} />
        </GalleryItem>
        <GalleryItem className="span-2">
          <img src="/gallery/photo4.jpg" alt="Yoga pose 4" onError={(e) => { e.currentTarget.src = '/gallery/placeholder.jpg'; }} />
        </GalleryItem>
        <GalleryItem>
          <img src="/gallery/photo5.jpg" alt="Yoga pose 5" onError={(e) => { e.currentTarget.src = '/gallery/placeholder.jpg'; }} />
        </GalleryItem>
        <GalleryItem>
          <img src="/gallery/photo6.jpg" alt="Yoga pose 6" onError={(e) => { e.currentTarget.src = '/gallery/placeholder.jpg'; }} />
        </GalleryItem>
      </GalleryGrid>
      <ViewMoreButton 
        to="/gallery" 
        onClick={handleViewMoreClick}
      >
        View More
      </ViewMoreButton>
    </GallerySection>
  );
};

export default Gallery;
