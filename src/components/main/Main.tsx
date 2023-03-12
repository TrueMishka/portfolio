import React from 'react';
import classes from "./Main.module.scss";
import {Element} from "react-scroll";

export const Main = () => {
    return (
        <Element name={'Home'}>
            <section className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <p className={classes.textTop}>Welcome</p>
                        <h2 className={classes.textMiddle}>I'm Front-End Developer</h2>
                        <p className={classes.textBottom}>from Mordor</p>
                        <a className={classes.buttonLink} href={'#'}>Hire me</a>
                    </div>
                </div>
            </section>
        </Element>
    );
};