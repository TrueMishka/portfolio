import React from 'react';
import './App.css';
import {Main} from "./components/main/Main";
import {Sidebar} from "./components/sidebar/Sidebar";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/portfolio/Portfolio";

// ref
// https://themeforest.net/item/simone-personal-portfolio-react-template/42757507
// https://wordpressriverthemes.com/HTML/drake/index.html
// https://preview.themeforest.net/item/enthor-creative-portfolio-wordpress-theme/full_screen_preview/42789290?_ga=2.175949730.1282944782.1676900456-890742809.1671299472

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Main/>
            <About/>
            <Skills/>
            <Portfolio/>
        </div>
    );
}

export default App;
