import React from 'react';
import './App.css';
import {Main} from "./components/main/Main";
import {Sidebar} from "./components/sidebar/Sidebar";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Main/>
            <About/>
            <Skills/>
        </div>
    );
}

export default App;
