import React, {useState} from 'react';
import './App.css';
import {Main} from "./components/main/Main";
import {Sidebar} from "./components/sidebar/Sidebar";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/Footer/Footer";

// ref
// https://themeforest.net/item/simone-personal-portfolio-react-template/42757507
// https://wordpressriverthemes.com/HTML/drake/index.html
// https://preview.themeforest.net/item/enthor-creative-portfolio-wordpress-theme/full_screen_preview/42789290?_ga=2.175949730.1282944782.1676900456-890742809.1671299472

function App() {
    const [theme, setTheme] = useState('dark')

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'white' : 'dark')
    }

    const body = document.querySelector('body');
    if (body) {
        if (theme === 'dark') {
            body.style.setProperty('--text-color', '#fff')
            body.style.setProperty('--text-second-color', '#282d31')
            body.style.setProperty('--text-third-color', '#3b4046')
            body.style.setProperty('--par-text-color', '#888c8f')
            body.style.setProperty('--input-color', '#232a32')
            body.style.setProperty('--primary-color', '#20c997')
            body.style.setProperty('--bg-color', '#212429')
            body.style.setProperty('--bg-second-color', '#353a40')
            body.style.setProperty('--bg-dark-color', '#111419')
        } else {
            body.style.setProperty('--text-color', 'black')
            body.style.setProperty('--text-second-color', '#eff0f2')
            body.style.setProperty('--text-third-color', '#f1f3f2')
            body.style.setProperty('--par-text-color', '#888c8f')
            body.style.setProperty('--input-color', '#fff')
            body.style.setProperty('--primary-color', '#20c997')
            body.style.setProperty('--bg-color', '#ffffff')
            body.style.setProperty('--bg-second-color', '#f8f9fb')
            body.style.setProperty('--bg-dark-color', '#111419')
        }
    }

    return (
        <div className="App">
            <Sidebar theme={theme} changeTheme={changeTheme}/>
            <Main theme={theme}/>
            <About theme={theme}/>
            <Skills theme={theme}/>
            <Portfolio theme={theme}/>
            <Contact theme={theme}/>
            <Footer theme={theme}/>
        </div>
    );
}

export default App;
