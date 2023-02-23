import React from 'react';
import classes from "./About.module.css";
import commonStyle from '../../common/style/CommonStyle.module.css'

export const About = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <h2>ABOUT ME</h2>
                    <p>
                        Know Me More
                        <span></span>
                    </p>

                </div>
                <div className={classes.content}>
                    <div className={classes.information}>
                        <h2>I'm <span className={commonStyle.textDecoration}>Misha Pashuto</span>, a front-end developer
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
                            <li>Email: <a className={commonStyle.textDecoration}
                                          href={'mailto:pashutoM@gmail.com'}>pashutoM@gmail.com</a></li>
                            <li>Age: 28</li>
                            <li>From: Mordor</li>
                        </ul>
                        <div>
                            <a className={commonStyle.buttonLink} href={''}>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};