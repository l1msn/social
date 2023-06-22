import React, {JSX, Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {Link, Route, Routes} from 'react-router-dom';





const App: React.FC = (): JSX.Element => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div> Loading... </div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}></Route>
                    <Route path={'/'} element={<MainPage />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
