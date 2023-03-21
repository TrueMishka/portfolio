import React from 'react';
import classes from "./PageTitle.module.scss";

type PropsType = {
    backTitle: string
    frontTitle: string
    secondColor?: boolean
}

export const PageTitle:React.FC<PropsType> = ({backTitle, frontTitle, secondColor= false}) => {

    const colorTitle = secondColor
        ? '#3b4046'
        : '#282d31'

    const styleTitleColor = {
       color: colorTitle
    }

    return (
        <div className={classes.titleContainer}>
            <h2 style={styleTitleColor}>{backTitle}</h2>
            <p>
                {frontTitle}
            </p>
        </div>
    );
};