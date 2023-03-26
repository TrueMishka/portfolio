import React from 'react';
import classes from "./PageTitle.module.scss";

type PropsType = {
    backTitle: string
    frontTitle: string
    theme?: string
    secondColor?: boolean
}

export const PageTitle: React.FC<PropsType> = (
    {
        backTitle,
        frontTitle,
        secondColor = false,
        theme = 'dark'
    }) => {

    const colorTitle = theme === 'dark'
        ? secondColor
            ? '#3b4046'
            : '#282d31'
        : secondColor
            ? '#eff0f2'
            : '#f1f3f2'


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