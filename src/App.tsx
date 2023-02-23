import React from 'react';
import './App.css';
import {Main} from "./components/main/Main";
import {Sidebar} from "./components/sidebar/Sidebar";
import {About} from "./components/about/About";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Main/>
            <About/>
        </div>
    );
}

export default App;
