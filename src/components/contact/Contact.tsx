import React from 'react';
import classes from './Contact.module.scss'
import {PageTitle} from "../pageTitle/PageTitle";
import {Element} from "react-scroll";

export const Contact = () => {
    return (
        <Element name={'Contact'}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <PageTitle backTitle={'CONTACT'} frontTitle={'Get in Touch'} secondColor={true}/>
                    <form className={classes.form}>
                        <div className={classes.formTop}>
                            <input placeholder={'Email'}/>
                            <input placeholder={'Name'}/>
                        </div>
                        <textarea placeholder={'Some text'}/>
                        <div className={classes.formBottom}>
                            <a className={classes.btn} href={''}>Send Message</a>
                        </div>
                    </form>
                </div>
            </div>
        </Element>
    );
};