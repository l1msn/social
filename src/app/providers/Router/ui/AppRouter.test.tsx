import AppRouter from './AppRouter';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';
import {RoutePaths} from '@/shared/consts/routerPaths';
import {screen} from '@testing-library/react';
import {UserRole} from '@/entities/User';

describe('testing AppRouter functional', () => {
    test('success navigate render', async () => {
        componentRender(<AppRouter/>, {
            route: RoutePaths.getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('unsuccessful navigate render', async () => {
        componentRender(<AppRouter/>, {
            route: '/asds',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('not auth navigate render', async () => {
        componentRender(<AppRouter/>, {
            route: RoutePaths.getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('auth navigate render', async () => {
        componentRender(<AppRouter/>, {
            route: RoutePaths.getRouteProfile('1'),
            initialState: {
                user: {
                    init: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('auth navigate without role render', async () => {
        componentRender(<AppRouter/>, {
            route: RoutePaths.getRouteAdminPanel(),
            initialState: {
                user: {
                    init: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('auth navigate with role render', async () => {
        componentRender(<AppRouter/>, {
            route: RoutePaths.getRouteAdminPanel(),
            initialState: {
                user: {
                    init: true,
                    authData: {roles: [UserRole.ADMIN]},
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
