import React, {type JSX, Suspense, useEffect} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import classNames from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/Router';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import Portal from 'widgets/Portal';
import {userActions} from '../entities/User';
import useAppDispatch from '../shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {getUserInit} from 'entities/User';

const App: React.FC = (): JSX.Element => {
    const {theme} = useTheme();

    const dispatch = useAppDispatch();

    const init = useSelector(getUserInit);

    useEffect(() => {
        console.log('init auth data');
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Portal>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar/>
                        {init && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        </Portal>
    );
};

export default App;
