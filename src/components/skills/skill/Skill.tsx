import React from 'react';
import classes from "./Skill.module.css";

type PropsType = {
    title: string
    description: string
    children?: JSX.Element
}

export const Skill:React.FC<PropsType> = ({title, description, children}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.iconContainer}>
                <div className={classes.icon}>
                    {children}
                </div>
            </div>
            <div className={classes.information}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};