import React from 'react';
import classes from './Footer.module.scss'

type PropsType = {
    theme: string
}

export const Footer:React.FC<PropsType> = ({theme}) => {
    return (
        <div className={classes.wrapper}>
            <h3>Copyright © 2023 <span className={classes.styleText}>Mishka</span></h3>
        </div>
    );
};