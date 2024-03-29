import React from 'react';
import classes from "./Skills.module.scss";
import {PageTitle} from "../pageTitle/PageTitle";
import {Element} from "react-scroll";
import {Skill} from "./skill/Skill";
import {FaHtml5} from 'react-icons/fa'
import {TbNumber1} from 'react-icons/tb'
import { SiCss3, SiTypescript, SiReact, SiRedux } from 'react-icons/si'

type PropsType = {
    theme: string
}

export const Skills:React.FC<PropsType> = ({theme}) => {
    return (
        <Element name={'Skills'}>
            <section className={classes.wrapper}>
                <div className={classes.container}>
                    <PageTitle backTitle={'WHAT I KNOW'} frontTitle={'My skills'} theme={theme} secondColor={true}/>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <Skill
                                title={'HTML'}
                                description={'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.'}
                            >
                                <FaHtml5 size={50}/>
                            </Skill>
                            <Skill
                                title={'CSS'}
                                description={'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.'}
                            >
                                <SiCss3 size={45}/>
                            </Skill>
                            <Skill
                                title={'TS'}
                                description={'TypeScript is a strongly typed programming language that builds on JavaScript.'}
                            >
                                <SiTypescript size={45}/>
                            </Skill>
                            <Skill
                                title={'React'}
                                description={'A JavaScript library for building user interfaces.'}
                            >
                                <SiReact size={45}/>
                            </Skill>
                            <Skill
                                title={'Redux'}
                                description={'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'}
                            >
                                <SiRedux size={45}/>
                            </Skill>
                            <Skill
                                title={'1C'}
                                description={'uwu'}
                            >
                                <TbNumber1 size={45}/>
                            </Skill>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};