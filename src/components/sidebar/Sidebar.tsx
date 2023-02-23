import React from 'react';
import classes from "./Sidebar.module.css";

export const Sidebar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.photoContainer}>
                    <img className={classes.photo} src={'https://pixy.org/src/95/thumbs350/954766.jpg'}/>
                    <h1>Mishka</h1>
                </div>
                <div className={classes.navContainer}>
                    <ul>
                        <li className={classes.active}>Home</li>
                        <li>About me</li>
                        <li>What I Do</li>
                        <li>Resume</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={classes.footerContainer}>
                    Some icon (linkedIn Telegram etc.)
                </div>
            </div>
        </div>
    );
};