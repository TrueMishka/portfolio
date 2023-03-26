import React, {useState} from 'react';
import classes from "./Sidebar.module.scss";
import {Link} from "react-scroll";
import avatarImg from './../../assets/img/avatar.png'
import {RxHamburgerMenu, RxCross2} from 'react-icons/rx'
import {TbBrandGithub, TbBrandTelegram} from 'react-icons/tb'
import {CiLinkedin} from 'react-icons/ci'
import {MdOutlineLightMode, MdOutlineModeNight} from 'react-icons/md'

type PropsType = {
    theme: string
    changeTheme: () => void
}

export const Sidebar:React.FC<PropsType> = ({changeTheme, theme}) => {
    const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false)

    const hamburgerMenuHandler = () => {
        setDisplayHamburgerMenu(!displayHamburgerMenu)
    }

    const closeHamburgerMenu = () => {
        setDisplayHamburgerMenu(false)
    }

    const body = document.querySelector('body');
    if (body) {
        body.style.overflow = displayHamburgerMenu ? 'hidden' : 'unset'
    }

    const navMenu = <ul>
        <li><Link onClick={closeHamburgerMenu} activeClass={classes.active} to={'Home'} spy={true}
                  smooth={true}>Home</Link></li>
        <li><Link onClick={closeHamburgerMenu} activeClass={classes.active} to={'AboutMe'} spy={true}
                  smooth={true}>About Me</Link></li>
        <li><Link onClick={closeHamburgerMenu} activeClass={classes.active} to={'Skills'} spy={true}
                  smooth={true}>What I Know</Link></li>
        <li><Link onClick={closeHamburgerMenu} activeClass={classes.active} to={'Portfolio'} spy={true}
                  smooth={true}>Portfolio</Link></li>
        <li><Link onClick={closeHamburgerMenu} activeClass={classes.active} to={'Contact'} spy={true}
                  smooth={true}>Contact</Link></li>
    </ul>

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.photoContainer}>
                    <img className={classes.photo} src={avatarImg}/>
                    <h1 className={classes.photoText}>Mishka</h1>
                </div>
                <div className={classes.navContainer}>
                    {navMenu}
                </div>
                <div className={classes.themeChanger}>
                    {theme === 'dark'
                        ? <MdOutlineLightMode onClick={changeTheme} size={30}/>
                        : <MdOutlineModeNight onClick={changeTheme} size={30}/>
                    }
                </div>
                <div className={classes.footerContainer}>
                    <TbBrandGithub className={classes.footerIcon} size={25}/>
                    <TbBrandTelegram className={classes.footerIcon} size={25}/>
                    <CiLinkedin className={classes.footerIcon} size={25}/>
                </div>
                <div className={classes.btmHamburger}>
                    {displayHamburgerMenu
                        ? <RxCross2 size={30} onClick={hamburgerMenuHandler}/>
                        : <RxHamburgerMenu size={30} onClick={hamburgerMenuHandler}/>}
                    {displayHamburgerMenu && <div className={classes.hamburgerMenu}>
                        {navMenu}
                    </div>}
                </div>
            </div>
        </div>
    );
};