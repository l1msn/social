import React, { type JSX, Suspense, useEffect } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import Navbar from '@/widgets/Navbar';
import Sidebar from '@/widgets/Sidebar';
import useAppDispatch from '../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import AppRouter from './providers/Router';
import useTheme from '@/shared/lib/hooks/useTheme/useTheme';
import Portal from '@/shared/ui/Portal';
import { userActions, UserSelectors } from '@/entities/User';

const App: React.FC = (): JSX.Element => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const init = useSelector(UserSelectors.getUserInit);

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
                        <Sidebar />
                        {init && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        </Portal>
    );
};

export default App;
