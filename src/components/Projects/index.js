import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I'm currently working on a full stack project. Here you can get access to the demo version.
        </Desc>
        <CardContainer>
          { projects.map((project) => (

            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          
          ))}
  
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects