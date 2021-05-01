import React from 'react';
import { ProjectsContainer, Title, CardsContainer } from './style';
import ProjectCard from './ProjectCard';
import { netflix, plant_manager, moveit, whatsapp } from './data';

const MyProjects = () => {
  return (
    <ProjectsContainer id="projects">
      <Title>Meus Projetos</Title>

      <CardsContainer>
        <ProjectCard 
          image={netflix.image} 
          title={netflix.title} 
          titleColor={netflix.titleColor}  
          about={netflix.about}
          link={netflix.link}
        />
        <ProjectCard 
          image={plant_manager.image} 
          title={plant_manager.title} 
          titleColor={plant_manager.titleColor}  
          about={plant_manager.about}
          link={plant_manager.link}
        />
      </CardsContainer>

      <CardsContainer>
      <ProjectCard 
          image={moveit.image} 
          title={moveit.title} 
          titleColor={moveit.titleColor}  
          about={moveit.about}
          link={moveit.link}
        />
        <ProjectCard 
          image={whatsapp.image} 
          title={whatsapp.title} 
          titleColor={whatsapp.titleColor}  
          about={whatsapp.about}
          link={whatsapp.link}
        />
      </CardsContainer>

    </ProjectsContainer>
  );
}

export default MyProjects;
