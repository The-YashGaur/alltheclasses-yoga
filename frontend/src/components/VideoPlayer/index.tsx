import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
  border: none;
  transition: opacity 0.3s ease;
  
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent #333;
    margin-left: 5px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error);
        });
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!videoRef.current.paused);
    }
  };

  return (
    <VideoContainer 
      className={className}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        title={title}
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          cursor: 'pointer',
          opacity: isPlaying ? 1 : 0.8
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
      />
      {!isPlaying && (
        <PlayButton 
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label="Play video"
        />
      )}
    </VideoContainer>
  );
};

export default VideoPlayer;