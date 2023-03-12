import React from 'react';
import classes from "./PageTitle.module.scss";

type PropsType = {
    backTitle: string
    frontTitle: string
}

export const PageTitle:React.FC<PropsType> = ({backTitle, frontTitle}) => {
    return (
        <div className={classes.titleContainer}>
            <h2>{backTitle}</h2>
            <p>
                {frontTitle}
            </p>
        </div>
    );
};