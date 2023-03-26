import React from 'react';
import classes from "./Main.module.scss";
import {Element, Link} from "react-scroll";
import {MdKeyboardArrowDown} from 'react-icons/md'

type PropsType = {
    theme: string
}

export const Main:React.FC<PropsType> = ({theme}) => {
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
                <div className={classes.bottom}>
                    <Link activeClass={classes.active} to={'AboutMe'} spy={true} smooth={true}>
                        <MdKeyboardArrowDown className={classes.bottomAnimate} size={50}/>
                    </Link>
                </div>
            </section>
        </Element>
    );
};