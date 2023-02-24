import React from 'react';
import classes from "./Skill.module.css";

type PropsType = {
    title: string
    description: string
}

export const Skill:React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <div className={classes.information}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};