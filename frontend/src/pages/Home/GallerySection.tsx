import React from 'react';
import styled from 'styled-components';

// Add type definitions for require.context
interface RequireContext {
  keys(): string[];
  (id: string): string;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

const GalleryContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #8bc34a;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
`;

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  // Using require.context to ensure webpack includes these images in the build
  const importAll = (r: RequireContext): string[] => {
    return r.keys().map((key: string) => r(key) as string);
  };
  
  const imageContext = (require as any).context('../../../public/gallery', false, /\.(jpg|jpeg|png)$/);
  const imagePaths = importAll(imageContext);

  // Fallback images in case the dynamic import fails
  const fallbackImages: GalleryImage[] = [
    { id: 1, src: '/gallery/photo1.jpg', alt: 'Yoga class' },
    { id: 2, src: '/gallery/photo2.jpg', alt: 'Meditation' },
    { id: 3, src: '/gallery/photo3.jpg', alt: 'Yoga pose' },
    { id: 4, src: '/gallery/photo4.jpg', alt: 'Sunset yoga' },
    { id: 5, src: '/gallery/photo5.jpg', alt: 'Yoga instructor' },
    { id: 6, src: '/gallery/photo6.jpg', alt: 'Group yoga' },
  ];

  const images: GalleryImage[] = imagePaths.length > 0 
    ? imagePaths.map((path: string, index: number) => ({
        id: index + 1,
        src: path,
        alt: `Yoga image ${index + 1}`
      }))
    : fallbackImages;

  return (
    <GalleryContainer>
      <GalleryTitle>Our Gallery</GalleryTitle>
      <GalleryGrid>
        {images.map((image: GalleryImage) => (
          <ImageContainer key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                const target = e.target as HTMLImageElement;
                console.error('Failed to load image:', image.src);
                target.src = '/images/placeholder.jpg';
              }}
            />
          </ImageContainer>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;