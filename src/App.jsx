import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function App(){
    return (
        <div>
            <Nav />
            <Header />
            <About />
            <Skills />
            <Education />
            <Projects  />
                    </div>
    );
}
