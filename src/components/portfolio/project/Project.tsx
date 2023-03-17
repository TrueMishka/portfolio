import React, {useState} from 'react';
import classes from './Project.module.scss';
import {ProjectType} from "../Portfolio";
import {ProjectModal} from "../projectModal/ProjectModal";

type PropsType = {
    project: ProjectType
}

export const Project: React.FC<PropsType> = ({project}) => {

    const [openProject, setOpenProject] = useState(false)

    const styleImg = {
        backgroundImage: `url(${project.imgURL})`
    }

    const onOpenProjectHandler = () => {
        setOpenProject(true)

        const body = document.querySelector('body');
        if (body) body.style.overflow = 'hidden'
    }

    const onCloseProjectHandler = () => {
        setOpenProject(false)

        const body = document.querySelector('body');
        if (body) body.style.overflow = 'auto'
    }

    return (
        <>
            {openProject
                ? <ProjectModal
                    project={project}
                    onCloseCallback={onCloseProjectHandler}
                    styleImg={styleImg}
                />
                : <div className={classes.project}>
                    <div style={styleImg} className={classes.image} onClick={onOpenProjectHandler}>
                        <h3 className={classes.title}>{project.title}</h3>
                    </div>
                </div>
            }
        </>
    );
};