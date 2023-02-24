import React from 'react';
import classes from "./Skills.module.css";
import commonStyle from '../../common/style/CommonStyle.module.css'
import {PageTitle} from "../pageTitle/PageTitle";
import {Element} from "react-scroll";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <Element name={'Skills'}>
            <section className={classes.wrapper}>
                <div className={classes.container}>
                    <PageTitle backTitle={'WHAT I KNOW'} frontTitle={'My Skills'}/>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <Skill
                                title={'HTML'}
                                description={'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.'}
                            />
                            <Skill
                                title={'CSS'}
                                description={'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.'}
                            />
                            <Skill
                                title={'TS'}
                                description={'TypeScript is a strongly typed programming language that builds on JavaScript.'}
                            />
                            <Skill
                                title={'React'}
                                description={'A JavaScript library for building user interfaces.'}
                            />
                            <Skill
                                title={'Redux'}
                                description={'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'}
                            />
                            <Skill title={'1C'} description={'uwu'}/>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};