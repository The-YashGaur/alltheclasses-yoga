import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from '../../components/VideoPlayer';


// Gallery items with your media files
const galleryItems = [
  // Images
  { id: 1, type: 'image', src: '/gallery/photo1.jpg', title: 'Yoga Pose 1' },
  { id: 2, type: 'image', src: '/gallery/photo2.jpg', title: 'Yoga Pose 2' },
  { id: 3, type: 'image', src: '/gallery/photo3.jpg', title: 'Yoga Pose 3' },
  { id: 4, type: 'image', src: '/gallery/photo4.jpg', title: 'Yoga Pose 4' },
  { id: 5, type: 'image', src: '/gallery/photo5.jpg', title: 'Yoga Pose 5' },
  { id: 6, type: 'image', src: '/gallery/photo6.jpg', title: 'Yoga Pose 6' },
  { id: 7, type: 'image', src: '/gallery/photo7.jpg', title: 'Yoga Pose 7' },
  { id: 8, type: 'image', src: '/gallery/photo8.jpg', title: 'Yoga Pose 8' },
  { id: 9, type: 'image', src: '/gallery/photo9.jpg', title: 'Yoga Pose 9' },
  { id: 10, type: 'image', src: '/gallery/photo10.jpg', title: 'Yoga Pose 10' },
  { id: 11, type: 'image', src: '/gallery/photo11.jpg', title: 'Yoga Pose 11' },
  { id: 12, type: 'image', src: '/gallery/photo12.jpg', title: 'Yoga Pose 12' },
  { id: 13, type: 'image', src: '/gallery/photo13.jpg', title: 'Yoga Pose 13' },
  
  // Videos - Replace these with your actual video files
  { id: 14, type: 'video', src: '/gallery/Video1.mp4', title: 'Yoga Flow 1' },
  { id: 15, type: 'video', src: '/gallery/Video2.mp4', title: 'Yoga Flow 2' },
  { id: 16, type: 'video', src: '/gallery/Video3.mp4', title: 'Yoga Flow 3' },
  { id: 17, type: 'video', src: '/gallery/Video4.mp4', title: 'Yoga Flow 4' },
  { id: 18, type: 'video', src: '/gallery/Video5.mp4', title: 'Yoga Flow 5' },
  { id: 19, type: 'video', src: '/gallery/Video6.mp4', title: 'Yoga Flow 6' },
];

const StyledVideoPlayer = styled(VideoPlayer)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 2rem;
`;

const GalleryHeader = styled.header`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  aspect-ratio: 1;
  background: #000;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ItemOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  button {
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover, &.active {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }
  }
`;

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  // Define filteredItems before using it
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <GalleryContainer>
      <GalleryHeader>
        <h1>Our Gallery</h1>
        <p>Explore our collection of yoga moments, class highlights, and peaceful retreats.</p>
        
        <FilterButtons>
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'image' ? 'active' : ''}
            onClick={() => setFilter('image')}
          >
            Photos
          </button>
          <button 
            className={filter === 'video' ? 'active' : ''}
            onClick={() => setFilter('video')}
          >
            Videos
          </button>
        </FilterButtons>
      </GalleryHeader>

      <GalleryGrid>
        {filteredItems.map((item: { id: number; type: string; src: string; title: string }) => (
          <GalleryItem key={item.id}>
            {item.type === 'video' ? (
              <StyledVideoPlayer 
                src={item.src}
                title={item.title}
              />
            ) : (
              <img 
                src={item.src} 
                alt={item.title} 
                loading="lazy"
              />
            )}
            <ItemOverlay>
              <h3>{item.title}</h3>
            </ItemOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;