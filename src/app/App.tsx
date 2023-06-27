import React, {JSX, Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/Router";
import Navbar from "widgets/Navbar";
import Sidebar from "widgets/Sidebar";

const App: React.FC = (): JSX.Element => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
