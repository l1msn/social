import React, { type JSX, Suspense, useEffect } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import Navbar from '@/widgets/Navbar';
import Sidebar from '@/widgets/Sidebar';
import useAppDispatch from '../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import AppRouter from './providers/Router';
import useTheme from '@/shared/lib/hooks/useTheme/useTheme';
import { initAuthData, UserSelectors } from '@/entities/User';
import PageLoader from '@/widgets/PageLoader';
import withTheme from './providers/ThemeProvider/lib/withTheme';
import { ToggleFeatures } from '@/shared/features';
import Portal from '@/shared/ui/redesigned/Portal';
import { MainLayout } from '@/shared/layouts';

const App: React.FC = (): JSX.Element => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const init = useSelector(UserSelectors.getUserInit);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!init) {
        return <PageLoader />;
    }

    const DeprecatedApp = (
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

    const RedesignedApp = (
        <Portal>
            <div className={classNames('app_redesigned', {}, [theme])}>
                <Suspense>
                    <MainLayout
                        header={<Navbar />}
                        content={<AppRouter />}
                        sidebar={<Sidebar />}
                        toolbar={<div>asd</div>}
                    />
                </Suspense>
            </div>
        </Portal>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={DeprecatedApp}
            on={RedesignedApp}
        />
    );
};

export default withTheme(App);
