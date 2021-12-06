
import React, { useState, useEffect } from 'react';
import ProjectPreview from './ProjectPreview';
import { useRouter } from 'next/router'

import { useTranslations } from 'next-intl'
import { getIcon } from "../Resources"

import { parseISO } from 'date-fns'
import ProjectButtons from './ProjectButtons';

export default function ProjectsShowcase({ projects }) {

    const sharedTranslator = useTranslations('shared');
    const [selectedProject, setSelectedProject] = useState(null);

    const Router = useRouter()

    //workaround to avoid language switch inconsistency
    useEffect(() => {
        setSelectedProject(null)
        return
    },[Router.locale] )

    const projectsContainerBaseStyle = 'ProjectContainer  flex flex-col lg:flex-row min-h-[100%]  py-4 gap-0 lg:gap-3  justify-center min-w-[100%] ';
    const projectsContainerStyleWidth = selectedProject ? ' lg:min-w-[70%]' : ' lg:min-w-[100%]';
    const projectsContainerStyle = projectsContainerBaseStyle + projectsContainerStyleWidth;

    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    function clickOnProject(project) {
        if (project === selectedProject)
            setSelectedProject(null)
        else setSelectedProject(project)
    }
    return (

        <>

            <div className=' lg:h-[100vh] w-[100%] bg-white  duration-500 ease-in-out  '>
                <p id="portfolio" className='bg-white  text-3xl lg:text-6xl text-black text-center  pt-12 pb-2 '>{sharedTranslator('sections.projectShowcase').toUpperCase()}
                </p>
                <div className="ProjectShowcase lg:min-h-[90%] p-3 lg:p-6   flex   ">
                    <div className={projectsContainerStyle}  >
                        {projects.map(project => <ProjectPreview key={project.title} onPress={() => clickOnProject(project)} data={project} selected={selectedProject === project ? true : false} />)}
                    </div>
                    {selectedProject && <div className="transition-all duration-500 ease-in-out ProjectDetailsPreview p-4 text-left   hidden  lg:flex lg:flex-col lg:justify-center lg:max-w-[30%] lg:min-w-[30%]   ">

                        {
                        //TODO since goes from hidden to visibile, animation won't be seen
                        }
                        <p className="transition-all duration-500 ease-in-out text-black text-4xl  break-words">{selectedProject.title}</p>
                        <p className="transition-all duration-500 ease-in-out text-black text-3xl font-extralight">{sharedTranslator('sections.'+selectedProject.category, {items: 1 })},{parseISO(selectedProject.date).getFullYear()}</p>
                        <p className="transition-all duration-500 ease-in-out text-black text-xl font-light"> {selectedProject.previewText} </p>
                        <div className='transition-all duration-500 ease-in-out previewIcons flex justify-start gap-2 pt-6 min-h-[2rem] text-black'>
                            {selectedProject.stack.map(item => getIcon(item, 45))}

                        </div>
                        <div className='transition-all duration-500 ease-in-out previewButton flex justify-start flex-wrap gap-2 pt-8'>
                            <ProjectButtons project={selectedProject} buttonStyle={'blackBorderButton'} details={true} />
                        </div>


                    </div>}
                </div>
            </div>
        </>
    )
}
