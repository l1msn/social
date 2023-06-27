import React, {JSX} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/Router";
import Navbar from "widgets/Navbar";

const App: React.FC = (): JSX.Element => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
