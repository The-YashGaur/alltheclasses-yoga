import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ClassesContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 2rem;
`;

const PageHeader = styled.header`
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

const ClassFilters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme, active }) => 
    active ? theme.colors.accent : 'transparent'};
  color: ${({ theme, active }) => 
    active ? 'white' : theme.colors.accent};
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme, active }) => 
      active ? theme.colors.accent : 'rgba(76, 175, 80, 0.1)'};
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ClassCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ClassImage = styled.div`
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${ClassCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ClassInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }
  
  .instructor {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }
  
  .description {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }
  
  .time, .level {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
  }
`;

const EnrollButton = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  text-align: center;
  padding: 0.8rem;
  border-radius: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3d8b40;
    color: white;
  }
`;

const yogaClasses = [
  {
    id: 1,
    title: 'Hatha Yoga',
    instructor: 'Priya Sharma',
    description: 'A traditional form of yoga that focuses on physical postures and breathing techniques to achieve balance and relaxation.',
    duration: '60 mins',
    level: 'All Levels',
    category: 'all',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Vinyasa Flow',
    instructor: 'Rahul Verma',
    description: 'A dynamic style of yoga where movement is synchronized with breath in fluid sequences.',
    duration: '75 mins',
    level: 'Intermediate',
    category: 'flow',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Yin Yoga',
    instructor: 'Ananya Patel',
    description: 'A slow-paced style of yoga with postures that are held for longer periods to target deep connective tissues.',
    duration: '60 mins',
    level: 'All Levels',
    category: 'restorative',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Power Yoga',
    instructor: 'Vikram Singh',
    description: 'A vigorous, fitness-based approach to vinyasa-style yoga that builds strength and flexibility.',
    duration: '75 mins',
    level: 'Advanced',
    category: 'power',
    image: 'https://images.unsplash.com/photo-1575052814081-fd21f3d9efaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'Prenatal Yoga',
    instructor: 'Meera Desai',
    description: 'Gentle yoga designed specifically for expectant mothers to support pregnancy and prepare for childbirth.',
    duration: '60 mins',
    level: 'All Levels',
    category: 'prenatal',
    image: 'https://images.unsplash.com/photo-1534258932625-fb257f945588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'Meditation & Mindfulness',
    instructor: 'Arjun Kapoor',
    description: 'Learn various meditation techniques to cultivate mindfulness and reduce stress in daily life.',
    duration: '45 mins',
    level: 'All Levels',
    category: 'meditation',
    image: 'https://images.unsplash.com/photo-1532009877282-334027079e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

const Classes: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredClasses = activeFilter === 'all' 
    ? yogaClasses 
    : yogaClasses.filter(yogaClass => yogaClass.category === activeFilter);

  return (
    <ClassesContainer>
      <PageHeader>
        <h1>Our Yoga Classes</h1>
        <p>Explore our diverse range of yoga classes designed for all levels, from beginners to advanced practitioners.</p>
        
        <ClassFilters>
          <FilterButton 
            active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            All Classes
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'flow'}
            onClick={() => setActiveFilter('flow')}
          >
            Flow
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'power'}
            onClick={() => setActiveFilter('power')}
          >
            Power Yoga
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'restorative'}
            onClick={() => setActiveFilter('restorative')}
          >
            Restorative
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'prenatal'}
            onClick={() => setActiveFilter('prenatal')}
          >
            Prenatal
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'meditation'}
            onClick={() => setActiveFilter('meditation')}
          >
            Meditation
          </FilterButton>
        </ClassFilters>
      </PageHeader>
      
      <ClassesGrid>
        {filteredClasses.map((yogaClass) => (
          <ClassCard key={yogaClass.id}>
            <ClassImage>
              <img src={yogaClass.image} alt={yogaClass.title} />
            </ClassImage>
            <ClassInfo>
              <h3>{yogaClass.title}</h3>
              <span className="instructor">With {yogaClass.instructor}</span>
              <p className="description">{yogaClass.description}</p>
              <div className="meta">
                <span className="time">⏱️ {yogaClass.duration}</span>
                <span className="level">🧘‍♀️ {yogaClass.level}</span>
              </div>
              <EnrollButton to="/contact">Enroll Now</EnrollButton>
            </ClassInfo>
          </ClassCard>
        ))}
      </ClassesGrid>
    </ClassesContainer>
  );
};

export default Classes;
