import { EditableProfileCard } from '@/features/EditableProfileCard';
import TestProvider from '@/shared/lib/tests/testProvider/testProvider';

describe('EditableProfileCard test on stabs', () => {
    const stabProfileId: string = '1';
    it('playground', () => {
        cy.viewport(600, 600);
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: stabProfileId,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={stabProfileId} />
            </TestProvider>,
        );
    });
});
