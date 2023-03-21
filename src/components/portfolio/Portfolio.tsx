import React from 'react';
import {Element} from 'react-scroll';
import classes from './Portfolio.module.scss'
import {PageTitle} from '../pageTitle/PageTitle'
import {Project} from './project/Project';
import todoImg from '../../assets/img/todo-list.png'
import socialNetworkImg from '../../assets/img/social-network.png'
import counterImg from '../../assets/img/counter.png'

export type ProjectType = {
    id: number
    title: string
    imgURL: string
    description: string
    technologies: string
    git: string
    page: string
}

const projects: ProjectType[] = [
    {
        id: 1,
        title: 'Todo List',
        imgURL: todoImg,
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possimiriure.',
        technologies: 'React, HTML, CSS, Axios, Redux, Storybook',
        git: 'https://github.com/TrueMishka',
        page: 'https://truemishka.github.io/hws'
    },
    {
        id: 2,
        title: 'Social Network',
        imgURL: socialNetworkImg,
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possimiriure.',
        technologies: 'React, HTML, CSS, Axios, Redux, Redirect, Redux',
        git: 'https://github.com/TrueMishka',
        page: 'https://truemishka.github.io/hws'
    },
    {
        id: 3,
        title: 'Counter',
        imgURL: counterImg,
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possimiriure.',
        technologies: 'React, HTML, CSS, Redux',
        git: 'https://github.com/TrueMishka',
        page: 'https://truemishka.github.io/hws'
    }
]


export const Portfolio = () => {
    return (
        <Element name={'Portfolio'}>
            <section className={classes.wrapper}>
                <div className={classes.container}>
                    <PageTitle backTitle={'PORTFOLIO'} frontTitle={'My projects'}/>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            {projects.map((proj) => {
                                return <Project key={proj.id} project={proj}/>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};