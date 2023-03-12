import React from 'react';
import classes from "./About.module.scss";
import {Element} from "react-scroll";
import {PageTitle} from "../pageTitle/PageTitle";

export const About = () => {
    return (
        <Element name={'AboutMe'}>
            <section className={classes.wrapper}>
                <div className={classes.container}>
                    <PageTitle backTitle={'ABOUT ME'} frontTitle={'Know Me More'}/>
                    <div className={classes.content}>
                        <div className={classes.information}>
                            <h2>I'm <span>Misha Pashuto</span>, a front-end
                                developer
                            </h2>
                            <p>
                                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
                                iriure.
                                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
                                iriure.
                                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
                                iriure.
                                Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
                                iriure.
                            </p>
                        </div>
                        <div className={classes.shortInformation}>
                            <ul>
                                <li><span>Name:</span> Misha Pashuto</li>
                                <li>Email: <a href={'mailto:pashutoM@gmail.com'}>pashutoM@gmail.com</a></li>
                                <li>Tel: <a href={'tel:+375293218320'}/>+375 (29) 321-83-20</li>
                                <li>Age: 28</li>
                                <li>From: Mordor</li>
                            </ul>
                            <div>
                                <a className={classes.btn} href={''}>Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};