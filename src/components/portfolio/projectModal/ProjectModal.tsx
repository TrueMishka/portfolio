import React, {Fragment} from 'react';
import classes from './ProjectModal.module.scss';
import {ProjectType} from '../Portfolio';
import {RxCross2} from 'react-icons/rx';

type PropsType = {
    project: ProjectType
    onCloseCallback: () => void
    styleImg: React.CSSProperties
}

export const ProjectModal:React.FC<PropsType> = ({project, onCloseCallback, styleImg}) => {
    return (
        <Fragment>
            <div className={classes.modalProjectWrapper}>
                <div className={classes.modalProjectContainer}>
                    <div className={classes.modalProject}>
                        <div className={classes.modalBody}>
                            <div className={classes.bodyTop}>
                                <h2 className={classes.modalTitle}>{project.title}</h2>
                                <RxCross2 className={classes.btn} onClick={onCloseCallback}/>
                                {/*<button className={classes.btn} onClick={onCloseCallback}><RxCross2 size={20}/></button>*/}
                            </div>
                            <div className={classes.modalInfo}>
                                <div style={styleImg} className={classes.modalImg}></div>
                                <div className={classes.modalDescription}>
                                    <ul>
                                        <li><span>Project info: </span>{project.description}</li>
                                        <li><span>Tech: </span>{project.technologies}</li>
                                        <li><span>Git: </span><a href={project.git}>{project.git}</a></li>
                                        <li><span>Page: </span><a href={project.page}>{project.page}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};