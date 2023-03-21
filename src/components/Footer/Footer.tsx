import React from 'react';
import classes from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <h3>Copyright © 2023 <span className={classes.styleText}>Mishka.</span> All Rights Reserved.</h3>
        </div>
    );
};