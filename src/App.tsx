import React, {JSX, Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import MainPageLazy from './pages/MainPage/MainPage.lazy';

import useTheme from "./hooks/useTheme";


const App: React.FC = (): JSX.Element => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div> Loading... </div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />}></Route>
                    <Route path={'/'} element={<MainPageLazy />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
