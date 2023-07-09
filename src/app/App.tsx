import React, {type JSX, Suspense, useEffect, useState} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/Router';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import Modal from 'widgets/Modal';
import Portal from 'widgets/Portal';
import {useDispatch} from 'react-redux';
import {userActions} from '../entities/User';

const App: React.FC = (): JSX.Element => {
    const {theme} = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Portal>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar/>
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </Portal>
    );
};

export default App;
