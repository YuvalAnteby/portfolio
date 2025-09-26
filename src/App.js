import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import {About} from './pages/About';
import {Projects} from './pages/Projects';
import {MainLayout} from "./layout/MainLayout";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/aboutme" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
