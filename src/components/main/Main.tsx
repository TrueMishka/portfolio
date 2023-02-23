import React from 'react';
import classes from "./Main.module.css";
import CommonStyle from '../../common/style/CommonStyle.module.css'

export const Main = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <p className={classes.textTop}>Welcome</p>
                    <h2 className={classes.textMiddle}>I'm Front-End Developer</h2>
                    <p className={classes.textBottom}>from Mordor</p>
                    <a className={CommonStyle.buttonLink} href={'#'}>Hire me</a>
                </div>
            </div>
        </div>
    );
};