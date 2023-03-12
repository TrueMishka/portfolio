import React from 'react';
import classes from "./Sidebar.module.scss";
import {Link} from "react-scroll";

export const Sidebar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.photoContainer}>
                    <img className={classes.photo} src={'https://pixy.org/src/95/thumbs350/954766.jpg'}/>
                    <h1 className={classes.photoText}>Mishka</h1>
                </div>
                <div className={classes.navContainer}>
                    <ul>
                        <li><Link activeClass={classes.active} to={'Home'} spy={true} smooth={true}>Home</Link></li>
                        <li><Link activeClass={classes.active} to={'AboutMe'} spy={true} smooth={true}>About Me</Link></li>
                        <li><Link activeClass={classes.active} to={'Skills'} spy={true} smooth={true}>What I Know</Link></li>
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