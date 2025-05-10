import React from 'react';
import {Route, Routes} from 'react-router-dom'; // install
import {ThemeProvider, CssBaseline} from '@mui/material'; // install
import Main from './pages/Main';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './components/Contact';
import darkTheme from './darkTheme';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/> {/* Ensures background and text colors are applied globally */}
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </ThemeProvider>
    )
}

export default App;
