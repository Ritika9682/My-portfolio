import React from "react";
import './projects.css';
import Header from "../Header/Header";
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';
import FooterLink from '../FooterLink/FooterLink';

const Project = () => {
    return <div className='section-container'>
        <Header
            heading='My Projects.'
            details="Here are a few projects I've worked on !"
        />

        <div className='project-cards-container'>
            {projectsData.map(
                ({
                    projectName,
                    projectDescription,
                    imageUrl,
                    projectUrl,
                }) => {
                    return (
                        <ProjectCard
                            projectName={projectName}
                            projectDescription={projectDescription}
                            projectUrl={projectUrl}
                            imageUrl={imageUrl}
                        />
                    );
                }
            )}
        </div>

        <FooterLink phrase='Get in ' link='touch.' toAdress='/contact' />
    </div>
}

export default Project;