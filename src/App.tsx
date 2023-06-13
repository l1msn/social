import React, { Suspense } from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import MainPageLazy from './pages/MainPage/MainPage.lazy';

const App: React.FC = () => {
    return (
        <div className="app">
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
