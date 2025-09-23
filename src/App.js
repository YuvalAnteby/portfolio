import React from 'react';
import {Route, Routes} from 'react-router-dom'; // install
import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about-me" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
            </Routes>
    );
}

export default App;
