import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Gallery = () => {
  // Image data - update these paths to match your actual image locations
  const images = [
    { id: 1, src: '/gallery/photo1.jpg', alt: 'Yoga class' },
    { id: 2, src: '/gallery/photo2.jpg', alt: 'Meditation' },
    { id: 3, src: '/gallery/photo3.jpg', alt: 'Yoga pose' },
    { id: 4, src: '/gallery/photo4.jpg', alt: 'Sunset yoga' },
    { id: 5, src: '/gallery/photo5.jpg', alt: 'Yoga instructor' },
    { id: 6, src: '/gallery/photo6.jpg', alt: 'Group yoga' },
  ];

  return (
    <GalleryContainer>
      <h2>Our Gallery</h2>
      <GalleryGrid>
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder.jpg';
            }}
          />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;