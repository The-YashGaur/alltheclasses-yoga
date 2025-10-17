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
  grid-auto-rows: 250px;
  grid-gap: 20px;
  grid-auto-flow: dense;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 200px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
  }
`;

const GalleryItem = styled.div<{ span?: number }>`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  grid-row: span ${props => props.span || 1};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  
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
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
    object-position: center;
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

  const getImagePath = (imageName: string) => {
  // For Vercel deployment, use absolute URL
  if (process.env.NODE_ENV === 'production') {
    return `/gallery/${imageName}`;
  }
  // For development
  return `${process.env.PUBLIC_URL || ''}/gallery/${imageName}`;
};

  const galleryItems = [
    { id: 1, src: getImagePath("photo1.jpg"), alt: "Yoga class in session", span: 2 },
    { id: 2, src: getImagePath("photo2.jpg"), alt: "Group meditation", span: 1 },
    { id: 3, src: getImagePath("photo3.jpg"), alt: "Advanced yoga pose", span: 1 },
    { id: 4, src: getImagePath("photo4.jpg"), alt: "Sunset yoga session", span: 2 },
    { id: 5, src: getImagePath("photo5.jpg"), alt: "Yoga instructor guiding students", span: 1 },
    { id: 6, src: getImagePath("photo6.jpg"), alt: "Group yoga outdoors", span: 1 },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  console.error('Failed to load image:', target.src); // This will help debug
  target.src = process.env.NODE_ENV === 'production' 
    ? '/images/placeholder.jpg' 
    : `${process.env.PUBLIC_URL || ''}/images/placeholder.jpg`;
  target.alt = 'Image not available';
};

  return (
    <GallerySection>
      <SectionTitle>Our Gallery</SectionTitle>
      <GalleryGrid>
        {galleryItems.map((item) => (
          <GalleryItem 
            key={item.id} 
            className={item.span === 2 ? 'span-2' : ''}
          >
            <img 
              src={item.src} 
              alt={item.alt}
              loading="lazy"
              onError={handleImageError}
            />
          </GalleryItem>
        ))}
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